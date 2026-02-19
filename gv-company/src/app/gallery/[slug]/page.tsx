import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/sections/CTABlock";
import { galleryEntries } from "@/data/gallery";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return galleryEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const entry = galleryEntries.find((e) => e.slug === slug);
    if (!entry) return {};
    return {
        title: `${entry.title} — UI Gallery | GV and Company`,
        description: entry.description,
    };
}

export default async function GalleryDetailPage({ params }: Props) {
    const { slug } = await params;
    const entry = galleryEntries.find((e) => e.slug === slug);
    if (!entry) notFound();

    const related = galleryEntries
        .filter((e) => e.slug !== slug && e.industry === entry.industry)
        .slice(0, 3);

    return (
        <>
            {/* Hero */}
            <section className={`pt-36 pb-20 bg-gradient-to-br ${entry.gradient}`}>
                <div className="container-luxury">
                    <AnimatedSection>
                        <Link href="/gallery" className="text-muted text-sm hover:text-gold transition-colors mb-6 inline-flex items-center gap-2">
                            ← Back to Gallery
                        </Link>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="badge">{entry.industry}</span>
                            <span className="text-muted text-sm">{entry.timelineRange} to implement</span>
                        </div>
                        <h1 className="font-heading text-display-lg text-text mb-4">{entry.title}</h1>
                        <p className="text-muted text-xl max-w-2xl italic">{entry.bestFor}</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Overview */}
            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main content */}
                        <div className="lg:col-span-2 space-y-12">
                            <AnimatedSection>
                                <span className="gold-line" />
                                <h2 className="font-heading text-display-sm text-text mb-4">Overview</h2>
                                <p className="text-muted leading-relaxed">{entry.description}</p>
                            </AnimatedSection>

                            <AnimatedSection delay={0.1}>
                                <h2 className="font-heading text-display-sm text-text mb-6">Modules included</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {entry.modules.map((mod) => (
                                        <div key={mod} className="flex items-center gap-3 p-4 card-luxury">
                                            <span className="text-gold">◈</span>
                                            <span className="text-text text-sm font-medium">{mod}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <h2 className="font-heading text-display-sm text-text mb-6">Automations included</h2>
                                <div className="space-y-4">
                                    {entry.automations.map((automation, index) => (
                                        <div key={index} className="flex items-start gap-4 p-5 card-luxury">
                                            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-xs flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-muted text-sm leading-relaxed">{automation}</p>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3}>
                                <h2 className="font-heading text-display-sm text-text mb-6">Integrations</h2>
                                <div className="flex flex-wrap gap-3">
                                    {entry.integrations.map((integration) => (
                                        <span key={integration} className="badge">
                                            {integration}
                                        </span>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <AnimatedSection direction="right">
                                <div className="card-luxury p-6 border-gold/20 sticky top-28">
                                    <h3 className="font-heading text-xl text-text mb-2">Interested in this system?</h3>
                                    <p className="text-muted text-sm mb-6">
                                        Get a free audit and we&apos;ll show you how this system can be customized for your
                                        business.
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted">Industry</span>
                                            <span className="text-text font-medium">{entry.industry}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted">Timeline</span>
                                            <span className="text-text font-medium">{entry.timelineRange}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted">Modules</span>
                                            <span className="text-text font-medium">{entry.modules.length}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted">Automations</span>
                                            <span className="text-text font-medium">{entry.automations.length}</span>
                                        </div>
                                    </div>

                                    <Link href="/audit" className="btn-primary w-full justify-center mb-3">
                                        Request This System →
                                    </Link>
                                    <Link href="/contact" className="btn-outline w-full justify-center text-xs">
                                        Ask a Question
                                    </Link>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
                <section className="section-padding bg-surface/30 border-t border-border">
                    <div className="container-luxury">
                        <AnimatedSection>
                            <h2 className="font-heading text-display-sm text-text mb-8">
                                Other {entry.industry} systems
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {related.map((rel) => (
                                    <Link key={rel.slug} href={`/gallery/${rel.slug}`} className="card-luxury p-6 group">
                                        <span className="badge text-[10px] mb-3 inline-block">{rel.industry}</span>
                                        <h3 className="font-heading text-lg text-text group-hover:text-gold transition-colors mb-2">
                                            {rel.title}
                                        </h3>
                                        <p className="text-muted text-xs">{rel.bestFor}</p>
                                    </Link>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            )}

            <CTABlock
                title="Ready to build this for your business?"
                subtitle="Get a free audit and we'll customize this system for your specific needs."
                primaryLabel="Request This System"
                secondaryLabel="View All Systems"
                secondaryHref="/gallery"
            />
        </>
    );
}
