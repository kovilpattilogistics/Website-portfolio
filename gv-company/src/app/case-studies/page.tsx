import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/sections/CTABlock";

export const metadata: Metadata = {
    title: "Case Studies | GV &co",
    description: "Real results for real businesses — GV &co case studies.",
};

export default function CaseStudiesPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient" />
                <div className="container-luxury relative z-10">
                    <AnimatedSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block w-6 h-px bg-gold/60" />
                            <span className="eyebrow">Case Studies</span>
                        </div>
                        <h1 className="font-heading text-display-lg text-text mb-5 max-w-3xl text-balance">
                            Real businesses,{" "}
                            <em className="not-italic text-gold-gradient">real results.</em>
                        </h1>
                        <p className="text-muted text-body-lg max-w-xl">
                            See how we&apos;ve helped businesses across industries transform their operations and brand.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-padding">
                <div className="container-luxury">
                    <div className="space-y-8">
                        {caseStudies.map((cs, i) => (
                            <AnimatedSection key={cs.slug} delay={i * 0.1}>
                                <div className="card-luxury overflow-hidden">
                                    {/* Gradient top */}
                                    <div className={`h-1 w-full bg-gradient-to-r ${cs.gradient.replace("to-bg", "to-transparent")}`} />

                                    <div className="p-8 md:p-12">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                            {/* Main */}
                                            <div className="lg:col-span-2">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="badge-surface">{cs.industry}</span>
                                                    <span className="text-xs text-muted-2">{cs.timelineRange}</span>
                                                </div>
                                                <h2 className="font-heading text-display-md text-text mb-2">{cs.title}</h2>
                                                <p className="text-gold text-sm italic mb-6">Client: {cs.client}</p>

                                                <div className="space-y-6">
                                                    <div>
                                                        <p className="label-luxury mb-2">The Challenge</p>
                                                        <p className="text-muted leading-relaxed">{cs.challenge}</p>
                                                    </div>
                                                    <div>
                                                        <p className="label-luxury mb-2">Our Solution</p>
                                                        <p className="text-muted leading-relaxed">{cs.solution}</p>
                                                    </div>
                                                </div>

                                                {cs.testimonial && (
                                                    <div className="mt-8 p-6 border border-gold/15 rounded-xl bg-surface">
                                                        <div className="text-gold/40 font-heading text-4xl leading-none mb-3">&ldquo;</div>
                                                        <p className="text-text-2 text-sm leading-relaxed mb-4">{cs.testimonial.quote}</p>
                                                        <div>
                                                            <p className="text-text text-sm font-medium">{cs.testimonial.name}</p>
                                                            <p className="text-muted text-xs">{cs.testimonial.role}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Results */}
                                            <div>
                                                <p className="label-luxury mb-5">Results</p>
                                                <div className="space-y-3 mb-8">
                                                    {cs.results.map((result, j) => (
                                                        <div key={j} className="flex items-start gap-3 p-4 bg-surface-2 border border-border rounded-xl">
                                                            <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                                                            <p className="text-muted text-sm leading-snug">{result}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <p className="label-luxury mb-3">Services Used</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {cs.services.map((s) => (
                                                        <span key={s} className="badge-surface text-xs">{s}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <CTABlock />
        </main>
    );
}
