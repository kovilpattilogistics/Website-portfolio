"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Philosophy() {
    return (
        <section className="py-24 md:py-32 bg-[#F9F8F6]">
            <div className="container-luxury">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="eyebrow mb-6">The Spirit of GV&Co</span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text mb-8 leading-[1.1]">
                            Quietly building the <br />
                            <span className="italic">extraordinary.</span>
                        </h2>
                        <p className="text-body-lg text-muted mb-10 max-w-xl mx-auto lg:mx-0 font-light">
                            We believe that true luxury lies in seamlessness. For your business, this means a brand that speaks without shouting and operations that flow without friction. We are the architects of your digital estate.
                        </p>
                        <Link href="/about" className="btn-outline group">
                            Our Philosophy
                        </Link>
                    </motion.div>

                    {/* Image */}
                    <div className="flex-1 w-full order-1 lg:order-2">
                        <motion.div
                            className="relative aspect-[4/5] w-full overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                                alt="Minimalist Architecture"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
