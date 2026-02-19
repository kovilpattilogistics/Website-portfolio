"use client";

import { motion } from "framer-motion";
import { Palette, Globe, Zap, BarChart3, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const pillars = [
    {
        icon: Palette,
        title: "Branding",
        desc: "Unified logos, colors, and signage.",
        link: "/services/branding",
        gradient: "from-rose-900/40 to-rose-950/80",
        border: "group-hover:border-rose-500/50",
        iconColor: "text-rose-400",
        delay: 0
    },
    {
        icon: Globe,
        title: "Websites",
        desc: "Online ordering and digital storefronts.",
        link: "/services/websites",
        gradient: "from-indigo-900/40 to-indigo-950/80",
        border: "group-hover:border-indigo-500/50",
        iconColor: "text-indigo-400",
        delay: 0.1
    },
    {
        icon: Zap,
        title: "Automation",
        desc: "Auto-billing and stock alerts.",
        link: "/services/automation",
        gradient: "from-emerald-900/40 to-emerald-950/80",
        border: "group-hover:border-emerald-500/50",
        iconColor: "text-emerald-400",
        delay: 0.2
    },
    {
        icon: BarChart3,
        title: "Analytics",
        desc: "Daily sales and profit dashboards.",
        link: "/services/analytics",
        gradient: "from-amber-900/40 to-yellow-950/80",
        border: "group-hover:border-gold/50",
        iconColor: "text-gold",
        delay: 0.3
    }
];

export default function ValuePillars() {
    return (
        <section className="py-20 bg-stone-950">
            <div className="container-luxury px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, i) => (
                        <Link href={pillar.link} key={i} className="group block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: pillar.delay }}
                                className={`h-full min-h-[300px] p-8 border border-stone-800 rounded-3xl bg-gradient-to-br ${pillar.gradient} hover:scale-[1.02] transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${pillar.border}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-stone-950/50 backdrop-blur-md flex items-center justify-center border border-white/5 ${pillar.iconColor} shadow-lg mb-8`}>
                                    <pillar.icon className="w-7 h-7" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                                    <p className="text-stone-400 text-sm leading-relaxed">{pillar.desc}</p>
                                </div>
                                <ArrowUpRight className="absolute top-6 right-6 text-stone-600 group-hover:text-white transition-colors" />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
