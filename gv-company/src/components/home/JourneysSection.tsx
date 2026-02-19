"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const journeys = [
    {
        category: "Restaurant & Café",
        title: "Faster tables. Bigger bills.",
        desc: "Online menus, QR ordering, WhatsApp integration and Google Maps dominance. Your restaurant — reimagined.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
        href: "/services",
        size: "large", // spans 2 cols on wide screens
    },
    {
        category: "Hotel & Hospitality",
        title: "Direct bookings. No commission.",
        desc: "Branded booking portals, guest experience websites and operations that scale with seasons.",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
        href: "/services",
        size: "small",
    },
    {
        category: "Retail & Pharmacy",
        title: "Walk-ins become returning customers.",
        desc: "GST billing automation, inventory alerts, loyalty systems and a storefront that works while you sleep.",
        img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1400&auto=format&fit=crop",
        href: "/services",
        size: "small",
    },
    {
        category: "Clinic & Healthcare",
        title: "Patients who come back.",
        desc: "Appointment systems, reminder automation, and a professional digital presence that builds trust before a first visit.",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
        href: "/services",
        size: "small",
    },
];

export default function JourneysSection() {
    return (
        <section className="bg-[#F4EFE8] px-[max(24px,5vw)] pb-[140px]">

            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="eyebrow mb-5 block">Journeys Await</span>
                    <h2 className="font-heading text-display-md text-[#1A1916] font-light leading-[1.08] max-w-[480px]">
                        Industries we&apos;ve{" "}
                        <em className="not-italic text-[#7A7068]">transformed</em><br />
                        across India.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link href="/services" className="aman-link">
                        All services
                    </Link>
                </motion.div>
            </div>

            {/* Card Grid — Aman pattern: 1 large left, 3 smaller right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[3px]">

                {/* Large card — left */}
                <motion.div
                    className="md:col-span-7 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link href={journeys[0].href}>
                        <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden mb-5">
                            <Image
                                src={journeys[0].img}
                                alt={journeys[0].title}
                                fill
                                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                                sizes="(max-width: 768px) 100vw, 58vw"
                            />
                        </div>
                        <span className="eyebrow mb-3 block">{journeys[0].category}</span>
                        <h3 className="font-heading text-[2rem] md:text-[2.25rem] text-[#1A1916] font-light mb-3 leading-[1.1]">
                            {journeys[0].title}
                        </h3>
                        <p className="font-body text-[0.9rem] text-[#7A7068] leading-relaxed mb-5 max-w-[420px]">
                            {journeys[0].desc}
                        </p>
                        <span className="aman-link">Discover more</span>
                    </Link>
                </motion.div>

                {/* Right column — 3 smaller cards stacked */}
                <div className="md:col-span-5 flex flex-col gap-[3px] mt-[10%]">
                    {journeys.slice(1).map((journey, i) => (
                        <motion.div
                            key={i}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link href={journey.href}>
                                <div className="relative aspect-[16/9] w-full overflow-hidden mb-4">
                                    <Image
                                        src={journey.img}
                                        alt={journey.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                                        sizes="(max-width: 768px) 100vw, 42vw"
                                    />
                                </div>
                                <span className="eyebrow mb-2 block">{journey.category}</span>
                                <h3 className="font-heading text-[1.5rem] text-[#1A1916] font-light mb-1">
                                    {journey.title}
                                </h3>
                                <span className="aman-link text-[0.7rem]">Discover more</span>
                            </Link>
                            {i < 2 && <div className="mt-5 border-b border-[#DDD8D0]" />}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
