"use client";

import { motion } from "framer-motion";

const industries = [
    { name: "Restaurant", sub: "Faster tables", color: "text-orange-400" },
    { name: "Hotel", sub: "Direct bookings", color: "text-blue-400" },
    { name: "Resort", sub: "More packages", color: "text-teal-400" },
    { name: "Supermarket", sub: "Stock control", color: "text-yellow-400" },
    { name: "Retail", sub: "WhatsApp leads", color: "text-pink-400" },
    { name: "Salon", sub: "No-show fixing", color: "text-purple-400" },
    { name: "Clinic", sub: "Patient CRM", color: "text-cyan-400" },
    { name: "Logistics", sub: "Live tracking", color: "text-stone-400" },
];

export default function IndustriesStrip() {
    return (
        <section className="bg-[#EDE8E0] border-y border-[#E5E0D8] py-8 overflow-hidden">
            <div className="container-luxury relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#EDE8E0] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#EDE8E0] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...industries, ...industries].map((ind, i) => (
                        <div key={i} className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-default">
                            <span className="text-xl font-heading text-[#2C2A27]">{ind.name}</span>
                            <span className="text-[0.6rem] uppercase tracking-[0.2em] font-body text-[#8A7F72]">{ind.sub}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
