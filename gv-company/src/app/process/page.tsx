import type { Metadata } from "next";
import HeroInternal from "@/components/layout/HeroInternal";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import AuditForm from "@/components/home/AuditForm";
import FAQ from "@/components/home/FAQ";
import CTABlock from "@/components/sections/CTABlock";

export const metadata: Metadata = {
    title: "Our Process | GV & Co.",
    description: "Discover how GV & Co partners with small businesses from audit to lifetime support.",
};

export default function ProcessPage() {
    return (
        <main className="bg-[#F5F0EA] min-h-screen">
            <HeroInternal
                title="How We Partner."
                subtitle="Our Process"
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
            />
            <ProcessTimeline />
            <AuditForm />
            <FAQ />
        </main>
    );
}
