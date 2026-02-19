"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const works = [
    {
        title: "Restaurant Ordering System",
        category: "Restaurant",
        sub: "QR menu, WhatsApp ordering, analytics",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Hotel Booking Portal",
        category: "Hospitality",
        sub: "Direct bookings, zero commission",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Supermarket Inventory Suite",
        category: "Retail",
        sub: "GST billing, stock alerts, POS",
        img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Clinic Appointment System",
        category: "Healthcare",
        sub: "Patient CRM, reminders, records",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    },
];

export default function FeaturedCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="bg-[#F4EFE8] pb-[120px] md:pb-[160px]">

            {/* Header — left-aligned, Aman style */}
            <div className="px-[max(24px,5vw)] mb-12">
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div>
                        <span className="eyebrow mb-4 block">Our Work</span>
                        <h2 className="font-heading text-display-md text-[#1A1916] font-light leading-[1.08]">
                            Businesses we&apos;ve{" "}
                            <em className="not-italic text-[#7A7068]">built for.</em>
                        </h2>
                    </div>
                    <Link href="/case-studies" className="aman-link mb-1">
                        View all work
                    </Link>
                </motion.div>
            </div>

            {/* Horizontal carousel — left-edge bleed */}
            <div
                ref={scrollRef}
                className="flex gap-[3px] overflow-x-auto pb-8 pl-[max(24px,5vw)] scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: "none" }}
            >
                {works.map((work, i) => (
                    <motion.div
                        key={i}
                        className="min-w-[280px] md:min-w-[400px] snap-start group cursor-pointer flex-shrink-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="/case-studies">
                            {/* Image */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden mb-5">
                                <Image
                                    src={work.img}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                                    sizes="400px"
                                />
                            </div>

                            {/* Text */}
                            <span className="eyebrow mb-2 block">{work.category}</span>
                            <h3 className="font-heading text-[1.6rem] text-[#1A1916] font-light mb-2 leading-[1.15]">
                                {work.title}
                            </h3>
                            <p className="font-body text-[0.8rem] text-[#A89E92] font-light mb-4">
                                {work.sub}
                            </p>
                            <span className="aman-link text-[0.75rem]">View case study</span>
                        </Link>
                    </motion.div>
                ))}

                {/* Trailing spacer */}
                <div className="min-w-[max(24px,5vw)] flex-shrink-0" />
            </div>

            {/* Progress bar */}
            <div className="px-[max(24px,5vw)] mt-4">
                <div className="w-[80px] h-[1px] bg-[#DDD8D0] relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-[#1A1916]" />
                </div>
            </div>
        </section>
    );
}
