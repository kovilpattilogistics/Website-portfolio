"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Palette, Globe, Zap, BarChart3, Receipt, Truck, MessageCircle, FileText, CheckCircle2, X, Menu } from "lucide-react";

const navItems = [
    {
        title: "Services",
        icon: Palette,
        links: [
            { name: "Branding", href: "/services/branding", icon: Palette, img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=500&auto=format&fit=crop", desc: "Logos & Identity" },
            { name: "Websites", href: "/services/websites", icon: Globe, img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=500&auto=format&fit=crop", desc: "Online Stores" },
            { name: "Automation", href: "/services/automation", icon: Zap, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop", desc: "Auto-Billing" },
            { name: "Analytics", href: "/services/analytics", icon: BarChart3, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop", desc: "Growth Reports" },
        ]
    },
    {
        title: "Automations",
        icon: Zap,
        links: [
            { name: "WhatsApp Billing", href: "/automations#billing", icon: Receipt, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop", desc: "Invoices on Chat" },
            { name: "Order Tracking", href: "/automations#tracking", icon: Truck, img: "https://images.unsplash.com/photo-1566576912906-2543b8146e33?q=80&w=500&auto=format&fit=crop", desc: "Live Updates" },
            { name: "Customer Chat", href: "/automations#chat", icon: MessageCircle, img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=500&auto=format&fit=crop", desc: "Auto-Replies" },
        ]
    },
    {
        title: "Process",
        icon: FileText,
        links: [
            { name: "Free Audit", href: "/process#audit", icon: FileText, img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=500&auto=format&fit=crop", desc: "Check Your Biz" },
            { name: "Implementation", href: "/process#build", icon: Zap, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop", desc: "We Build It" },
            { name: "Success Stories", href: "/process#success", icon: CheckCircle2, img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop", desc: "Real Earning" },
        ]
    }
];

export default function SubHeader() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenIndex(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative z-40 -mt-8 mb-16 px-4" ref={navRef}>

            {/* Desktop Navigation (Pill) */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden md:block mx-auto max-w-4xl"
            >
                <div className="flex items-center justify-center gap-1 bg-white rounded-full shadow-2xl border border-stone-200 p-1.5 relative">
                    {navItems.map((item, i) => (
                        <div key={i} className="relative group">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`
                                    flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
                                    ${openIndex === i
                                        ? "bg-stone-900 text-white shadow-lg transform scale-105"
                                        : "text-stone-500 hover:bg-stone-100/80 hover:text-stone-900"
                                    }
                                `}
                            >
                                <item.icon className={`w-4 h-4 ${openIndex === i ? "text-gold" : ""}`} />
                                <span>{item.title}</span>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                            </button>

                            {/* Desktop Mega Menu Dropdown */}
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl border border-stone-100 p-2 z-50 overflow-hidden"
                                    >
                                        <div className="grid grid-cols-2 gap-2">
                                            {item.links.map((link, j) => (
                                                <Link
                                                    key={j}
                                                    href={link.href}
                                                    onClick={() => setOpenIndex(null)}
                                                    className="flex items-center gap-4 p-3 hover:bg-stone-50 rounded-xl transition-colors group/link"
                                                >
                                                    <div className="w-16 h-16 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0 relative">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center opacity-90 group-hover/link:scale-110 transition-transform duration-500"
                                                            style={{ backgroundImage: `url("${link.img}")` }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className="block text-sm font-bold text-stone-800 group-hover/link:text-gold transition-colors mb-0.5">
                                                            {link.name}
                                                        </span>
                                                        <span className="text-xs text-stone-500 font-medium">
                                                            {link.desc}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Mobile Navigation (Button) */}
            <div className="md:hidden flex justify-center">
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="flex items-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-full shadow-xl border border-stone-200 font-bold uppercase text-xs tracking-widest"
                >
                    <Menu className="w-4 h-4" />
                    <span>Explore Menu</span>
                </button>
            </div>

            {/* Mobile Full Screen Menu (Drawer) */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-xl overflow-y-auto"
                    >
                        {/* Close Button */}
                        <div className="sticky top-0 p-6 flex justify-end bg-stone-950/50 backdrop-blur-md z-10 border-b border-white/10">
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 text-white/80 hover:text-white uppercase text-xs font-bold tracking-widest"
                            >
                                Close <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 pb-20 space-y-8">
                            {navItems.map((item, i) => (
                                <div key={i}>
                                    <h3 className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 pl-1">
                                        <item.icon className="w-3 h-3" />
                                        {item.title}
                                    </h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        {item.links.map((link, j) => (
                                            <Link
                                                key={j}
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5 active:scale-[0.98] transition-all"
                                            >
                                                <div className="w-16 h-16 rounded-lg bg-stone-800 overflow-hidden flex-shrink-0 relative">
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center opacity-80"
                                                        style={{ backgroundImage: `url("${link.img}")` }}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="block text-base font-bold text-white mb-0.5">
                                                        {link.name}
                                                    </span>
                                                    <span className="text-xs text-white/50 font-medium">
                                                        {link.desc}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
