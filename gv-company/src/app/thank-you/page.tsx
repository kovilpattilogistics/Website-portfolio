import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Thank You — GV and Company",
    description: "Thank you for reaching out. We'll be in touch within 24 hours.",
};

export default function ThankYouPage() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-hero-gradient">
            <div className="container-luxury text-center max-w-xl py-20">
                <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-3xl mx-auto mb-8">
                    ✦
                </div>
                <h1 className="font-heading text-display-md text-text mb-4">
                    Thank you for reaching out
                </h1>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                    We&apos;ve received your message and will get back to you within 24 hours. In the meantime,
                    feel free to browse our gallery or read our blog.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/gallery" className="btn-primary">
                        Browse Gallery
                    </Link>
                    <Link href="/" className="btn-outline">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
