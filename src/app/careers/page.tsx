"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

const ROLES = [
    { title: "Community Carer", type: "Full-time / Part-time", location: "Bournemouth & Surrounding", desc: "Provide regular home care visits, personal care, and companionship to our clients. You'll be the face of Homely, delivering person-centred support with dignity." },
    { title: "Live-in Carer", type: "Residential", location: "Across Dorset", desc: "Support a client in their own home, providing 24-hour care, domestic support, and genuine companionship. Requires a high level of empathy and clinical intuition." },
    { title: "Supported Living Worker", type: "Full-time", location: "Bournemouth", desc: "Empower adults with learning and/or physical disabilities to live independently. Help with life skills, social integration, and personal care." },
    { title: "Care Coordinator", type: "Full-time", location: "Head Office, Bournemouth", desc: "Help manage our care scheduling, client communications, and team coordination. Ensure that our standards of clinical excellence are met every day." },
];

const BENEFITS = [
    { icon: "🎓", title: "Free Specialist Training", desc: "We invest in your expertise. From paid induction to advanced clinical certifications, your growth is our priority." },
    { icon: "💰", title: "Competitive Rates", desc: "We offer sector-leading pay, mileage allowance, and enhanced rates for weekends and bank holidays." },
    { icon: "🤝", title: "24/7 Clinical Support", desc: "You are never alone on a shift. Our senior management and clinical leads are available 24 hours a day." },
    { icon: "📈", title: "Career Progression", desc: "We promote from within. Start as a carer and grow into a senior lead or manager with our full support." },
    { icon: "❤️", title: "Meaningful Impact", desc: "Work that genuinely changes lives. You'll be part of a team dedicated to enabling independence and dignity." },
    { icon: "🏆", title: "Team Recognition", desc: "We celebrate our professionals through regular awards, social events, and a culture of genuine appreciation." },
];

export default function CareersPage() {
    useReveal();
    const [openRole, setOpenRole] = useState<number | null>(null);

    return (
        <main>
            {/* 1. HERO SECTION */}
            <section style={{
                background: "var(--royal-deep)",
                padding: "220px var(--px) 140px",
                position: "relative",
                overflow: "hidden"
            }}>
                <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(150,133,181,0.1) 0%, transparent 70%)" }} />

                <div className="container">
                    <div style={{ maxWidth: "800px" }}>
                        <div className="eyebrow eyebrow-white anim-fade-up">Join Our Team</div>
                        <h1 className="t-hero anim-fade-up d1" style={{ color: "white", marginBottom: "32px", lineHeight: 1.1 }}>
                            A Career with<br /><em style={{ color: "var(--lavender-l)" }}>Clinical Purpose.</em>
                        </h1>
                        <p className="t-body-lg anim-fade-up d2" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", fontWeight: 300 }}>
                            Work with us. Join a leading provider of high-complexity care in Bournemouth and beyond. We don't just hire staff; we nurture clinical leaders.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. BENEFITS SECTION */}
            <section className="section-xl" style={{ background: "white" }}>
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 80px" }}>
                        <div className="eyebrow anim-fade-up" style={{ color: "var(--royal)", justifyContent: "center" }}>The Homely Standard</div>
                        <h2 className="t-display-sm anim-fade-up d1" style={{ color: "var(--royal)" }}>Why Our Professionals<br /><em>Choose Us.</em></h2>
                    </div>
                    <div className="grid-auto" style={{ gap: "40px" }}>
                        {BENEFITS.map((b, i) => (
                            <div key={i} className={`anim-fade-up d${(i % 3) + 1}`} style={{
                                padding: "48px 40px",
                                background: "var(--alabaster)",
                                borderRadius: "var(--r-lg)",
                                transition: "all 0.4s var(--ease)"
                            }}>
                                <div style={{ fontSize: "32px", marginBottom: "24px" }}>{b.icon}</div>
                                <h3 className="t-subheading" style={{ color: "var(--royal)", marginBottom: "16px", fontWeight: 600 }}>{b.title}</h3>
                                <p style={{ color: "var(--slate-mid)", fontSize: "15px", lineHeight: 1.8, fontWeight: 300 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ROLES SECTION */}
            <section id="roles" className="section-xl" style={{ background: "var(--royal-deep)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 80px" }}>
                        <div className="eyebrow eyebrow-white anim-fade-up" style={{ justifyContent: "center" }}>Current Openings</div>
                        <h2 className="t-display-sm anim-fade-up d1" style={{ color: "white" }}>Build Your <em style={{ color: "var(--lavender-l)" }}>Clinical Future.</em></h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px", margin: "0 auto" }}>
                        {ROLES.map((r, i) => (
                            <div key={i} className={`anim-fade-up d${(i % 3) + 1}`} style={{
                                background: openRole === i ? "rgba(255,255,255,0.05)" : "transparent",
                                borderRadius: "var(--r-lg)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                overflow: "hidden",
                                transition: "all 0.4s var(--ease)",
                            }}>
                                <button
                                    onClick={() => setOpenRole(openRole === i ? null : i)}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "40px",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        gap: "32px",
                                    }}
                                >
                                    <div>
                                        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", fontWeight: 500, color: "white", marginBottom: "8px" }}>
                                            {r.title}
                                        </h3>
                                        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                                            <span style={{ fontSize: "12px", color: "var(--lavender-l)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{r.type}</span>
                                            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>📍 {r.location}</span>
                                        </div>
                                    </div>
                                    <div style={{
                                        width: "48px", height: "48px",
                                        borderRadius: "50%",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                        transition: "all 0.4s var(--ease)",
                                        transform: openRole === i ? "rotate(45deg)" : "none",
                                        color: "var(--lavender-l)",
                                        fontSize: "24px",
                                    }}>+</div>
                                </button>

                                {openRole === i && (
                                    <div style={{ padding: "0 40px 48px" }}>
                                        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "32px" }} />
                                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.8, marginBottom: "40px", fontWeight: 300 }}>{r.desc}</p>
                                        <Link href="/contact" className="btn btn-purple" style={{ padding: "16px 36px", fontSize: "13px" }}>
                                            Submit Your CV
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="section-xl" style={{ background: "white", textAlign: "center" }}>
                <div className="container">
                    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                        <h2 className="t-display-sm anim-fade-up" style={{ color: "var(--royal)", marginBottom: "32px" }}>
                            Join the Homely <br /><em>Family Today.</em>
                        </h2>
                        <p className="anim-fade-up d1" style={{ color: "var(--slate-mid)", fontSize: "18px", marginBottom: "56px", fontWeight: 300 }}>
                            Ready to make a difference? Send your CV or contact our recruitment team directly.
                        </p>
                        <div className="anim-fade-up d2" style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-purple" style={{ padding: "20px 48px" }}>Apply to Join</Link>
                            <a href="mailto:info@homelyhealth.uk" className="btn btn-outline-purple" style={{ padding: "20px 48px" }}>Email Recruitment</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
