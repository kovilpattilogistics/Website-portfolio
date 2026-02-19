import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/forms/ContactForm";
import HeroInternal from "@/components/layout/HeroInternal";

export const metadata: Metadata = {
    title: "Contact | GV &co",
    description: "Get in touch with GV &co. Based in Bangalore, India.",
};

const contactDetails = [
    { label: "Location", value: "Bangalore, Karnataka, India", href: null },
    { label: "Email", value: "hello@gvandco.in", href: "mailto:hello@gvandco.in" },
    { label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/919999999999" },
];

export default function ContactPage() {
    return (
        <main className="bg-[#F4EFE8] min-h-screen">
            <HeroInternal
                title="Let&apos;s start a conversation."
                subtitle="Contact"
                image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2674&auto=format&fit=crop"
            />

            {/* Content Grid */}
            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">

                        {/* Contact Info */}
                        <div className="lg:col-span-4">
                            <AnimatedSection>
                                <span className="eyebrow mb-6 block">Find Us</span>
                                <div className="space-y-12">
                                    {contactDetails.map((item) => (
                                        <div key={item.label} className="border-b border-[#DDD8D0] pb-8">
                                            <p className="eyebrow mb-3">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="font-heading text-xl text-[#1A1916] hover:text-[#7A7068] transition-colors duration-500"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="font-heading text-xl text-[#1A1916]">{item.value}</p>
                                            )}
                                        </div>
                                    ))}

                                    {/* Audit Nudge */}
                                    <div className="pt-4">
                                        <p className="eyebrow mb-4">
                                            Not sure where to start?
                                        </p>
                                        <p className="font-heading text-2xl text-[#1A1916] mb-4 leading-tight">
                                            Get a free DT&O audit first.
                                        </p>
                                        <p className="font-body text-[0.875rem] text-[#7A7068] font-light mb-6 leading-[1.85]">
                                            We&apos;ll map out your business and tell you exactly what to implement.
                                        </p>
                                        <Link href="/audit" className="aman-link">
                                            Book Free Audit
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-8">
                            <AnimatedSection delay={0.15}>
                                <span className="eyebrow mb-6 block">Send a Message</span>
                                <ContactForm />
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
