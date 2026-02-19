import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/sections/CTABlock";
import { services } from "@/data/services";
import { automations } from "@/data/automations";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: `${service.title} — GV and Company`,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    const relatedAutomations = automations.filter((a) =>
        a.industries.some((ind) =>
            service.slug === "automation" || service.slug === "analytics"
        )
    ).slice(0, 4);

    return (
        <>
            {/* Hero */}
            <section className={`pt-36 pb-20 bg-gradient-to-br ${service.gradient}`}>
                <div className="container-luxury">
                    <AnimatedSection>
                        <Link href="/services" className="text-muted text-sm hover:text-gold transition-colors mb-6 inline-flex items-center gap-2">
                            ← All Services
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-2xl">
                                {service.icon}
                            </div>
                            <span className="badge">{service.title}</span>
                        </div>
                        <h1 className="font-heading text-display-lg text-text mb-4">
                            {service.title}
                        </h1>
                        <p className="text-gold text-xl italic mb-6">{service.tagline}</p>
                        <p className="text-muted text-lg max-w-2xl leading-relaxed">{service.description}</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Features + Outcomes */}
            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <AnimatedSection direction="left">
                            <span className="gold-line" />
                            <h2 className="font-heading text-display-sm text-text mb-8">What&apos;s included</h2>
                            <ul className="space-y-4">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 hover:border-gold/20 transition-colors">
                                        <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                                        <span className="text-muted text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <span className="gold-line" />
                            <h2 className="font-heading text-display-sm text-text mb-8">What you&apos;ll achieve</h2>
                            <div className="space-y-4 mb-10">
                                {service.outcomes.map((outcome) => (
                                    <div key={outcome} className="flex items-start gap-3 p-4 card-luxury">
                                        <span className="text-gold text-lg flex-shrink-0">✓</span>
                                        <span className="text-text font-medium text-sm">{outcome}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="card-luxury p-8 border-gold/20">
                                <h3 className="font-heading text-xl text-text mb-3">Ready to get started?</h3>
                                <p className="text-muted text-sm mb-6">
                                    Get a free audit and we&apos;ll show you exactly how {service.shortTitle.toLowerCase()} can transform your business.
                                </p>
                                <Link href="/audit" className="btn-primary w-full justify-center">
                                    Get Free Audit →
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section-padding bg-surface/30 border-y border-border">
                <div className="container-luxury">
                    <AnimatedSection>
                        <h2 className="font-heading text-display-sm text-text mb-8">Other services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {services.filter((s) => s.slug !== service.slug).map((s) => (
                                <Link key={s.slug} href={`/services/${s.slug}`} className="card-luxury p-6 group">
                                    <div className="text-2xl mb-3">{s.icon}</div>
                                    <h3 className="font-heading text-lg text-text group-hover:text-gold transition-colors mb-2">
                                        {s.title}
                                    </h3>
                                    <p className="text-muted text-sm">{s.tagline}</p>
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <CTABlock />
        </>
    );
}
