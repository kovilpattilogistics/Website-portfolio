"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { MessageCircle, Loader2, CheckCircle2 } from "lucide-react";

type FormData = {
    name: string;
    businessName: string;
    businessType: string;
    city: string;
    whatsapp: string;
    problem: string;
    honeypot?: string; // Anti-spam
};

export default function AuditForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
    const [isSuccess, setIsSuccess] = useState(false);
    const [whatsappLink, setWhatsappLink] = useState("");

    const onSubmit = async (data: FormData) => {
        if (data.honeypot) return; // Spam check

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const message = `Hi GV&Co, I'm ${data.name} from ${data.businessName} (${data.businessType}) in ${data.city}. I want help with ${data.problem}. Please share the next steps for a free DT&O audit.`;
        const link = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

        setWhatsappLink(link);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're almost done!</h3>
                <p className="text-stone-400 mb-8">Click below to send your details via WhatsApp and start the audit.</p>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white border-none"
                >
                    <MessageCircle className="w-5 h-5" />
                    Continue on WhatsApp
                </a>
            </div>
        );
    }

    return (
        <section className="bg-[#F5F0EA] py-32 relative overflow-hidden" id="audit">
            <div className="container-luxury max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="eyebrow mb-6 block text-[#8A7F72]">Free Consultation</span>
                    <h2 className="font-heading text-display-md text-[#2C2A27] mb-6">
                        Get your Free Audit
                    </h2>
                    <p className="text-[#8A7F72] text-lg max-w-md mx-auto leading-relaxed">
                        No commitment. Just a clear roadmap to growth.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                    {/* Name */}
                    <div className="relative group">
                        <input
                            {...register("name", { required: "Name is required" })}
                            placeholder=" "
                            className="peer w-full bg-transparent border-b border-[#E5E0D8] py-4 text-[#2C2A27] text-lg placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors duration-500"
                        />
                        <label className="absolute left-0 top-4 text-[#8A7F72] text-lg transition-all duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#8A7F72] peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#8A7F72]">
                            Your Name
                        </label>
                        {errors.name && <span className="text-red-400 text-xs mt-2 block">{errors.name.message}</span>}
                    </div>

                    {/* Business Name */}
                    <div className="relative group">
                        <input
                            {...register("businessName")}
                            placeholder=" "
                            className="peer w-full bg-transparent border-b border-[#E5E0D8] py-4 text-[#2C2A27] text-lg placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors duration-500"
                        />
                        <label className="absolute left-0 top-4 text-[#8A7F72] text-lg transition-all duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#8A7F72] peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#8A7F72]">
                            Business Name
                        </label>
                    </div>

                    {/* Type & City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative group">
                            <select
                                {...register("businessType", { required: true })}
                                className="peer w-full bg-transparent border-b border-[#E5E0D8] py-4 text-[#2C2A27] text-lg focus:outline-none focus:border-[#D4AF37] transition-colors duration-500 appearance-none rounded-none"
                            >
                                <option value="" className="bg-[#F5F0EA]">Select Business Type</option>
                                <option value="Restaurant" className="bg-[#F5F0EA]">Restaurant</option>
                                <option value="Hotel" className="bg-[#F5F0EA]">Hotel / Lodge</option>
                                <option value="Resort" className="bg-[#F5F0EA]">Resort</option>
                                <option value="Supermarket" className="bg-[#F5F0EA]">Supermarket</option>
                                <option value="Retail" className="bg-[#F5F0EA]">Retail Shop</option>
                                <option value="Clinic" className="bg-[#F5F0EA]">Clinic</option>
                                <option value="Other" className="bg-[#F5F0EA]">Other</option>
                            </select>
                        </div>
                        <div className="relative group">
                            <input
                                {...register("city", { required: "City is required" })}
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-[#E5E0D8] py-4 text-[#2C2A27] text-lg placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors duration-500"
                            />
                            <label className="absolute left-0 top-4 text-[#8A7F72] text-lg transition-all duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#8A7F72] peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#8A7F72]">
                                City
                            </label>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="relative group">
                        <input
                            {...register("whatsapp", { required: "WhatsApp number is required", pattern: { value: /^[0-9]{10}$/, message: "Valid 10-digit number required" } })}
                            placeholder=" "
                            type="tel"
                            className="peer w-full bg-transparent border-b border-[#E5E0D8] py-4 text-[#2C2A27] text-lg placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors duration-500"
                        />
                        <label className="absolute left-0 top-4 text-[#8A7F72] text-lg transition-all duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#8A7F72] peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#8A7F72]">
                            WhatsApp Number
                        </label>
                        {errors.whatsapp && <span className="text-red-400 text-xs mt-2 block">{errors.whatsapp.message}</span>}
                    </div>

                    {/* Problem */}
                    <div className="relative group">
                        <select
                            {...register("problem", { required: true })}
                            className="peer w-full bg-transparent border-b border-[#E5E0D8] py-4 text-[#2C2A27] text-lg focus:outline-none focus:border-[#D4AF37] transition-colors duration-500 appearance-none rounded-none"
                        >
                            <option value="" className="bg-[#F5F0EA]">Biggest Problem?</option>
                            <option value="Manual Billing" className="bg-[#F5F0EA]">Manual Billing / Invoicing</option>
                            <option value="Low Sales" className="bg-[#F5F0EA]">Low Sales / Walk-ins</option>
                            <option value="Inventory Issues" className="bg-[#F5F0EA]">Inventory Mismatch</option>
                            <option value="Staff Management" className="bg-[#F5F0EA]">Staff / Theft Issues</option>
                            <option value="No Online Presence" className="bg-[#F5F0EA]">No Website / Online Orders</option>
                        </select>
                    </div>

                    {/* Honeypot (Hidden) */}
                    <input {...register("honeypot")} type="text" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="pt-8 text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary min-w-[200px] bg-[#1C1917] hover:bg-[#2C2A27] text-white py-5 px-10 text-sm tracking-[0.2em] font-light disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    PROCESSING...
                                </>
                            ) : (
                                "START FREE AUDIT"
                            )}
                        </button>
                    </div>

                    <p className="text-center text-xs text-[#8A7F72] mt-4 opacity-60 tracking-wider">
                        WE RESPECT YOUR PRIVACY. NO SPAM, EVER.
                    </p>
                </form>
            </div>
        </section>
    );
}
