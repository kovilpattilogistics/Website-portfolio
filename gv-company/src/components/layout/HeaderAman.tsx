"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderAman() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Delay reveal slightly so CSS opacity transition looks like a fade-in
        const t = setTimeout(() => setMounted(true), 100);
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            clearTimeout(t);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            {/*
              KEY: No framer-motion y/x/transform on the header or any ancestor.
              Transform on an ancestor makes it the containing block for absolute children.
              Instead: plain <header> + plain <div> with CSS opacity transition.
              The logo uses absolute left-1/2 for true viewport-center positioning.
            */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                    ? "bg-[#F4EFE8]/96 backdrop-blur-md border-b border-[#DDD8D0]/60"
                    : "bg-transparent"
                    }`}
                style={{
                    opacity: mounted ? 1 : 0,
                    transition: "opacity 900ms ease 300ms, background-color 700ms",
                    width: "100vw",
                    minWidth: "100vw",
                }}
            >
                {/* Plain div with explicit 100% width — ensures left-1/2 = 50vw */}
                <div
                    className="relative h-[72px] flex items-center justify-between px-6 md:px-[max(32px,5vw)]"
                    style={{ width: "100%" }}
                >

                    {/* ── Left: Aesthetic hamburger ── */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="flex flex-col justify-center gap-[6px] cursor-pointer appearance-none border-none bg-transparent p-0 outline-none focus:outline-none z-10 group"
                        aria-label="Open menu"
                        style={{ width: 28, height: 20 }}
                    >
                        {/* Line 1 — full width */}
                        <span className="block h-[0.5px] bg-[#1A1916] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-40"
                            style={{ width: "100%" }} />
                        {/* Line 2 — 65% width, expands on hover */}
                        <span className="block h-[0.5px] bg-[#1A1916] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full group-hover:opacity-40"
                            style={{ width: "65%", transitionDelay: "40ms" }} />
                        {/* Line 3 — 85% width, expands on hover */}
                        <span className="block h-[0.5px] bg-[#1A1916] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full group-hover:opacity-40"
                            style={{ width: "85%", transitionDelay: "80ms" }} />
                    </button>

                    {/* ── Center: Wordmark — absolute-centered in the 100%-wide bar ── */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <Link
                            href="/"
                            aria-label="GV&Co home"
                            className="no-underline pointer-events-auto"
                            tabIndex={0}
                        >
                            <span
                                className="font-heading font-light text-[#1A1916] whitespace-nowrap select-none block"
                                style={{
                                    fontSize: "clamp(0.85rem, 1.5vw, 1.3rem)",
                                    letterSpacing: "0.28em",
                                    paddingRight: "0.28em",
                                }}
                            >
                                GV&amp;CO
                            </span>
                        </Link>
                    </div>

                    {/* ── Right: CTA ── */}
                    <div className="z-10">
                        <Link
                            href="/audit"
                            className="hidden md:block font-body uppercase text-[0.6rem] tracking-[0.25em] text-[#1A1916] font-light hover:opacity-60 transition-opacity duration-[400ms]"
                        >
                            Free Audit
                        </Link>
                    </div>
                </div>
            </header>

            {/* ─── Full-Screen Menu Overlay ─── */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 z-[99] bg-black/20"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Drawer panel — slides from left */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
                            className="fixed inset-0 z-[100] bg-[#F4EFE8] text-[#1A1916] w-screen h-screen overflow-y-auto flex flex-col"
                        >
                            {/* Drawer header — grid layout works fine here since no absolute children */}
                            <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[72px] px-6 md:px-[max(32px,5vw)]">
                                <div /> {/* empty left */}
                                <span
                                    className="font-heading font-light text-[#1A1916] tracking-[0.45em] text-[1.1rem] md:text-[1.35rem] whitespace-nowrap select-none"
                                    style={{ marginRight: "0.45em" }}
                                >
                                    GV<span className="font-body font-extralight text-[0.9em] align-middle relative -top-[0.05em] tracking-[0.1em]">&amp;</span>CO
                                </span>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="appearance-none border-none bg-transparent group cursor-pointer outline-none"
                                        aria-label="Close menu"
                                    >
                                        <span className="font-body uppercase text-[0.6rem] tracking-[0.28em] text-[#1A1916] font-light group-hover:opacity-50 transition-opacity">
                                            Close
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex-1 flex flex-col justify-center px-6 md:px-[max(32px,5vw)] space-y-0">
                                {[
                                    { name: "Services", href: "/services" },
                                    { name: "Process", href: "/process" },
                                    { name: "Work", href: "/case-studies" },
                                    { name: "Journal", href: "/blog" },
                                    { name: "About", href: "/about" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: 0.15 + i * 0.07,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="border-b border-[#DDD8D0] last:border-b-0"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="group flex items-center justify-between py-6 font-heading text-[clamp(2rem,6vw,5.5rem)] font-light text-[#1A1916] leading-none no-underline"
                                        >
                                            <span className="block transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:italic group-hover:opacity-60">
                                                {item.name}
                                            </span>
                                            <span className="font-body text-[0.6rem] tracking-[0.2em] text-[#A89E92] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                →
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Drawer Footer */}
                            <div className="px-6 md:px-[max(32px,5vw)] pb-10 pt-8 flex justify-between items-end">
                                <div>
                                    <p className="font-heading text-base italic text-[#7A7068]">Bangalore, India</p>
                                    <p className="font-body text-[0.7rem] text-[#A89E92] tracking-[0.15em] uppercase mt-1">Est. 2024</p>
                                </div>
                                <div className="flex gap-8">
                                    <Link href="/contact" onClick={() => setMenuOpen(false)}
                                        className="font-body uppercase text-[0.6rem] tracking-[0.2em] text-[#7A7068] hover:text-[#1A1916] transition-colors">
                                        Contact
                                    </Link>
                                    <Link href="/audit" onClick={() => setMenuOpen(false)}
                                        className="font-body uppercase text-[0.6rem] tracking-[0.2em] text-[#7A7068] hover:text-[#1A1916] transition-colors">
                                        Free Audit
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
