"use client";

import { CheckCircle2 } from "lucide-react";

export default function TrustProof() {
    return (
        <section className="bg-stone-900 border-y border-stone-800 py-20">
            <div className="container-luxury px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Deliverables */}
                <div>
                    <h2 className="font-heading text-display-md text-white mb-8">What you actually get.</h2>
                    <ul className="space-y-4">
                        {[
                            "Complete Brand Kit (Logos, Fonts, Colors)",
                            "High-Speed Website (Mobile First)",
                            "Custom WhatsApp Automations",
                            "Staff Training SOPs & Videos",
                            "Admin Dashboard Access",
                            "Source File Ownership (You own it all)"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-stone-300">
                                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Testimonial Placeholder */}
                <div className="bg-stone-950 p-8 md:p-12 rounded-2xl border border-stone-800 relative">
                    <div className="absolute top-8 left-8 text-6xl font-serif text-stone-800">“</div>
                    <blockquote className="relative z-10 text-stone-300 text-lg leading-relaxed mb-6 italic">
                        The transformation was night and day. We went from manual billing and lost orders to a fully automated flow. Our repeat customers increased by 40% in just two months.
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-stone-800" />
                        <div>
                            <div className="text-white font-bold">Rahul Sharmma</div>
                            <div className="text-stone-500 text-sm">Owner, The Royal Oak Hotel</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
