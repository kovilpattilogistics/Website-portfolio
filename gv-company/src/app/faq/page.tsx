import type { Metadata } from "next";
import Link from "next/link";
import { faqItems } from "@/data/faq";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Accordion from "@/components/ui/Accordion";
import CTABlock from "@/components/sections/CTABlock";

export const metadata: Metadata = {
    title: "FAQ | GV &co",
    description: "Frequently asked questions about GV &co's branding and DT&O services.",
};

const categories = ["General", "Process", "Pricing", "Technical"];

export default function FAQPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient" />
                <div className="container-luxury relative z-10">
                    <AnimatedSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block w-6 h-px bg-gold/60" />
                            <span className="eyebrow">FAQ</span>
                        </div>
                        <h1 className="font-heading text-display-lg text-text mb-5 max-w-2xl text-balance">
                            Questions we get{" "}
                            <em className="not-italic text-gold-gradient">all the time.</em>
                        </h1>
                        <p className="text-muted text-body-lg max-w-lg">
                            Everything you need to know about working with GV &amp;co.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-luxury max-w-3xl">
                    {categories.map((cat, ci) => {
                        const items = faqItems.filter((f) => f.category === cat);
                        if (!items.length) return null;
                        return (
                            <AnimatedSection key={cat} delay={ci * 0.08}>
                                <div className="mb-14">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="eyebrow">{cat}</span>
                                        <div className="flex-1 h-px bg-border" />
                                    </div>
                                    <Accordion items={items} />
                                </div>
                            </AnimatedSection>
                        );
                    })}

                    <AnimatedSection>
                        <div className="card-luxury p-8 text-center">
                            <p className="text-text font-heading text-xl mb-2">Still have questions?</p>
                            <p className="text-muted text-sm mb-6">We&apos;re happy to answer anything — just reach out.</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href="/contact" className="btn-primary">Contact Us</Link>
                                <Link href="/audit" className="btn-outline">Get Free Audit</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
