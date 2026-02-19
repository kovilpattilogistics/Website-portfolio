"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StickyCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show after scrolling past the hero (approx 100vh)
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`fixed bottom-0 left-0 right-0 h-[52px] bg-[#1A1916] z-[40] flex items-center justify-center transition-transform duration-700 ease-out ${visible ? "translate-y-0" : "translate-y-full"
            }`}>
            <Link
                href="/audit"
                className="font-body text-[0.6rem] uppercase tracking-[0.28em] text-[#F4EFE8] hover:text-white transition-colors font-light"
            >
                Get your Free DT&amp;O Audit →
            </Link>
        </div>
    );
}
