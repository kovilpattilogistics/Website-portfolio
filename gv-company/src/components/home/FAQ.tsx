"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    { q: "How long does it take?", a: "Typically 2-4 weeks for a complete overhaul regarding branding and website. Automations can go live in parallel." },
    { q: "Do you support GST billing?", a: "Yes, our automation solutions include GST-compliant invoicing that can be sent directly via WhatsApp." },
    { q: "Can you integrate with my existing POS?", a: "In most cases, yes. We build custom bridges or recommend modern cloud-POS systems that communicate with our tools." },
    { q: "Do you provide ongoing support?", a: "Absolutely. We offer post-launch support packages including technical maintenance and content updates." },
    { q: "Can this work for multiple outlets?", a: "Yes, our dashboards are designed to aggregate data from multiple locations into a single view for owners." },
    { q: "Do I need an App or is a Website enough?", a: "For 90% of SMBs, a PWA (Progressive Web App) website is superior. No download required for customers, and much cheaper for you." },
    { q: "Will you help with content?", a: "Yes, that's part of our audit. We help refine your menu, service lists, and about sections." },
    { q: "How much does the audit cost?", a: "The DT&O Audit is 100% free. It gives us a chance to show you value before you pay a rupee." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-[#F5F0EA] text-[#2C2A27]">
            <div className="container-luxury max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    {/* Header */}
                    <div className="md:col-span-4">
                        <span className="eyebrow mb-6 block text-[#8A7F72]">FAQ</span>
                        <h2 className="font-heading text-display-sm text-[#2C2A27] mb-6">
                            Common<br />Questions.
                        </h2>
                    </div>

                    {/* Questions */}
                    <div className="md:col-span-8">
                        <div className="space-y-0">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border-t border-[#E5E0D8] last:border-b">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        className="w-full flex items-center justify-between py-8 text-left group transition-all"
                                    >
                                        <span className="font-heading text-xl text-[#2C2A27] group-hover:text-[#B45309] transition-colors duration-500">
                                            {faq.q}
                                        </span>
                                        <div className="relative w-6 h-6 flex items-center justify-center">
                                            <motion.div
                                                animate={{ rotate: openIndex === i ? 90 : 0, opacity: openIndex === i ? 0 : 1 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <Plus className="w-5 h-5 text-[#8A7F72] stroke-[1.5px]" />
                                            </motion.div>
                                            <motion.div
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: openIndex === i ? 0 : 90, opacity: openIndex === i ? 1 : 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <Minus className="w-5 h-5 text-[#B45309] stroke-[1.5px]" />
                                            </motion.div>
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-8 pr-8 text-[#8A7F72] leading-relaxed text-lg font-light">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
