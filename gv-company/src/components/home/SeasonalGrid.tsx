"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experiences = [
    {
        category: "Branding & Identity",
        title: "A name people remember.",
        img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=900&auto=format&fit=crop",
        href: "/services",
    },
    {
        category: "Websites & Commerce",
        title: "Your best salesperson. Online. Always.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
        href: "/services",
    },
    {
        category: "Operations & Systems",
        title: "Systems that sleep so you don't have to.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
        href: "/services",
    },
    {
        category: "Local Marketing",
        title: "More customers from your neighbourhood.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=900&auto=format&fit=crop",
        href: "/services",
    },
    {
        category: "Staff Training",
        title: "A team that runs the system, not the other way.",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
        href: "/services",
    },
    {
        category: "Analytics & Reporting",
        title: "Know your numbers. Effortlessly.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
        href: "/services",
    },
];

export default function SeasonalGrid() {
    return (
        <section className="bg-[#EAE4DC] px-[max(24px,5vw)] py-[120px] md:py-[160px]">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="eyebrow mb-5 block">Seasonal Experiences</span>
                    <h2 className="font-heading text-display-md text-[#1A1916] font-light leading-[1.08] max-w-[480px]">
                        How we help your{" "}
                        <em className="not-italic text-[#7A7068]">business grow.</em>
                    </h2>
                </motion.div>
                <motion.p
                    className="font-body text-[0.9rem] text-[#7A7068] leading-relaxed max-w-[360px] pb-1 font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, delay: 0.2 }}
                >
                    Six disciplines. One studio. Delivered with the precision of a luxury brand and the heart of a local partner.
                </motion.p>
            </div>

            {/* 6-Card Grid — 3 columns × 2 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px]">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="group cursor-pointer bg-[#F4EFE8]"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href={exp.href} className="block">
                            {/* Image */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden">
                                <Image
                                    src={exp.img}
                                    alt={exp.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />

                                {/* Hover overlay — dark fade from bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Category label appears on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <Link href={exp.href} className="aman-link-light text-[0.6rem]">
                                        Discover more
                                    </Link>
                                </div>
                            </div>

                            {/* Text below image */}
                            <div className="p-5 pb-7">
                                <span className="eyebrow mb-3 block">{exp.category}</span>
                                <h3 className="font-heading text-[1.5rem] text-[#1A1916] font-light leading-[1.15]">
                                    {exp.title}
                                </h3>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
