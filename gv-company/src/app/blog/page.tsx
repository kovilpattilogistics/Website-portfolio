import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Blog | GV &co",
    description: "Insights on branding, digital transformation, and operations for small businesses.",
};

const categoryColors: Record<string, string> = {
    "Branding": "text-amber-400 bg-amber-400/8 border-amber-400/20",
    "Automation": "text-blue-400 bg-blue-400/8 border-blue-400/20",
    "Analytics": "text-emerald-400 bg-emerald-400/8 border-emerald-400/20",
    "Operations": "text-purple-400 bg-purple-400/8 border-purple-400/20",
};

export default function BlogPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient" />
                <div className="container-luxury relative z-10">
                    <AnimatedSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block w-6 h-px bg-gold/60" />
                            <span className="eyebrow">Insights</span>
                        </div>
                        <h1 className="font-heading text-display-lg text-text mb-5 max-w-2xl text-balance">
                            Ideas for growing{" "}
                            <em className="not-italic text-gold-gradient">small businesses.</em>
                        </h1>
                        <p className="text-muted text-body-lg max-w-lg">
                            Practical insights on branding, digital transformation, and operations.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Posts */}
            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {blogPosts.map((post, i) => {
                            const catClass = categoryColors[post.category] || "text-gold bg-gold/8 border-gold/20";
                            return (
                                <AnimatedSection key={post.slug} delay={i * 0.08}>
                                    <Link href={`/blog/${post.slug}`} className="card-luxury group flex flex-col h-full">
                                        {/* Category bar */}
                                        <div className={`h-0.5 w-full rounded-t-[1.25rem] ${catClass.includes("amber") ? "bg-amber-400/40" : catClass.includes("blue") ? "bg-blue-400/40" : catClass.includes("emerald") ? "bg-emerald-400/40" : "bg-purple-400/40"}`} />

                                        <div className="p-7 flex flex-col flex-1">
                                            <div className="flex items-center gap-3 mb-5">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${catClass}`}>
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-muted-2">{post.readTime}</span>
                                            </div>

                                            <h2 className="font-heading text-xl text-text mb-3 group-hover:text-gold-gradient transition-all duration-300 leading-tight flex-1">
                                                {post.title}
                                            </h2>
                                            <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

                                            <div className="flex items-center justify-between pt-5 border-t border-border">
                                                <div>
                                                    <p className="text-text text-xs font-medium">{post.author}</p>
                                                    <p className="text-muted-2 text-xs mt-0.5">{post.date}</p>
                                                </div>
                                                <span className="text-gold text-xs font-medium group-hover:translate-x-1 transition-transform duration-300 inline-block">
                                                    Read →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
