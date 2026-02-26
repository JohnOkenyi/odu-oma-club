"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".anim-fade-up,.anim-slide-right,.anim-slide-left,.anim-scale");
        const io = new IntersectionObserver(
            (e) => e.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("visible"); io.unobserve(x.target); } }),
            { threshold: 0.07 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}

const ARTICLES = [
    {
        slug: "choosing-home-care",
        category: "Guide",
        title: "Choosing Home Care: What Every Family Needs to Know",
        excerpt: "The decision to arrange home care for a loved one can feel overwhelming. We break down exactly what to look for, what questions to ask, and how to find a provider you can truly trust.",
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&w=900&q=80",
        date: "15 January 2025",
        readTime: "7 min read",
    },
    {
        slug: "live-in-care-vs-care-home",
        category: "Insight",
        title: "Live-in Care vs Care Home: An Honest Comparison",
        excerpt: "Both live-in care and care homes have their place. This honest, unbiased guide helps you understand the differences — practically, financially, and emotionally.",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
        date: "3 December 2024",
        readTime: "9 min read",
    },
    {
        slug: "supported-living-independence",
        category: "Stories",
        title: "How Supported Living Can Transform Independence",
        excerpt: "For adults with learning or physical disabilities, supported living means the freedom to live life on their terms. Discover the profound difference the right support can make.",
        img: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=900&q=80",
        date: "19 November 2024",
        readTime: "5 min read",
    },
    {
        slug: "dementia-care-at-home",
        category: "Guide",
        title: "Caring for Someone with Dementia at Home",
        excerpt: "Home care for those living with dementia requires particular skills, patience, and empathy. Our specialists share their approach and practical advice for families.",
        img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=900&q=80",
        date: "5 October 2024",
        readTime: "8 min read",
    },
    {
        slug: "wellbeing-and-loneliness",
        category: "Wellbeing",
        title: "Combating Loneliness: Why Companionship Care Matters",
        excerpt: "Loneliness is one of the greatest health risks facing older adults today. Companionship care doesn't just provide company — it can change everything.",
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
        date: "22 September 2024",
        readTime: "6 min read",
    },
];

export default function BlogPage() {
    useReveal();

    const [featured, ...rest] = ARTICLES;

    return (
        <main>
            {/* 1. HERO SECTION */}
            <section style={{
                background: "var(--royal-deep)",
                padding: "220px var(--px) 140px",
                position: "relative",
                overflow: "hidden"
            }}>
                <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(150,133,181,0.1) 0%, transparent 70%)" }} />

                <div className="container">
                    <div style={{ maxWidth: "800px" }}>
                        <div className="eyebrow eyebrow-white anim-fade-up">Institution Journal</div>
                        <h1 className="t-hero anim-fade-up d1" style={{ color: "white", marginBottom: "32px", lineHeight: 1.1 }}>
                            Clinical Insights &<br /><em style={{ color: "var(--lavender-l)" }}>Expert Advice.</em>
                        </h1>
                        <p className="t-body-lg anim-fade-up d2" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", fontWeight: 300 }}>
                            A collection of specialized guides, honest reflections, and professional advice for families navigating the nuances of clinical home care.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. FEATURED ARTICLE */}
            <section className="section-xl" style={{ background: "white" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "100px", alignItems: "center" }}>
                        <div className="anim-slide-right" style={{
                            borderRadius: "var(--r-xl)",
                            overflow: "hidden",
                            aspectRatio: "1.2/1",
                            position: "relative",
                            boxShadow: "var(--shadow-lg)"
                        }}>
                            <Image
                                src={featured.img}
                                alt={featured.title}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div className="eyebrow anim-fade-up" style={{ color: "var(--royal)", marginBottom: "24px" }}>Featured Journal Entry</div>
                            <h2 className="t-display-sm anim-fade-up d1" style={{ marginBottom: "24px", color: "var(--royal)" }}>{featured.title}</h2>
                            <p className="anim-fade-up d2" style={{ color: "var(--slate-mid)", fontSize: "17px", lineHeight: 1.8, marginBottom: "32px", fontWeight: 300 }}>{featured.excerpt}</p>
                            <div className="anim-fade-up d3" style={{ fontSize: "12px", color: "var(--lavender)", marginBottom: "40px", letterSpacing: "0.1em", fontWeight: 700, textTransform: "uppercase" }}>
                                {featured.date} <span style={{ color: "var(--mist)", margin: "0 8px" }}>|</span> {featured.readTime}
                            </div>
                            <Link href={`/blog/${featured.slug}`} className="btn btn-purple anim-fade-up d4" style={{ alignSelf: "flex-start", padding: "18px 40px" }}>Read the Entry</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ARTICLES GRID */}
            <section className="section-xl" style={{ background: "var(--alabaster)", paddingTop: 0 }}>
                <div className="container">
                    <div className="grid-auto" style={{ gap: "40px" }}>
                        {rest.map((a, i) => (
                            <Link
                                key={i}
                                href={`/blog/${a.slug}`}
                                className={`anim-fade-up d${(i % 3) + 1}`}
                                style={{
                                    textDecoration: "none",
                                    background: "white",
                                    borderRadius: "var(--r-lg)",
                                    border: "1px solid var(--mist)",
                                    overflow: "hidden",
                                    display: "block",
                                    transition: "all 0.4s var(--ease)",
                                    boxShadow: "var(--shadow-sm)"
                                }}>
                                <div style={{ aspectRatio: "16/10", position: "relative", overflow: "hidden" }}>
                                    <Image
                                        src={a.img}
                                        alt={a.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div style={{ padding: "40px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                                        <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, color: "var(--lavender)" }}>{a.category}</span>
                                        <span style={{ fontSize: "11px", color: "var(--slate-l)", fontWeight: 300 }}>{a.readTime}</span>
                                    </div>
                                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 500, color: "var(--royal)", marginBottom: "16px", lineHeight: 1.4 }}>{a.title}</h3>
                                    <p style={{ color: "var(--slate-mid)", fontSize: "15px", lineHeight: 1.8, fontWeight: 300 }}>{a.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
