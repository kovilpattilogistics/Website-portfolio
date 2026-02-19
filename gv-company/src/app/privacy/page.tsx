import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | GV and Company",
};

export default function PrivacyPage() {
    return (
        <section className="pt-36 pb-20">
            <div className="container-luxury max-w-3xl">
                <h1 className="font-heading text-display-md text-text mb-4">Privacy Policy</h1>
                <p className="text-muted mb-10">Last updated: January 2025</p>

                <div className="prose prose-invert max-w-none space-y-8 text-muted leading-relaxed">
                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">1. Information we collect</h2>
                        <p>
                            When you fill out a form on our website, we collect the information you provide,
                            including your name, email address, phone number, and business details. We use this
                            information solely to respond to your inquiry and provide our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">2. How we use your information</h2>
                        <p>
                            We use the information you provide to contact you about our services, respond to your
                            inquiries, and improve our website. We do not sell, rent, or share your personal
                            information with third parties for marketing purposes.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">3. Cookies</h2>
                        <p>
                            Our website may use cookies to improve your browsing experience. You can disable
                            cookies in your browser settings, though this may affect some functionality.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">4. Data security</h2>
                        <p>
                            We take reasonable measures to protect your personal information from unauthorized
                            access, disclosure, or misuse. However, no method of transmission over the internet
                            is 100% secure.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-text mb-3">5. Contact us</h2>
                        <p>
                            If you have any questions about this privacy policy, please{" "}
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
