"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroInternalProps {
    title: string;
    subtitle?: string;
    image: string;
    objectPosition?: string;
}

export default function HeroInternal({ title, subtitle, image, objectPosition = "center" }: HeroInternalProps) {
    return (
        <section className="relative w-full">
            {/* Full-bleed image — 65vh on mobile, 75vh on desktop */}
            <div className="relative w-full h-[65vh] md:h-[75vh] bg-[#F4EFE8] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    style={{ objectPosition }}
                    priority
                    quality={90}
                    sizes="100vw"
                />
                {/* Very subtle bottom darkening */}
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Text below the image — Aman's signature editorial layout */}
            <div className="bg-[#F4EFE8] px-[max(24px,5vw)] pt-[80px] pb-[80px]">
                <div className="max-w-[860px]">
                    {subtitle && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="eyebrow mb-6 block"
                        >
                            {subtitle}
                        </motion.span>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className="font-heading text-display-md text-[#1A1916] font-light leading-[1.06]"
                    >
                        {title}
                    </motion.h1>
                </div>
            </div>
        </section>
    );
}
