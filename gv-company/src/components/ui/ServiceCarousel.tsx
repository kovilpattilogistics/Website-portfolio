"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/constants";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

// Mock data integration with images
const services = [
    {
        title: "Shop Branding",
        desc: "Signage & Identity", // Eyebrow
        image: IMAGES.SERVICES.BRANDING,
        link: "/services/branding",
    },
    {
        title: "Web & Orders",
        desc: "Online Presence",
        image: IMAGES.SERVICES.WEB,
        link: "/services/web-design",
    },
    {
        title: "Stock & Billing",
        desc: "Operations",
        image: IMAGES.SERVICES.DTO,
        link: "/services/dto",
    },
    {
        title: "Local Marketing",
        desc: "Growth",
        image: IMAGES.SERVICES.MARKETING,
        link: "/services/marketing",
    },
];

export default function ServiceCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350; // Approximates card width
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full relative group/carousel">
            {/* Navigation Buttons */}
            <div className="absolute -top-16 right-0 hidden md:flex gap-2">
                <button
                    onClick={() => scroll('left')}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface-2 hover:border-gold transition-colors text-text bg-white shadow-sm"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface-2 hover:border-gold transition-colors text-text bg-white shadow-sm"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <motion.div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-12 pt-4 px-6 md:px-0 scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory"
                drag="x"
                dragConstraints={{ right: 0, left: -1000 }}
                whileTap={{ cursor: "grabbing" }}
            >
                {services.map((s, i) => (
                    <Link href={s.link} key={i} className="group relative flex-shrink-0 w-[85vw] sm:w-[300px] h-[480px] rounded-2xl overflow-hidden card-luxury shadow-luxury hover:shadow-gold transition-all duration-500 snap-center">
                        <div className="h-full flex flex-col">
                            {/* Image Section - Taller for better visual impact */}
                            <div className="relative h-[70%] overflow-hidden">
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Section - Cleaner Typography */}
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between relative z-10 border-t border-black/5">
                                <div>
                                    <p className="text-gold-dark text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{s.desc}</p>
                                    <h3 className="text-2xl font-heading text-text group-hover:text-gold-dark transition-colors">{s.title}</h3>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm font-medium text-muted-2 group-hover:text-text transition-colors">Learn More</span>
                                    <div className="w-8 h-8 rounded-full bg-surface-2 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* 'More' Card */}
                <Link href="/services" className="group relative flex-shrink-0 w-[60vw] sm:w-[220px] h-[480px] rounded-2xl overflow-hidden flex items-center justify-center border-dashed border-2 border-border-2 bg-bg hover:border-gold hover:bg-gold/5 transition-all duration-300 snap-center">
                    <div className="text-center px-6">
                        <div className="w-14 h-14 rounded-full bg-white shadow-luxury flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="text-lg font-heading text-text mb-1">View All</h3>
                        <p className="text-xs text-muted">Services & Solutions</p>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}
