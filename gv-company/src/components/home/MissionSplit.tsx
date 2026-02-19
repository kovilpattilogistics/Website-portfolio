"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const features = [
    {
        title: "World-Class Standards",
        desc: "Grade-A digital infrastructure—usually reserved for corporate environments—brought to your local business.",
    },
    {
        title: "Anchor-Grade Systems",
        desc: "Everything we build is built to last, bringing immediate value to your daily operations.",
    },
    {
        title: "No Recurring Bloat",
        desc: "You own what we build. No hidden monthly fees for assets that should belong to you.",
    },
];

export default function MissionSplit() {
    return (
        <section className="py-24 bg-surface-2">
            <div className="container-luxury px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")`,
                                }}
                            />
                        </div>
                        {/* Floating stat badge */}
                        <div className="absolute -bottom-6 -right-4 md:right-8 bg-white shadow-luxury rounded-sm p-6 border border-stone-100">
                            <p className="font-heading text-4xl text-text mb-1">40%</p>
                            <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold">Avg. Revenue Lift</p>
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-gold-muted font-semibold mb-4">Why GV&Co</p>
                        <h2 className="font-heading text-4xl md:text-5xl text-text mb-8 leading-tight">
                            Luxury without<br />
                            <span className="italic font-light">inefficiency.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-10 max-w-md">
                            We challenge the conventional process of scaling. We believe every local business deserves world-class systems—without the enterprise price tag.
                        </p>

                        <div className="space-y-6 mb-10">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-text mb-1">{f.title}</h4>
                                        <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/process" className="btn-primary">
                            See Our Process
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
