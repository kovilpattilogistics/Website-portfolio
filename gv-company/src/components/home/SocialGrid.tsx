"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "The transformation was night and day. We went from manual billing and lost orders to a fully automated flow. Our repeat customers increased by 40%.",
        author: "Rahul Sharmma",
        role: "The Royal Oak Hotel",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "GV&Co gave us a brand identity that finally matches the quality of our products. Sales went up and we finally look like the premium brand we are.",
        author: "Priya Desai",
        role: "Desai Textiles",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "I didn't know a local shop could run this smoothly. The stock alerts alone saved us ₹2L during Diwali season. Incredible ROI.",
        author: "Vikram Sethi",
        role: "Sethi Electronics",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
];

export default function SocialGrid() {
    return (
        <section className="py-24 bg-stone-950 text-white overflow-hidden">
            <div className="container-luxury px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">Testimonials</p>
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">
                        Loved by 100+ Businesses <span className="italic font-light">& Counting.</span>
                    </h2>
                    <p className="text-stone-500 text-sm max-w-md mx-auto">Real results from real businesses across Bangalore and beyond.</p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-stone-900/60 backdrop-blur-sm p-8 rounded-sm border border-stone-800/60 hover:border-stone-700 transition-colors relative"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-8 h-8 text-stone-800 mb-6" />

                            {/* Stars */}
                            <div className="flex gap-0.5 text-gold mb-5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-stone-300 text-sm leading-relaxed mb-8 min-h-[5rem]">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-6 border-t border-stone-800/60">
                                <div
                                    className="w-10 h-10 rounded-full bg-cover bg-center flex-shrink-0 border-2 border-stone-800"
                                    style={{ backgroundImage: `url("${t.img}")` }}
                                />
                                <div>
                                    <p className="text-sm font-semibold text-white">{t.author}</p>
                                    <p className="text-xs text-stone-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured In Bar */}
                <div className="mt-20 pt-12 border-t border-stone-900">
                    <p className="text-center text-xs uppercase tracking-[0.2em] text-stone-600 mb-8">Trusted Across</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-40">
                        {["TechDaily", "RetailToday", "BangaloreBiz", "SME World"].map((name) => (
                            <span key={name} className="font-heading text-xl text-white tracking-wide">{name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
