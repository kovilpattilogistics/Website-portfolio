"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Automations", href: "/automations" },
    { label: "Process", href: "/process" },
    { label: "Gallery", href: "/gallery" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-4" : "py-6 bg-transparent"
                    }`}
            >
                <div className="container-luxury flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center flex-shrink-0" aria-label="GV&Co — Home">
                        <div className="relative h-8 w-32">
                            {/* SVG Logo — white version for dark background */}
                            <svg viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
                                <text x="0" y="50" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="52" fill="#1C1917" letterSpacing="-2">GV&amp;Co</text>
                            </svg>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-muted hover:text-text transition-colors duration-300 text-xs font-medium tracking-widest uppercase"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/contact" className="text-muted hover:text-gold transition-colors duration-300 text-xs font-medium tracking-widest uppercase">
                            Contact
                        </Link>
                        <Link href="/audit" className="btn-primary text-xs px-6 py-3">
                            Free Audit
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2 group"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <span className={`block h-px w-6 bg-text transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block h-px w-4 bg-text transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block h-px w-6 bg-text transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                style={{ background: "rgba(8,8,8,0.98)", backdropFilter: "blur(20px)" }}
            >
                <div className="flex flex-col justify-center items-center h-full gap-2 px-8">
                    {/* Mobile Logo */}
                    <div className="absolute top-6 left-6">
                        <svg viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
                            <text x="0" y="50" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="52" fill="#F0EDE8" letterSpacing="-2">GV</text>
                            <text x="108" y="50" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="52" fill="#F0EDE8" letterSpacing="-1">&amp;co</text>
                            <text x="200" y="16" fontFamily="'Inter', system-ui, sans-serif" fontWeight="400" fontSize="14" fill="#F0EDE8">™</text>
                        </svg>
                    </div>

                    <nav className="flex flex-col items-center gap-6 w-full">
                        {[...navLinks, { label: "Contact", href: "/contact" }, { label: "FAQ", href: "/faq" }].map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="font-heading text-display-sm text-text hover:text-gold transition-colors duration-300 text-center"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-10">
                        <Link href="/audit" onClick={() => setMenuOpen(false)} className="btn-primary">
                            Get Free DT&amp;O Audit
                        </Link>
                    </div>

                    <p className="absolute bottom-8 text-muted-2 text-xs tracking-widest uppercase">
                        Bangalore, India
                    </p>
                </div>
            </div>
        </>
    );
}
