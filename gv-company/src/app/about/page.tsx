import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/sections/CTABlock";
import HeroInternal from "@/components/layout/HeroInternal";

export const metadata: Metadata = {
    title: "About | GV &co — Bangalore-Based Branding & DT&O Studio",
    description: "GV &co is a Bangalore-based studio helping small businesses in developing regions look credible, run efficiently, and grow faster.",
};

const values = [
    {
        num: "01",
        title: "Clarity over complexity",
        desc: "We make digital transformation simple and practical — not overwhelming.",
    },
    {
        num: "02",
        title: "Local-first thinking",
        desc: "We build for India's realities: GST billing, WhatsApp, power cuts, and the needs of a real local business owner.",
    },
    {
        num: "03",
        title: "Results before aesthetics",
        desc: "Your brand needs to look good, but more importantly it needs to work — bringing in customers and saving you time.",
    },
    {
        num: "04",
        title: "Lifetime partnership",
        desc: "We don't disappear after launch. We train your staff, fix bugs, and grow alongside your business.",
    },
];

const industries = [
    "Retail & Pharmacy", "Restaurants & Cafés", "Clinics & Healthcare",
    "Salons & Spas", "Logistics & Delivery", "Manufacturing & Wholesale",
    "Education & Training", "Real Estate", "Hospitality", "Service Businesses",
];

export default function AboutPage() {
    return (
        <main className="bg-[#F4EFE8] min-h-screen">
            <HeroInternal
                title="A Bangalore studio built for small business growth."
                subtitle="About GV & CO"
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
            />

            {/* Our Story */}
            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <AnimatedSection className="lg:col-span-5">
                            <span className="eyebrow mb-6 block">Our Story</span>
                            <h2 className="font-heading text-display-sm text-[#1A1916] mb-8 leading-tight">
                                We saw a gap.<br />
                                <em className="not-italic text-[#7A7068]">We filled it.</em>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1} className="lg:col-span-7">
                            <div className="space-y-6 font-body text-[0.95rem] text-[#7A7068] font-light leading-[1.85] pt-4">
                                <p>
                                    Most small businesses in developing regions are run by talented, hardworking people — but they&apos;re held back by outdated systems, unprofessional branding, and manual processes that eat up hours every day.
                                </p>
                                <p>
                                    At the same time, most digital agencies focus on large enterprises, leaving small businesses with generic templates and no real support.
                                </p>
                                <p>
                                    GV &amp;co was founded in Bangalore to bridge this gap. We combine sharp brand design with practical digital systems — built specifically for how small businesses in developing regions actually operate.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-[#EAE4DC]">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                        <div className="md:col-span-4">
                            <span className="eyebrow mb-6 block">Our Values</span>
                            <h2 className="font-heading text-display-sm text-[#1A1916]">
                                How we think.
                            </h2>
                        </div>
                        <div className="md:col-span-8">
                            <AnimatedSection>
                                <div className="space-y-0">
                                    {values.map((v) => (
                                        <div key={v.num} className="border-t border-[#DDD8D0] py-10 flex gap-8 last:border-b">
                                            <span className="font-heading text-2xl text-[#DDD8D0] flex-shrink-0">{v.num}</span>
                                            <div>
                                                <h3 className="font-heading text-xl text-[#1A1916] mb-2 font-light">{v.title}</h3>
                                                <p className="font-body text-[0.9rem] text-[#7A7068] font-light leading-[1.85]">{v.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="section-padding">
                <div className="container-luxury">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <span className="eyebrow mb-6 block">Industries We Serve</span>
                            <h2 className="font-heading text-display-sm text-[#1A1916]">
                                Built for your industry.
                            </h2>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
                            {industries.map((ind) => (
                                <Link
                                    key={ind}
                                    href="/industries"
                                    className="inline-block border border-[#DDD8D0] text-[#1A1916] px-5 py-2.5 font-body text-[0.75rem] tracking-[0.08em] hover:bg-[#1A1916] hover:text-[#F4EFE8] hover:border-[#1A1916] transition-all duration-500"
                                >
                                    {ind}
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <CTABlock />
        </main>
    );
}
