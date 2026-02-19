"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroV5() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-stone-900">
            {/* Background Media */}
            <div className="absolute inset-0">
                {/* Placeholder for video - using high quality image for now */}
                {/* Ideally this would be a <video> tag looping silently */}
                <Image
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                    alt="Serene Landscape"
                    fill
                    className="object-cover opacity-80"
                    priority
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
            </div>

            {/* Content - Absolute Minimalism */}
            <div className="relative h-full flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                >
                    <h2 className="font-heading text-white text-5xl md:text-7xl lg:text-8xl tracking-widest font-light mb-4 drop-shadow-2xl">
                        THE SILENT<br />PARTNER
                    </h2>
                    <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.3em] font-light max-w-md mx-auto drop-shadow-lg">
                        Elevating Brand & Operations
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-white text-[10px] uppercase tracking-[0.2em]">Explore</span>
                <ChevronDown className="w-4 h-4 text-white animate-bounce" />
            </motion.div>
        </div>
    );
}
