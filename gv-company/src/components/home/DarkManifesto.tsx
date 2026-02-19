"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
    { number: "40+", label: "Businesses transformed" },
    { number: "₹0", label: "Hidden fees. Ever." },
    { number: "1", label: "Team dedicated to you" },
];

export default function DarkManifesto() {
    return (
        <section className="bg-[#1A1916] text-[#F4EFE8] px-[max(24px,5vw)] py-[140px] md:py-[200px]">

            {/* Central Quote — Aman's "World of Aman" style */}
            <div className="max-w-[900px] mx-auto text-center">

                <motion.span
                    className="font-body uppercase text-[0.6rem] tracking-[0.3em] text-[#7A7068] mb-12 block"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                    The World of GV&amp;Co
                </motion.span>

                <motion.h2
                    className="font-heading text-display-lg text-[#F4EFE8] font-light leading-[1.06] mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Every business, no matter how small,{" "}
                    <em className="not-italic text-[#7A7068]">deserves to look extraordinary.</em>
                </motion.h2>

                <motion.p
                    className="font-body text-[0.9rem] font-light leading-[1.85] text-[#A89E92] max-w-[560px] mx-auto mb-14"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, delay: 0.25 }}
                >
                    We bring the same discipline, craft and attention to detail that luxury brands expect — to the restaurant on your street, the clinic in your neighbourhood, the shop your family has run for decades.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap gap-8 justify-center"
                >
                    <Link href="/audit" className="aman-link-light">
                        Begin your transformation
                    </Link>
                    <Link href="/case-studies" className="aman-link-light">
                        See our work
                    </Link>
                </motion.div>
            </div>

            {/* Divider */}
            <div className="max-w-[900px] mx-auto border-t border-[#2E2C29] mt-24 mb-20" />

            {/* Stats Row */}
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="font-heading text-[3.5rem] text-[#F4EFE8] font-light leading-none mb-3">
                            {stat.number}
                        </p>
                        <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-[#7A7068]">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
