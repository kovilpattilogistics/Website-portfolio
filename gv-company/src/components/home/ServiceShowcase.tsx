"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Brand Identity",
        category: "Design",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
        href: "/services/branding"
    },
    {
        title: "Digital Presence",
        category: "Web & Commere",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        href: "/services/websites"
    },
    {
        title: "System Design",
        category: "Operations",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        href: "/services/automation"
    },
    {
        title: "Business Intelligence",
        category: "Analytics",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        href: "/services/analytics"
    }
];

export default function ServiceShowcase() {
    return (
        <section className="py-24 bg-white">
            <div className="container-luxury mb-16 flex justify-between items-end">
                <div>
                    <span className="eyebrow mb-4">Our Expertise</span>
                    <h2 className="font-heading text-4xl md:text-5xl text-text">
                        Crafting Digital <br /> Estates
                    </h2>
                </div>
                <Link href="/services" className="hidden md:flex items-center gap-2 uppercase text-xs font-bold tracking-widest hover:text-gold transition-colors">
                    View All Services <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Horizontal Scroll / Carousel */}
            <div className="relative w-full overflow-x-auto scrollbar-hide pb-12">
                <div className="flex gap-4 md:gap-8 px-6 md:px-12 lg:px-20 w-max">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="relative w-[300px] md:w-[450px] group cursor-pointer"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                        >
                            <Link href={service.href}>
                                <div className="aspect-[16/10] overflow-hidden mb-6 bg-stone-100">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        width={800}
                                        height={500}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-muted block mb-2">{service.category}</span>
                                <h3 className="font-heading text-2xl md:text-3xl text-text group-hover:text-gold transition-colors">
                                    {service.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container-luxury md:hidden mt-8 text-center">
                <Link href="/services" className="inline-flex items-center gap-2 uppercase text-xs font-bold tracking-widest hover:text-gold transition-colors">
                    View All Services <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
