import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/sections/CTABlock";
import { galleryEntries } from "@/data/gallery";

export const metadata: Metadata = {
    title: "Industries We Serve | GV and Company",
    description:
        "GV and Company works with small businesses across retail, healthcare, logistics, restaurants, manufacturing, and more.",
};

const industryDetails = [
    {
        name: "Retail",
        icon: "🛍️",
        description:
            "Multi-location inventory management, POS integration, customer loyalty programs, and automated reorder alerts.",
        challenges: ["Manual stock tracking", "No visibility across locations", "Lost sales from stockouts"],
        solutions: ["Inventory management system", "Multi-location dashboard", "Automated reorder alerts"],
    },
    {
        name: "Healthcare",
        icon: "🏥",
        description:
            "Patient appointment systems, automated reminders, billing management, and clinic dashboards.",
        challenges: ["High no-show rates", "Manual appointment booking", "Paper-based records"],
        solutions: ["Online appointment booking", "WhatsApp reminders", "Digital patient records"],
    },
    {
        name: "Restaurants",
        icon: "🍽️",
        description:
            "Digital menus, table management, order tracking, kitchen display systems, and customer feedback.",
        challenges: ["Order errors", "No customer data", "Manual billing"],
        solutions: ["Digital ordering system", "Kitchen display", "Customer loyalty program"],
    },
    {
        name: "Logistics",
        icon: "🚛",
        description:
            "Shipment tracking, driver management, automated customer updates, and delivery analytics.",
        challenges: ["Customer calls for updates", "Manual tracking", "No delivery analytics"],
        solutions: ["Real-time tracking", "Automated WhatsApp updates", "Delivery dashboard"],
    },
    {
        name: "Manufacturing",
        icon: "🏭",
        description:
            "Production tracking, quality control checklists, supplier management, and output dashboards.",
        challenges: ["No production visibility", "Manual quality checks", "Supplier delays"],
        solutions: ["Production dashboard", "Digital QC checklists", "Supplier tracking"],
    },
    {
        name: "Salons & Spas",
        icon: "💆",
        description:
            "Online booking, staff scheduling, client history, automated reminders, and loyalty programs.",
        challenges: ["Phone-based booking", "No client history", "High no-shows"],
        solutions: ["Online booking system", "Client profiles", "Automated reminders"],
    },
    {
        name: "Education",
        icon: "📚",
        description:
            "Student management, fee tracking, attendance systems, parent communication, and performance dashboards.",
        challenges: ["Manual attendance", "Fee collection delays", "No parent visibility"],
        solutions: ["Student management system", "Automated fee reminders", "Parent portal"],
    },
    {
        name: "Real Estate",
        icon: "🏢",
        description:
            "Property listings, lead management, automated follow-ups, document management, and agent dashboards.",
        challenges: ["Manual lead tracking", "Slow follow-ups", "Document chaos"],
        solutions: ["CRM for leads", "Automated follow-ups", "Document management"],
    },
];

export default function IndustriesPage() {
    return (
        <>
            <section className="pt-36 pb-20 bg-hero-gradient">
                <div className="container-luxury">
                    <AnimatedSection>
                        <span className="badge mb-6 inline-block">Industries</span>
                        <h1 className="font-heading text-display-lg text-text mb-6">
                            We understand your{" "}
                            <span className="text-gold-gradient italic">industry</span>
                        </h1>
                        <p className="text-muted text-xl max-w-2xl">
                            We&apos;ve worked with businesses across many industries. We understand the specific
                            challenges each one faces — and we build solutions that fit.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {industryDetails.map((industry, index) => {
                            const relatedEntries = galleryEntries
                                .filter((e) => e.industry === industry.name)
                                .slice(0, 2);

                            return (
                                <AnimatedSection key={industry.name} delay={index * 0.08}>
                                    <div className="card-luxury p-8 h-full">
                                        <div className="flex items-center gap-4 mb-5">
                                            <span className="text-4xl">{industry.icon}</span>
                                            <h2 className="font-heading text-2xl text-text">{industry.name}</h2>
                                        </div>
                                        <p className="text-muted text-sm leading-relaxed mb-6">{industry.description}</p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-muted mb-2">Challenges</p>
                                                <ul className="space-y-1">
                                                    {industry.challenges.map((c) => (
                                                        <li key={c} className="text-xs text-muted flex items-start gap-1.5">
                                                            <span className="text-red-400 mt-0.5">✗</span> {c}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-muted mb-2">Solutions</p>
                                                <ul className="space-y-1">
                                                    {industry.solutions.map((s) => (
                                                        <li key={s} className="text-xs text-muted flex items-start gap-1.5">
                                                            <span className="text-gold mt-0.5">✓</span> {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {relatedEntries.length > 0 && (
                                            <div className="border-t border-border pt-4">
                                                <p className="text-xs uppercase tracking-widest text-muted mb-3">
                                                    From our gallery
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {relatedEntries.map((e) => (
                                                        <Link
                                                            key={e.slug}
                                                            href={`/gallery/${e.slug}`}
                                                            className="text-xs text-gold hover:underline"
                                                        >
                                                            {e.title} →
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTABlock
                title="Don't see your industry?"
                subtitle="We work with all kinds of small businesses. Get a free audit and we'll tell you what's possible."
            />
        </>
    );
}
