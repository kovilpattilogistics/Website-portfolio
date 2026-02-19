"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroAman() {
    return (
        <section className="relative w-full">
            {/* ── 1. Full-Bleed Hero Image — 100dvh, no radius, no overlay text ── */}
            <div className="relative w-full h-[100dvh] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
                    alt="GV&Co — Bangalore Business Studio"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                    sizes="100vw"
                />

                {/* Subtle darkening at very bottom to help scroll indicator read */}
                <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

                {/* Scroll indicator — quiet animated line at bottom-left, no competing text */}
                <motion.div
                    className="absolute bottom-8 left-[max(24px,5vw)] flex flex-col items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1.0 }}
                >
                    <div className="w-[1px] h-12 bg-white/40 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 right-0 bg-white/90 h-full"
                            animate={{ y: ["0%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "linear", repeatDelay: 0.3 }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* ── 2. Text Section BELOW the image — Aman's signature layout ── */}
            {/* Text is NEVER on top of the image — this creates the luxury editorial feel */}
            <div className="bg-[#F4EFE8] px-[max(24px,5vw)] pt-[100px] pb-[100px]">
                <div className="max-w-[860px]">

                    <motion.span
                        className="eyebrow mb-10 block"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        The Spirit of GV&amp;Co
                    </motion.span>

                    <motion.h1
                        className="font-heading text-display-lg text-[#1A1916] font-light mb-10 leading-[1.04]"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Brands and systems<br />
                        built for silence.
                    </motion.h1>

                    <motion.p
                        className="font-body text-[1rem] font-light leading-[1.85] text-[#7A7068] mb-12 max-w-[560px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                        We help restaurants, hotels, retail shops and local businesses
                        in India grow through sharp branding, powerful websites and
                        digital operations that actually work.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap items-center gap-8"
                    >
                        <Link href="/about" className="aman-link">
                            Discover more
                        </Link>
                        <Link href="/audit" className="aman-link">
                            Free audit
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
