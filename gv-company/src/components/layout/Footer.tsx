"use client";

import Link from "next/link";

const links = {
    explore: [
        { label: "Services", href: "/services" },
        { label: "Our Process", href: "/process" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Journal", href: "/blog" },
        { label: "About", href: "/about" },
    ],
    services: [
        { label: "Branding & Identity", href: "/services" },
        { label: "Websites & Commerce", href: "/services" },
        { label: "Operations & Systems", href: "/services" },
        { label: "Local Marketing", href: "/services" },
        { label: "Free Audit", href: "/audit" },
    ],
    legal: [
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Notice", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#1A1916] text-[#7A7068]">

            {/* Main grid */}
            <div className="px-[max(24px,5vw)] pt-20 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                {/* Brand column */}
                <div className="md:col-span-4">
                    <Link href="/">
                        <span className="font-heading text-[1.4rem] tracking-[0.55em] font-normal text-[#F4EFE8] whitespace-nowrap pr-[0.55em] block mb-6">
                            GV&amp;CO
                        </span>
                    </Link>
                    <p className="font-body text-[0.8rem] font-light leading-[1.85] text-[#7A7068] max-w-[260px]">
                        A Bangalore studio that makes small businesses look extraordinary — through branding, websites and digital operations.
                    </p>
                    <p className="font-heading text-sm italic text-[#4A4742] mt-8">
                        Bangalore, India
                    </p>
                </div>

                {/* Explore links */}
                <div className="md:col-span-3">
                    <p className="font-body uppercase text-[0.55rem] tracking-[0.28em] text-[#4A4742] mb-6">Explore</p>
                    <ul className="space-y-3">
                        {links.explore.map((l) => (
                            <li key={l.label}>
                                <Link href={l.href}
                                    className="font-body text-[0.8rem] font-light text-[#7A7068] hover:text-[#F4EFE8] transition-colors duration-400">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services links */}
                <div className="md:col-span-3">
                    <p className="font-body uppercase text-[0.55rem] tracking-[0.28em] text-[#4A4742] mb-6">Services</p>
                    <ul className="space-y-3">
                        {links.services.map((l) => (
                            <li key={l.label}>
                                <Link href={l.href}
                                    className="font-body text-[0.8rem] font-light text-[#7A7068] hover:text-[#F4EFE8] transition-colors duration-400">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Info / Legal */}
                <div className="md:col-span-2">
                    <p className="font-body uppercase text-[0.55rem] tracking-[0.28em] text-[#4A4742] mb-6">More</p>
                    <ul className="space-y-3">
                        {links.legal.map((l) => (
                            <li key={l.label}>
                                <Link href={l.href}
                                    className="font-body text-[0.8rem] font-light text-[#7A7068] hover:text-[#F4EFE8] transition-colors duration-400">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#2E2C29] px-[max(24px,5vw)] py-7 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-body text-[0.55rem] uppercase tracking-[0.25em] text-[#4A4742]">
                    © 2026 GV &amp; Company. All Rights Reserved.
                </p>
                <p className="font-body text-[0.55rem] uppercase tracking-[0.25em] text-[#4A4742]">
                    Bangalore · India
                </p>
            </div>
        </footer>
    );
}
