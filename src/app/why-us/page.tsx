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

const PILLARS = [
    {
        n: "01",
        title: "Consistency of Carers",
        desc: "We match every client with the right carer — and then we keep that relationship consistent. No strangers at your door. No revolving team. The same familiar, trusted face, every visit.",
    },
    {
        n: "02",
        title: "Genuinely Person-Centred",
        desc: "Our care plans are not templates. Every plan is built entirely around the individual — their preferences, daily routines, personality, condition, and goals. We listen before we act.",
    },
    {
        n: "03",
        title: "CQC Regulated",
        desc: "We are registered with and regulated by the Care Quality Commission. Our practice is transparent, accountable, and continuously improving to ensure clinical excellence.",
    },
    {
        n: "04",
        title: "Expert Training & Supervision",
        desc: "Every member of our team is trained to the highest standards — DBS checked, regularly supervised, and up to date on best practice. We never compromise on safety.",
    },
    {
        n: "05",
        title: "24/7 Management Support",
        desc: "Our management team is reachable around the clock, seven days a week. If you need someone at any hour, there will always be a clinical manager there to answer.",
    },
    {
        n: "06",
        title: "Transparent & Honest",
        desc: "We will always give you honest, straightforward advice — even if it means recommending a different option for your situation. Your wellbeing is our priority.",
    },
];

export default function WhyUsPage() {
    useReveal();
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
                    <div className="grid-2" style={{ alignItems: "center", gap: "100px" }}>
                        <div>
                            <div className="eyebrow eyebrow-white anim-fade-up">Distinctive Care</div>
                            <h1 className="t-hero anim-fade-up d1" style={{ color: "white", marginBottom: "32px", lineHeight: 1.1 }}>
                                The Homely<br /><em style={{ color: "var(--lavender-l)" }}>Standard.</em>
                            </h1>
                            <p className="t-body-lg anim-fade-up d2" style={{ color: "rgba(255,255,255,0.8)", marginBottom: "56px", fontWeight: 300 }}>
                                We believe care is a clinical art form. It requires the precision of science and the warmth of a genuine human connection. Here is what separates us from the ordinary.
                            </p>
                            <div className="anim-fade-up d3" style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn btn-purple" style={{ padding: "18px 40px" }}>Free Case Assessment</Link>
                                <Link href="/services" className="btn btn-outline-white" style={{ padding: "18px 40px" }}>Our Scope</Link>
                            </div>
                        </div>
                        <div className="anim-slide-left" style={{
                            borderRadius: "var(--r-xl)",
                            overflow: "hidden",
                            aspectRatio: "1/1",
                            position: "relative",
                            boxShadow: "var(--shadow-lg)"
                        }}>
                            <Image
                                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=85"
                                alt="Our dedicated clinical team"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PILLARS SECTION */}
            <section className="section-xl" style={{ background: "white" }}>
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 80px" }}>
                        <div className="eyebrow anim-fade-up" style={{ color: "var(--royal)", justifyContent: "center" }}>Strategic Values</div>
                        <h2 className="t-display-sm anim-fade-up d1" style={{ color: "var(--royal)" }}>The Foundations of<br /><em>Exceptional Care.</em></h2>
                    </div>
                    <div className="grid-auto" style={{ gap: "40px" }}>
                        {PILLARS.map((p, i) => (
                            <div key={i} className={`anim-fade-up d${(i % 3) + 1}`} style={{
                                padding: "48px 40px",
                                background: "var(--alabaster)",
                                borderRadius: "var(--r-lg)",
                                transition: "all 0.4s var(--ease)"
                            }}>
                                <div style={{ fontFamily: "var(--font-serif)", fontSize: "11px", color: "var(--lavender)", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "20px" }}>{p.n}</div>
                                <h3 className="t-subheading" style={{ marginBottom: "16px", fontWeight: 600, color: "var(--royal)" }}>{p.title}</h3>
                                <p style={{ color: "var(--slate-mid)", fontSize: "15px", lineHeight: 1.8, fontWeight: 300 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. STATS SECTION */}
            <section style={{ background: "var(--royal-deep)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
                <div className="container">
                    <div className="grid-4" style={{ gap: "40px" }}>
                        {[
                            { n: "15+", label: "Years of Excellence" },
                            { n: "98%", label: "Client Satisfaction" },
                            { n: "500+", label: "Families Supported" },
                            { n: "24/7", label: "Managerial Presence" },
                        ].map((s, i) => (
                            <div key={i} className="anim-fade-up" style={{ textAlign: "center" }}>
                                <div style={{ fontFamily: "var(--font-serif)", fontSize: "64px", fontWeight: 500, color: "var(--lavender-l)", marginBottom: "12px", lineHeight: 1 }}>{s.n}</div>
                                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="section-xl" style={{ background: "var(--alabaster)", textAlign: "center" }}>
                <div className="container">
                    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                        <h2 className="t-display-sm anim-fade-up" style={{ color: "var(--royal)", marginBottom: "32px" }}>Experience the Difference<br /><em>for Your Family.</em></h2>
                        <p className="anim-fade-up d1" style={{ color: "var(--slate-mid)", fontSize: "18px", marginBottom: "56px", fontWeight: 300 }}>Join the discerning families who prioritize clinical excellence and human warmth.</p>
                        <div className="anim-fade-up d2" style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-purple" style={{ padding: "20px 48px" }}>Free Consultation</Link>
                            <Link href="/testimonials" className="btn btn-outline-purple" style={{ padding: "20px 48px" }}>Read Our Impact</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
