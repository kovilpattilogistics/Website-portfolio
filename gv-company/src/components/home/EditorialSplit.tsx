"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EditorialSplit() {
    return (
        <section className="bg-[#F4EFE8] px-[max(24px,5vw)] py-[120px] md:py-[160px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">

                {/* Left Card */}
                <motion.div
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link href="/services">
                        <div className="relative aspect-[4/5] w-full overflow-hidden mb-7">
                            <Image
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                alt="Services"
                                fill
                                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <span className="eyebrow mb-4 block">Our Services</span>
                        <h3 className="font-heading text-[2rem] md:text-[2.25rem] text-[#1A1916] font-light mb-4 leading-[1.1]">
                            Everything your business needs, built to last.
                        </h3>
                        <p className="font-body text-[0.9rem] text-[#7A7068] font-light leading-[1.85] mb-7 max-w-[88%]">
                            From a brand identity that commands trust, to a website that converts visitors, to systems that automate your daily operations — we deliver the complete package.
                        </p>
                        <span className="aman-link">Discover more</span>
                    </Link>
                </motion.div>

                {/* Right Card — offset downward (Aman's signature stagger) */}
                <motion.div
                    className="group cursor-pointer md:mt-[20%]"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link href="/contact">
                        <div className="relative aspect-[4/5] w-full overflow-hidden mb-7">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                alt="Audit"
                                fill
                                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <span className="eyebrow mb-4 block">New &amp; Noteworthy</span>
                        <h3 className="font-heading text-[2rem] md:text-[2.25rem] text-[#1A1916] font-light mb-4 leading-[1.1]">
                            Now accepting DT&amp;O audit requests for Q2 2026.
                        </h3>
                        <p className="font-body text-[0.9rem] text-[#7A7068] font-light leading-[1.85] mb-7 max-w-[88%]">
                            Book a free 30-minute digital operations audit and receive a prioritized roadmap for your business — no obligations, no jargon.
                        </p>
                        <span className="aman-link">Book your audit</span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
