"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, X, ChevronRight } from "lucide-react";

export default function HeaderV3() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Process", href: "/process" },
        { name: "Work", href: "/case-studies" },
        { name: "About", href: "/about" },
        { name: "Insights", href: "/blog" },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#F9F8F6]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container-luxury flex items-center justify-between">

                    {/* Left: Menu & Search */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="group flex items-center gap-2 text-text hover:text-gold transition-colors"
                        >
                            <Menu className="w-5 h-5" />
                            <span className="uppercase text-xs font-semibold tracking-widest hidden md:block group-hover:underline decoration-gold underline-offset-4">Menu</span>
                        </button>
                        <button className="text-text hover:text-gold transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Center: Brand Logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/" className="block text-center group">
                            <h1 className={`font-heading text-3xl md:text-4xl tracking-widest text-text transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
                                GV&CO
                            </h1>
                            {/* <span className="block text-[0.5rem] uppercase tracking-[0.3em] text-gold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                EST. 2024
                            </span> */}
                        </Link>
                    </div>

                    {/* Right: Language & CTA */}
                    <div className="flex items-center gap-6">
                        <button className="uppercase text-xs font-semibold tracking-widest text-text hover:text-gold transition-colors hidden md:block">
                            EN
                        </button>
                        <Link
                            href="/contact"
                            className="uppercase text-xs font-semibold tracking-widest border border-text px-6 py-2 hover:bg-text hover:text-white transition-all duration-300"
                        >
                            Inquire
                        </Link>
                    </div>
                </div>
            </motion.header>

            {/* Full Screen Menu Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[60] bg-[#F9F8F6]"
                    >
                        <div className="h-full flex flex-col relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="absolute top-8 left-8 md:top-10 md:left-12 flex items-center gap-2 text-text hover:text-gold transition-colors"
                            >
                                <X className="w-6 h-6" />
                                <span className="uppercase text-xs font-semibold tracking-widest">Close</span>
                            </button>

                            {/* Menu Content */}
                            <div className="flex-1 flex items-center justify-center">
                                <nav className="flex flex-col items-center gap-6 md:gap-8">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="font-heading text-4xl md:text-6xl text-text hover:text-gold transition-colors block text-center"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            {/* Footer Links in Menu */}
                            <div className="border-t border-border py-8">
                                <div className="container-luxury flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="flex gap-6">
                                        <Link href="#" className="uppercase text-xs tracking-widest text-muted hover:text-text">Instagram</Link>
                                        <Link href="#" className="uppercase text-xs tracking-widest text-muted hover:text-text">LinkedIn</Link>
                                    </div>
                                    <p className="text-xs text-muted">© 2026 GV&Co. Bangalore.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
