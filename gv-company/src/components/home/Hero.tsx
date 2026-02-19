"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-950 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/80 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")`,
                    }}
                />
            </div>

            <div className="container-luxury relative z-20 px-6 text-center">
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white/60 tracking-[0.25em] text-xs uppercase font-medium mb-8"
                >
                    Branding · Automation · Growth
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-8 leading-[1.05] tracking-tight"
                >
                    GV & Company
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-white/80 text-base md:text-lg font-light tracking-wide max-w-lg mx-auto mb-12 leading-relaxed"
                >
                    We transform chaotic local businesses into organized,
                    profit-generating brands using modern technology and design.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/audit"
                        className="w-full sm:w-auto bg-white text-stone-900 px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-gold hover:text-stone-900 transition-all duration-300 text-center"
                    >
                        Get Free Audit
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-center"
                    >
                        Explore Solutions
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
