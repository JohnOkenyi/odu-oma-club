"use client";

import { useEffect, useState } from "react";
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

const TESTIMONIALS = [
    { text: "The team at Homely Health Care have been absolutely wonderful with my mother. They are professional, caring, and have truly made a difference to her daily life. I cannot recommend them highly enough.", author: "Sarah T.", location: "Bournemouth", service: "Home Care" },
    { text: "From our first phone call, we felt listened to and understood. The carer assigned to my father became like a member of our family. An outstanding service.", author: "Michael R.", location: "Poole", service: "Live-in Care" },
    { text: "Choosing Homely Health Care was the best decision we made for our grandmother. Dignified, respectful, and genuinely warm — everything we hoped for.", author: "Emma L.", location: "Christchurch", service: "Home Care" },
    { text: "As someone in the healthcare sector myself, I was searching for something truly exceptional. Homely impressed me immediately — their attention to detail and person-centred approach are world-class.", author: "Dr. James K.", location: "Wimborne", service: "Complex Care" },
    { text: "We tried a different agency first. There is no comparison. Homely Health Care is the real thing — proper, compassionate, professional care. We are so grateful.", author: "Claire M.", location: "Ferndown", service: "Supported Living" },
    { text: "My nan has never been happier. She looks forward to her carer visiting every day. That says everything you need to know about the quality of this service.", author: "James B.", location: "Bournemouth", service: "Home Care" },
];

export default function TestimonialsPage() {
    useReveal();

    return (
        <main>
            {/* 1. HERO SECTION */}
            <section style={{
                background: "var(--royal-deep)",
                padding: "220px var(--px) 140px",
                position: "relative",
                overflow: "hidden",
                textAlign: "center"
            }}>
                <div style={{ position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)", width: "60%", height: "60%", background: "radial-gradient(circle, rgba(150,133,181,0.1) 0%, transparent 70%)" }} />

                <div className="container" style={{ position: "relative" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div className="eyebrow eyebrow-white anim-fade-up" style={{ justifyContent: "center" }}>Trusted Voices</div>
                        <h1 className="t-hero anim-fade-up d1" style={{ color: "white", marginBottom: "32px", lineHeight: 1.1 }}>
                            Words from<br /><em style={{ color: "var(--lavender-l)" }}>Our Community.</em>
                        </h1>
                        <p className="t-body-lg anim-fade-up d2" style={{ color: "rgba(255,255,255,0.8)", margin: "0 auto 56px", fontWeight: 300 }}>
                            The ultimate standard of our care is the peace of mind of the families we serve. Explore honest reflections from our clients across Bournemouth and Dorset.
                        </p>

                        <div className="anim-fade-up d3" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                            <div style={{ display: "flex", gap: "4px" }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--lavender-l)">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <span style={{ color: "white", fontSize: "24px", fontFamily: "var(--font-serif)", fontWeight: 500 }}>5.0 Rating</span>
                            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Verified Feedback</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TESTIMONIALS GRID */}
            <section className="section-xl" style={{ background: "var(--alabaster)" }}>
                <div className="container">
                    <div className="grid-auto" style={{ gap: "40px" }}>
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className={`anim-fade-up d${(i % 3) + 1}`} style={{
                                background: "white",
                                borderRadius: "var(--r-xl)",
                                padding: "56px 48px",
                                border: "1px solid var(--mist)",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "var(--shadow-sm)",
                                transition: "all 0.4s var(--ease)"
                            }}>
                                <div style={{ fontSize: "40px", color: "var(--lavender-pale)", marginBottom: "32px", fontFamily: "var(--font-serif)", opacity: 0.6 }}>“</div>
                                <p style={{
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "20px",
                                    fontStyle: "italic",
                                    color: "var(--royal)",
                                    lineHeight: 1.7,
                                    flexGrow: 1,
                                    marginBottom: "40px",
                                    fontWeight: 400
                                }}>
                                    {t.text}
                                </p>
                                <div style={{ borderTop: "1px solid var(--mist)", paddingTop: "32px" }}>
                                    <div style={{ fontWeight: 700, color: "var(--royal)", fontSize: "16px", marginBottom: "4px" }}>{t.author}</div>
                                    <div style={{ fontSize: "11px", color: "var(--lavender)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
                                        {t.location} <span style={{ color: "var(--mist)", margin: "0 8px" }}>|</span> {t.service}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="section-xl" style={{ background: "var(--royal-deep)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                        <h2 className="t-display-sm anim-fade-up" style={{ color: "white", marginBottom: "32px" }}>
                            Experience the<br /><em style={{ color: "var(--lavender-l)" }}>Homely Difference.</em>
                        </h2>
                        <p className="anim-fade-up d1" style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", marginBottom: "56px", fontWeight: 300 }}>
                            Join the families who have found peace of mind with our dedicated clinical support.
                        </p>
                        <div className="anim-fade-up d2" style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-purple" style={{ padding: "18px 48px" }}>Book First Assessment</Link>
                            <a href="tel:01202948898" className="btn btn-outline-white" style={{ padding: "18px 48px" }}>Speak to a Manager</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
