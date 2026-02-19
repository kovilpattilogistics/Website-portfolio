"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuditFormData {
    name: string;
    email: string;
    phone: string;
    businessType: string;
    honeypot: string;
}

interface AuditFormErrors {
    name?: string;
    email?: string;
    phone?: string;
    businessType?: string;
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
    "Services",
    "Other",
];

export default function AuditForm() {
    const router = useRouter();
    const [formData, setFormData] = useState<AuditFormData>({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        honeypot: "",
    });
    const [errors, setErrors] = useState<AuditFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (): boolean => {
        const newErrors: AuditFormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please enter your name.";
        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
        if (!formData.businessType) newErrors.businessType = "Please select your business type.";
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
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof AuditFormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="website-audit">Leave this field empty</label>
                <input
                    type="text"
                    id="website-audit"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            {/* Name */}
            <div>
                <label htmlFor="audit-name" className="block text-sm font-medium text-muted mb-2">
                    Your Name <span className="text-gold">*</span>
                </label>
                <input
                    type="text"
                    id="audit-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`input-luxury ${errors.name ? "error" : ""}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "audit-name-error" : undefined}
                />
                {errors.name && (
                    <p id="audit-name-error" className="mt-1.5 text-xs text-red-400" role="alert">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="audit-email" className="block text-sm font-medium text-muted mb-2">
                    Email Address <span className="text-gold">*</span>
                </label>
                <input
                    type="email"
                    id="audit-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`input-luxury ${errors.email ? "error" : ""}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "audit-email-error" : undefined}
                />
                {errors.email && (
                    <p id="audit-email-error" className="mt-1.5 text-xs text-red-400" role="alert">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="audit-phone" className="block text-sm font-medium text-muted mb-2">
                    Phone / WhatsApp <span className="text-gold">*</span>
                </label>
                <input
                    type="tel"
                    id="audit-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                    className={`input-luxury ${errors.phone ? "error" : ""}`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "audit-phone-error" : undefined}
                />
                {errors.phone && (
                    <p id="audit-phone-error" className="mt-1.5 text-xs text-red-400" role="alert">
                        {errors.phone}
                    </p>
                )}
            </div>

            {/* Business Type */}
            <div>
                <label htmlFor="audit-businessType" className="block text-sm font-medium text-muted mb-2">
                    Business Type <span className="text-gold">*</span>
                </label>
                <select
                    id="audit-businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`input-luxury ${errors.businessType ? "error" : ""}`}
                    aria-invalid={!!errors.businessType}
                    aria-describedby={errors.businessType ? "audit-businessType-error" : undefined}
                >
                    <option value="">Select your business type</option>
                    {businessTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                {errors.businessType && (
                    <p id="audit-businessType-error" className="mt-1.5 text-xs text-red-400" role="alert">
                        {errors.businessType}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
                {isSubmitting ? "Submitting..." : "Get My Free Audit →"}
            </button>

            <p className="text-xs text-muted text-center">
                Free. No commitment. We&apos;ll contact you within 24 hours.
            </p>
        </form>
    );
}
