"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
    {
        title: "Branding",
        subtitle: "Identity & Visuals",
        desc: "Professional brand kits, logos, and complete visual identity systems for local businesses.",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        href: "/services/branding",
    },
    {
        title: "Digital Presence",
        subtitle: "Websites & Commerce",
        desc: "High-performance websites and e-commerce solutions optimised for mobile-first India.",
        img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
        href: "/services/websites",
    },
    {
        title: "Automation",
        subtitle: "Systems & Ops",
        desc: "WhatsApp billing, stock alerts, and customer communication—all on autopilot.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        href: "/services/automation",
    }
];

export default function CategoryGrid() {
    return (
        <section className="py-24 bg-bg">
            <div className="container-luxury px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-14">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gold-muted font-semibold mb-3">What We Do</p>
                        <h2 className="font-heading text-4xl md:text-5xl text-text leading-tight">Our Expertise</h2>
                    </div>
                    <Link href="/services" className="group flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-text-2 hover:text-text transition-colors pb-1 border-b border-transparent hover:border-text">
                        View All
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Link href={cat.href} className="group block">
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${cat.img}")` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                                    {/* Hover Arrow */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight className="w-4 h-4 text-stone-900" />
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-xs uppercase tracking-[0.15em] text-muted mb-1">{cat.subtitle}</p>
                                <h3 className="font-heading text-2xl text-text mb-2 group-hover:text-gold-muted transition-colors">{cat.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{cat.desc}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
