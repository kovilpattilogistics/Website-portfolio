"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
    name: string;
    email: string;
    phone: string;
    businessType: string;
    message: string;
    honeypot: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    businessType?: string;
    message?: string;
}

const businessTypes = [
    "Retail / Shop",
    "Restaurant / Café",
    "Clinic / Healthcare",
    "Salon / Spa",
    "Logistics / Delivery",
    "Manufacturing",
    "Education / Training",
    "Real Estate",
    "Services (Plumbing, Electrical, etc.)",
    "Other",
];

const fieldBase = "peer w-full bg-transparent border-b border-[#E5E0D8] py-4 text-[#2C2A27] text-lg placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors duration-500";
const labelBase = "absolute left-0 top-4 text-[#8A7F72] text-base transition-all duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#8A7F72]";

export default function ContactForm() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
        honeypot: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please enter your name.";
        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
        if (!formData.businessType) newErrors.businessType = "Please select your business type.";
        if (!formData.message.trim()) newErrors.message = "Please tell us about your business.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.honeypot) return;
        if (!validate()) return;

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        router.push("/thank-you");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-10">
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
                <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <input type="text" id="name" name="name" placeholder=" " value={formData.name} onChange={handleChange} className={`${fieldBase} ${errors.name ? "border-red-400" : ""}`} />
                    <label htmlFor="name" className={labelBase}>Full Name *</label>
                    {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div className="relative">
                    <input type="email" id="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} className={`${fieldBase} ${errors.email ? "border-red-400" : ""}`} />
                    <label htmlFor="email" className={labelBase}>Email Address *</label>
                    {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
                </div>
            </div>

            {/* Phone + Business Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <input type="tel" id="phone" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} className={`${fieldBase} ${errors.phone ? "border-red-400" : ""}`} />
                    <label htmlFor="phone" className={labelBase}>Phone / WhatsApp *</label>
                    {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone}</p>}
                </div>
                <div className="relative">
                    <select id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} className={`${fieldBase} appearance-none rounded-none ${errors.businessType ? "border-red-400" : ""}`}>
                        <option value="" className="bg-[#F5F0EA]">Select business type</option>
                        {businessTypes.map((type) => <option key={type} value={type} className="bg-[#F5F0EA]">{type}</option>)}
                    </select>
                    {errors.businessType && <p className="mt-2 text-xs text-red-400">{errors.businessType}</p>}
                </div>
            </div>

            {/* Message */}
            <div className="relative">
                <textarea id="message" name="message" placeholder=" " value={formData.message} onChange={handleChange} rows={5} className={`${fieldBase} resize-none ${errors.message ? "border-red-400" : ""}`} />
                <label htmlFor="message" className={labelBase}>Tell us about your business *</label>
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
            </div>

            <div className="pt-4">
                <button type="submit" disabled={isSubmitting} className="btn-primary bg-[#1C1917] hover:bg-[#2C2A27] text-white py-5 px-10 text-sm tracking-[0.2em] font-light disabled:opacity-60 disabled:cursor-not-allowed">
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
                <p className="text-xs text-[#8A7F72] mt-4 opacity-60 tracking-wider uppercase">
                    We respond within 24 hours. Your information is never shared.
                </p>
            </div>
        </form>
    );
}
