"use client";

import Image from "next/image";
import Link from "next/link";

const items = [
    {
        category: "BRANDING & IDENTITY",
        title: "A name people remember.",
        desc: "We craft logos, brand guidelines, color systems and visual identities that make your business look premium from day one.",
        img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "WEBSITES & COMMERCE",
        title: "Your best salesperson.",
        desc: "We build fast, mobile-first websites with online ordering, booking, catalog and lead capture — ready for Indian payment gateways.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        category: "AUTOMATION & SCALING",
        title: "Systems that sleep.",
        desc: "Automate your billing, inventory alerts, customer follow-ups and reporting. Save hours every day with our custom workflows.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function ThreeColGrid() {
    return (
        <section className="bg-[#F5F0EA] px-[max(24px,5vw)] pb-[160px]"> {/* Extra bottom padding for sticky CTA */}

            <div className="text-center mb-16">
                <h2 className="font-heading text-[2.5rem] font-light text-[#2C2A27]">How We Transform Businesses</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
                {items.map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative aspect-[3/4] w-full overflow-hidden mb-6">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                            />
                        </div>
                        <span className="block uppercase text-[0.65rem] tracking-[0.18em] font-body text-[#8A7F72] mb-3">
                            {item.category}
                        </span>
                        <h3 className="font-heading text-[1.6rem] text-[#2C2A27] font-light mb-3">
                            {item.title}
                        </h3>
                        <p className="font-body text-[0.9rem] text-[#5A5550] font-light leading-relaxed mb-6">
                            {item.desc}
                        </p>
                        <Link href="/services" className="inline-block border-b border-[#2C2A27] pb-[1px] font-body text-[0.8rem] text-[#2C2A27]">
                            Learn more
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
