import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CTABlockProps {
    title?: string;
    subtitle?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    className?: string;
}

export default function CTABlock({
    title = "Ready to transform your business?",
    subtitle = "Get a free DT&O audit. We'll map out exactly what to implement and in what order.",
    primaryLabel = "Get Free Audit",
    primaryHref = "/audit",
    secondaryLabel = "View Our Work",
    secondaryHref = "/gallery",
    className = "",
}: CTABlockProps) {
    return (
        <section className={`bg-[#1A1916] px-[max(24px,5vw)] py-[120px] md:py-[160px] ${className}`}>
            <div className="max-w-[760px] mx-auto text-center">
                <AnimatedSection>
                    <span className="block uppercase font-body text-[0.6rem] tracking-[0.28em] text-[#7A7068] mb-10">
                        Let&apos;s work together
                    </span>
                    <h2 className="font-heading text-display-md text-[#F4EFE8] font-light mb-8 leading-[1.06]">
                        {title}
                    </h2>
                    <p className="font-body text-[0.9rem] font-light text-[#A89E92] max-w-[480px] mx-auto mb-14 leading-[1.85]">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href={primaryHref}
                            className="aman-link-light"
                        >
                            {primaryLabel}
                        </Link>
                        <span className="hidden sm:block w-[1px] h-4 bg-[#2E2C29]" />
                        <Link
                            href={secondaryHref}
                            className="aman-link-light"
                        >
                            {secondaryLabel}
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
