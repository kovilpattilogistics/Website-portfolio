import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | GV and Company",
};

export default function TermsPage() {
    return (
        <section className="pt-36 pb-20">
            <div className="container-luxury max-w-3xl">
                <h1 className="font-heading text-display-md text-text mb-4">Terms of Service</h1>
                <p className="text-muted mb-10">Last updated: January 2025</p>

                <div className="space-y-8 text-muted leading-relaxed">
                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">1. Services</h2>
                        <p>
                            GV and Company provides branding, website design, digital automation, and analytics
                            services to small businesses. The specific scope of services is defined in individual
                            project proposals and agreements.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">2. Payment</h2>
                        <p>
                            Payment terms are outlined in individual project agreements. We typically require a
                            deposit before work begins, with the balance due upon project completion or at agreed
                            milestones.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">3. Intellectual property</h2>
                        <p>
                            Upon full payment, clients own the deliverables created for their project. GV and
                            Company retains the right to display work in our portfolio unless otherwise agreed.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">4. Limitation of liability</h2>
                        <p>
                            GV and Company is not liable for any indirect, incidental, or consequential damages
                            arising from the use of our services. Our liability is limited to the amount paid for
                            the specific service in question.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">5. Contact</h2>
                        <p>
                            For questions about these terms, please{" "}
                            <Link href="/contact" className="text-gold hover:underline">
                                contact us
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
