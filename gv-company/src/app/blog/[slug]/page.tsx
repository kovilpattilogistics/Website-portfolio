import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/sections/CTABlock";
import { blogPosts } from "@/data/blog";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: `${post.title} | GV and Company Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

    return (
        <>
            <section className="pt-36 pb-16 bg-hero-gradient">
                <div className="container-luxury max-w-3xl">
                    <AnimatedSection>
                        <Link href="/blog" className="text-muted text-sm hover:text-gold transition-colors mb-6 inline-flex items-center gap-2">
                            ← Back to Blog
                        </Link>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="badge">{post.category}</span>
                            <span className="text-muted text-sm">{post.readTime}</span>
                            <span className="text-muted-2 text-sm">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        </div>
                        <h1 className="font-heading text-display-md text-text mb-6">{post.title}</h1>
                        <p className="text-muted text-xl leading-relaxed">{post.excerpt}</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Article */}
                        <article className="lg:col-span-3">
                            <AnimatedSection>
                                <div
                                    className="prose prose-invert prose-gold max-w-none
                    prose-headings:font-heading prose-headings:text-text
                    prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-muted prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-text prose-strong:font-semibold
                    prose-li:text-muted prose-li:leading-relaxed
                    prose-ul:space-y-2 prose-ol:space-y-2
                    prose-hr:border-border prose-hr:my-8
                    prose-blockquote:border-l-gold prose-blockquote:text-muted prose-blockquote:italic
                    prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content
                                            .replace(/\n## /g, "\n<h2>")
                                            .replace(/\n### /g, "\n<h3>")
                                            .replace(/\n\n/g, "</p><p>")
                                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                                            .replace(/\*(.*?)\*/g, "<em>$1</em>")
                                            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
                                            .replace(/^- (.+)$/gm, "<li>$1</li>")
                                            .replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>")
                                            .replace(/^---$/gm, "<hr>")
                                            .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
                                            .replace(/✅ (.+)/g, "✅ $1")
                                            .replace(/^## (.+)$/gm, "</p><h2>$1</h2><p>")
                                            .replace(/^### (.+)$/gm, "</p><h3>$1</h3><p>"),
                                    }}
                                />
                            </AnimatedSection>

                            <div className="mt-12 pt-8 border-t border-border">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="badge text-xs">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="space-y-6">
                            <AnimatedSection direction="right">
                                <div className="card-luxury p-6 border-gold/20 sticky top-28">
                                    <h3 className="font-heading text-lg text-text mb-3">
                                        Want help implementing this?
                                    </h3>
                                    <p className="text-muted text-sm mb-5">
                                        Get a free audit and we&apos;ll show you exactly what to do for your business.
                                    </p>
                                    <Link href="/audit" className="btn-primary w-full justify-center text-xs">
                                        Get Free Audit →
                                    </Link>
                                </div>
                            </AnimatedSection>

                            {related.length > 0 && (
                                <AnimatedSection direction="right" delay={0.1}>
                                    <div className="card-luxury p-6">
                                        <h3 className="font-heading text-lg text-text mb-4">More articles</h3>
                                        <div className="space-y-4">
                                            {related.map((rel) => (
                                                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="block group">
                                                    <span className="badge text-[10px] mb-1 inline-block">{rel.category}</span>
                                                    <p className="text-text text-sm group-hover:text-gold transition-colors leading-snug">
                                                        {rel.title}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )}
                        </aside>
                    </div>
                </div>
            </section>

            <CTABlock />
        </>
    );
}
