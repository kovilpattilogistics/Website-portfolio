import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AuditForm from "@/components/forms/AuditForm";

export const metadata: Metadata = {
    title: "Free DT&O Audit | GV &co",
    description: "Get a free Digital Transformation & Operations audit for your business. Based in Bangalore.",
};

const auditIncludes = [
    { icon: "◈", title: "Business Operations Review", desc: "We map your current workflows and identify the biggest time-wasters." },
    { icon: "✦", title: "Brand Assessment", desc: "We evaluate how your business looks to customers and where trust is being lost." },
    { icon: "◎", title: "Digital Readiness Score", desc: "We assess your current digital tools and identify gaps." },
    { icon: "⚙", title: "Priority Action Plan", desc: "We give you a clear, prioritized list of what to implement first for maximum ROI." },
];

export default function AuditPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient" />
                <div className="container-luxury relative z-10">
                    <AnimatedSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block w-6 h-px bg-gold/60" />
                            <span className="eyebrow">Free Audit</span>
                        </div>
                        <h1 className="font-heading text-display-lg text-text mb-5 max-w-3xl text-balance">
                            Get a free DT&amp;O audit for{" "}
                            <em className="not-italic text-gold-gradient">your business.</em>
                        </h1>
                        <p className="text-muted text-body-lg max-w-xl">
                            We&apos;ll map out your business, identify the biggest opportunities, and give you a clear action plan — completely free, no commitment required.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* What's Included */}
                        <div className="lg:col-span-2 order-2 lg:order-1">
                            <AnimatedSection delay={0.15}>
                                <h2 className="font-heading text-display-sm text-text mb-8">
                                    What&apos;s included in the audit
                                </h2>
                                <div className="space-y-4">
                                    {auditIncludes.map((item) => (
                                        <div key={item.title} className="card-luxury p-6 flex items-start gap-4">
                                            <div className="icon-box text-gold flex-shrink-0 text-lg">{item.icon}</div>
                                            <div>
                                                <h3 className="text-text font-medium text-sm mb-1">{item.title}</h3>
                                                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 p-6 border border-gold/15 rounded-2xl bg-surface">
                                    <p className="text-gold font-medium text-sm mb-2">100% Free. No commitment.</p>
                                    <p className="text-muted text-sm leading-relaxed">
                                        The audit is completely free. We only work together if you decide our proposal is right for your business.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3 order-1 lg:order-2">
                            <AnimatedSection>
                                <div className="card-luxury p-8 md:p-10">
                                    <h2 className="font-heading text-display-sm text-text mb-2">Request your free audit</h2>
                                    <p className="text-muted text-sm mb-8">We&apos;ll reach out within 24 hours to schedule a call.</p>
                                    <AuditForm />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
