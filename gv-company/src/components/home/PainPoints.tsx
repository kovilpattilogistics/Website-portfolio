"use client";

import { motion } from "framer-motion";
import {
    FileWarning,
    PhoneMissed,
    Store,
    PackageX,
    UserX,
    Palette,
    TrendingDown,
    Smartphone
} from "lucide-react";

const painPoints = [
    { icon: FileWarning, title: "Manual Billing", desc: "Handwritten bills and messy ledgers." },
    { icon: PhoneMissed, title: "Missed Orders", desc: "Late WhatsApp replies losing sales." },
    { icon: Store, title: "Local Limits", desc: "Customers only form your street." },
    { icon: PackageX, title: "Stock Chaos", desc: "Running out of best-sellers." },
    { icon: UserX, title: "One-Time Buyers", desc: "No system to bring them back." },
    { icon: Palette, title: "Weak Branding", desc: "Looking smaller than you are." },
    { icon: TrendingDown, title: "Blind Spots", desc: "No daily profit/sales view." },
    { icon: Smartphone, title: "App Fatigue", desc: "Too many complex tools." },
];

export default function PainPoints() {
    return (
        <section className="section-padding bg-stone-950 relative border-t border-stone-900">
            <div className="container-luxury px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-display-lg text-white mb-4">
                        If this feels familiar, <span className="text-gold italic">we can fix it.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {painPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-stone-900/40 border border-stone-800/60 p-6 rounded-xl hover:border-gold/30 hover:bg-stone-900/60 transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                                <point.icon className="w-5 h-5 text-stone-400 group-hover:text-gold transition-colors" />
                            </div>
                            <h3 className="text-stone-200 font-medium text-lg mb-2">{point.title}</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
