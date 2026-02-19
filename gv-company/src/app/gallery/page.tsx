import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/sections/CTABlock";
import { IMAGES } from "@/lib/constants";

const projects = [
    { category: "Retail Branding", name: "Luxe Boutique Rebrand" },
    { category: "Distributor Tech", name: "Metro Distributors Inventory" },
    { category: "Supermarket POS", name: "Fresh Mart Systems" },
    { category: "Online Store", name: "Organic Spices Direct" },
    { category: "Cafe Franchise", name: "Chai Point Expansion" },
];

export default function GalleryPage() {
    return (
        <main className="pt-24 pb-20 bg-bg">
            <div className="container-luxury mb-20 text-center">
                <AnimatedSection>
                    <span className="eyebrow mb-4">Our Work</span>
                    <h1 className="text-display-lg font-heading text-text mb-6">Real Results.</h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        See how we've helped other business owners in Bangalore transform their operations and sales.
                    </p>
                </AnimatedSection>
            </div>

            <div className="container-luxury grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {IMAGES.GALLERY.map((img, i) => (
                    <AnimatedSection key={i} delay={i * 0.1}>
                        <Link href={`/gallery/project-${i + 1}`} className="group block relative aspect-[4/3] rounded-2xl overflow-hidden card-luxury shadow-luxury hover:shadow-gold transition-all duration-500">
                            <Image
                                src={img}
                                alt={`Project ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{projects[i]?.category || "Business Growth"}</p>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl text-white font-heading">{projects[i]?.name || `Success Story ${i + 1}`}</h3>
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black transition-colors">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                ))}
            </div>

            <CTABlock />
        </main>
    );
}
