"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play, ShoppingBag, Bed, Coffee, ShoppingCart, UserCheck, Stethoscope } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const templates = [
    {
        title: "Restaurant Order & Bill",
        icon: ShoppingBag,
        bestFor: "Dine-in / QSR",
        modules: ["Digital Menu", "KOT System", "Waiter App"],
        color: "from-orange-500/20 to-red-900/40"
    },
    {
        title: "Hotel Booking Engine",
        icon: Bed,
        bestFor: "Lodges / Resorts",
        modules: ["Room Inventory", "Guest CRM", "Check-in Flow"],
        color: "from-blue-500/20 to-indigo-900/40"
    },
    {
        title: "Resort Experiences",
        icon: Coffee,
        bestFor: "Luxury Stays",
        modules: ["Package Builder", "Activity Booking", "Spa & Dining"],
        color: "from-teal-500/20 to-emerald-900/40"
    },
    {
        title: "Supermarket POS",
        icon: ShoppingCart,
        bestFor: "Retail Chains",
        modules: ["Barcode Scan", "Stock Alert", "GST Billing"],
        color: "from-yellow-500/20 to-amber-900/40"
    },
    {
        title: "WhatsApp Catalog",
        icon: UserCheck,
        bestFor: "Boutiques / Home Sellers",
        modules: ["Auto-Reply", "Order Parsing", "Payment Link"],
        color: "from-pink-500/20 to-rose-900/40"
    },
    {
        title: "Clinic Appointments",
        icon: Stethoscope,
        bestFor: "Doctors / Dentists",
        modules: ["Slot Management", "Rx Print", "Follow-up SMS"],
        color: "from-cyan-500/20 to-sky-900/40"
    }
];

export default function TemplateCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false); // Default to false for better UX
    const shouldReduceMotion = useReducedMotion();

    // Auto-scroll logic (disabled if reduced motion or paused)
    useEffect(() => {
        if (!isPlaying || shouldReduceMotion) return;
        const interval = setInterval(() => {
            scroll('right');
        }, 3000);
        return () => clearInterval(interval);
    }, [isPlaying, shouldReduceMotion]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: shouldReduceMotion ? 'auto' : 'smooth'
            });
        }
    };

    return (
        <section className="section-padding bg-stone-950 text-white border-t border-stone-900 overflow-hidden">
            <div className="container-luxury px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-gold text-xs font-bold tracking-widest uppercase mb-4 block">Proven Systems</span>
                        <h2 className="font-heading text-display-lg">Industry-Specific Templates</h2>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:text-gold hover:border-gold transition-colors"
                            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                        >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <div className="h-6 w-px bg-stone-800 mx-2" />
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:bg-gold hover:text-stone-950 transition-all"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:bg-gold hover:text-stone-950 transition-all"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                    onMouseEnter={() => setIsPlaying(false)}
                    onKeyDown={() => setIsPlaying(false)}
                >
                    {templates.map((t, i) => (
                        <div
                            key={i}
                            className={`flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br ${t.color} border border-white/5 relative group snap-center`}
                        >

                            {/* Icon & Label */}
                            <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-2xl bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                                    <t.icon className="w-7 h-7" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider opacity-60 bg-black/20 px-3 py-1 rounded-full">{t.bestFor}</span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{t.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {t.modules.map((m, j) => (
                                        <span key={j} className="text-xs font-medium bg-black/20 border border-white/10 px-3 py-1.5 rounded-lg text-white/80">
                                            {m}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gold transition-colors flex items-center justify-center gap-2 group-hover:shadow-glow">
                                    Request Template
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
