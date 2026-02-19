"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Free Audit",
        desc: "We analyze your current setup (bills, stock, customers) to find hidden leaks."
    },
    {
        num: "02",
        title: "Roadmap",
        desc: "You get a simple plan: what to fix first for quick revenue wins."
    },
    {
        num: "03",
        title: "Build & Deploy",
        desc: "We engage. Branding, website, automations—all done in weeks."
    },
    {
        num: "04",
        title: "Launch Support",
        desc: "We train your staff and stay onboard 24/7 for support."
    }
];

export default function ProcessTimeline() {
    return (
        <section className="section-padding bg-[#F5F0EA]">
            <div className="container-luxury">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    {/* Sticky Header */}
                    <div className="md:col-span-4">
                        <span className="eyebrow mb-6 block text-[#8A7F72]">How We Work</span>
                        <h2 className="font-heading text-display-sm text-[#2C2A27] leading-tight">
                            Partnership,<br />
                            <em className="not-italic text-[#8A7F72]">not just a project.</em>
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="md:col-span-8">
                        <div className="space-y-0">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                    className="border-t border-[#E5E0D8] py-10 flex gap-8 last:border-b"
                                >
                                    <span className="font-heading text-3xl text-[#E5E0D8] flex-shrink-0 leading-none">
                                        {step.num}
                                    </span>
                                    <div>
                                        <h3 className="font-heading text-2xl text-[#2C2A27] mb-3 font-light">{step.title}</h3>
                                        <p className="font-body text-[#8A7F72] leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-8 text-[#8A7F72] text-xs uppercase tracking-[0.15em] opacity-60">
                            * Timelines and milestones are shared explicitly after the Free Audit phase.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
