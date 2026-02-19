import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/sections/CTABlock";
import { IMAGES } from "@/lib/constants";
import HeroInternal from "@/components/layout/HeroInternal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | GV &co",
    description: "Branding, websites, POS systems, and local marketing for small businesses in India.",
};

const servicesList = [
    {
        id: "branding",
        category: "BRANDING & IDENTITY",
        title: "Shop Branding & Signage",
        desc: "Your shop's look determines who walks in. We design professional logos, signboards, and packaging that make your business look premium and trustworthy.",
        features: ["Logo Design", "Shop Board Design", "Packaging & Bags", "Staff Uniforms"],
        image: IMAGES.SERVICES.BRANDING,
        link: "/services/branding"
    },
    {
        id: "web",
        category: "DIGITAL PRESENCE",
        title: "Websites & Online Orders",
        desc: "Don't lose customers to online giants. We build simple, fast websites where your customers can see your products and order directly from you via WhatsApp.",
        features: ["Business Website", "Online Catalog", "WhatsApp Ordering", "Google Maps Listing"],
        image: IMAGES.SERVICES.WEB,
        link: "/services/websites"
    },
    {
        id: "dto",
        category: "OPERATIONS & SYSTEMS",
        title: "Inventory & POS Systems",
        desc: "Stop using notebooks. We set up easy-to-use software to track your stock, manage billing, and see your daily profits automatically.",
        features: ["POS Installation", "Inventory Tracking", "GST Billing", "Staff Training"],
        image: IMAGES.SERVICES.DTO,
        link: "/services/automation"
    },
    {
        id: "marketing",
        category: "GROWTH & MARKETING",
        title: "Local Marketing",
        desc: "Get more customers from your area. We manage your Google Business Profile and run targeted ads to bring people into your store.",
        features: ["Google Maps Ranking", "Social Media Posts", "Local Ads", "Customer Reviews"],
        image: IMAGES.SERVICES.MARKETING,
        link: "/services/analytics"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-[#F4EFE8] min-h-screen">
            <HeroInternal
                title="Built for Business Owners."
                subtitle="Our Services"
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
            />

            {/* Intro */}
            <section className="section-padding pb-0">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5">
                            <span className="eyebrow mb-6 block">What We Do</span>
                            <h2 className="font-heading text-display-sm text-[#1A1916] leading-tight">
                                Everything your<br />
                                <em className="not-italic text-[#7A7068]">business needs.</em>
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="font-body text-[0.95rem] text-[#7A7068] font-light leading-[1.85] max-w-xl">
                                From a brand identity that commands trust, to a website that converts visitors, to systems that automate your daily operations — we deliver the complete package.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Rows */}
            <section className="section-padding">
                <div className="container-luxury space-y-32">
                    {servicesList.map((service, index) => (
                        <AnimatedSection key={service.id} delay={0.1}>
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                                {/* Image */}
                                <div className={`relative h-[320px] md:h-[480px] overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <span className="eyebrow mb-6 block">
                                        {service.category}
                                    </span>
                                    <h2 className="font-heading text-display-sm text-[#1A1916] mb-6">{service.title}</h2>
                                    <p className="font-body text-[0.95rem] text-[#7A7068] font-light mb-10 leading-[1.85]">{service.desc}</p>

                                    <div className="space-y-0 mb-10 border-t border-[#DDD8D0]">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="border-b border-[#DDD8D0] py-4 flex items-center gap-4">
                                                <span className="w-[3px] h-[3px] rounded-full bg-[#A89E92] flex-shrink-0" />
                                                <span className="font-body text-[0.875rem] text-[#1A1916] font-light tracking-[0.05em]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={service.link}
                                        className="aman-link"
                                    >
                                        Discover more
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <CTABlock />
        </main>
    );
}
