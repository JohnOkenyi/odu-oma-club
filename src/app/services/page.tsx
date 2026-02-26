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

const SERVICES = [
    {
        title: "Home Care",
        img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=900&q=85",
        desc: "Also known as Domiciliary care, this service allows individuals to receive necessary support while maintaining their independence in the comfort and familiarity of their own home. We provide person-centred care that fits your routine.",
        features: ["Personal hygiene & dressing", "Medication management", "Meal preparation & nutrition", "Domestic support & chores", "Companionship & social engagement"],
    },
    {
        title: "Live-in Care",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
        desc: "Expert round-the-clock support for those who need constant care but prefer to remain in their own homes. A dedicated professional provides continuity of care, safety, and meaningful companionship 24 hours a day.",
        features: ["24-hour presence & safety", "Complete household assistance", "Personalized daily routines", "Emotional & social support", "Specialist condition care"],
    },
    {
        title: "Supported Living",
        img: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=900&q=85",
        desc: "We empower individuals with complex care needs, such as learning disabilities and autism, to live independently. Our focus is on enabling a full life with the right level of clinical and emotional oversight.",
        features: ["Independence building", "Community integration", "Complex needs management", "Life skills development", "24-hour specialist support"],
    },
    {
        title: "Residential Support",
        img: "https://images.unsplash.com/photo-1516733225897-1aa73b87c8e8?auto=format&fit=crop&w=900&q=85",
        desc: "We provide experienced and professional staffing solutions for residential and nursing homes. Our team ensures that care standards are maintained with consistency, skill, and genuine clinical authority.",
        features: ["Flexible shift coverage", "Qualified nursing staff", "Experienced care workers", "Seamless continuity of care", "Fully vetted professionals"],
    },
    {
        title: "TDDI / Complex Care",
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&w=900&q=85",
        desc: "Led by a qualified nurse, our Complex Care service provides a safe and skilled approach to managing symptoms and promoting recovery from health conditions, disease, disorder, or injury (TDDI).",
        features: ["Nurse-led clinical care", "Specialist medical procedures", "High-acuity symptom management", "Recovery & rehabilitation support", "Expert clinical oversight"],
    },
];

export default function ServicesPage() {
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
                    <div style={{ maxWidth: "800px" }}>
                        <div className="eyebrow eyebrow-white anim-fade-up">Our Clinical Scope</div>
                        <h1 className="t-hero anim-fade-up d1" style={{ color: "white", marginBottom: "32px", lineHeight: 1.1 }}>
                            Expert Care,<br /><em style={{ color: "var(--lavender-l)" }}>Delivered with Dignity.</em>
                        </h1>
                        <p className="t-body-lg anim-fade-up d2" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", marginBottom: "56px", fontWeight: 300 }}>
                            Homely Health Care is dedicated to creating an atmosphere of care which encourages a full and independent life. Our services are tailored to your unique journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. SERVICES LIST */}
            {SERVICES.map((s, i) => (
                <section key={i} className="section-xl" style={{ background: i % 2 === 0 ? "white" : "var(--alabaster)", borderBottom: "1px solid var(--mist)" }}>
                    <div className="container">
                        <div className="grid-2" style={{ direction: i % 2 === 1 ? "rtl" : "ltr" as "ltr" | "rtl", gap: "100px", alignItems: "center" }}>
                            {/* Image Frame */}
                            <div className={i % 2 === 0 ? "anim-slide-right" : "anim-slide-left"} style={{
                                direction: "ltr",
                                borderRadius: "var(--r-xl)",
                                overflow: "hidden",
                                aspectRatio: "1/1",
                                position: "relative",
                                boxShadow: "var(--shadow-lg)"
                            }}>
                                <Image
                                    src={s.img}
                                    alt={s.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={{
                                    position: "absolute", bottom: "24px", right: "24px",
                                    padding: "16px 24px", borderRadius: "var(--r-lg)",
                                    background: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)",
                                    fontSize: "12px", color: "var(--royal)", fontWeight: 700,
                                    letterSpacing: "0.1em", textTransform: "uppercase"
                                }}>
                                    Specialism 0{i + 1}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ direction: "ltr" }}>
                                <div className="eyebrow anim-fade-up" style={{ color: "var(--royal)" }}>Clinical Pillar</div>
                                <h2 className="t-display-sm anim-fade-up d1" style={{ marginBottom: "32px", color: "var(--royal)" }}>{s.title}</h2>
                                <p className="anim-fade-up d2" style={{ color: "var(--slate-mid)", fontSize: "16px", lineHeight: 1.85, marginBottom: "40px", fontWeight: 300 }}>{s.desc}</p>

                                <div className="anim-fade-up d3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "56px" }}>
                                    {s.features.map((f, fi) => (
                                        <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "var(--slate-mid)" }}>
                                            <span style={{ color: "var(--lavender)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <div className="anim-fade-up d4">
                                    <Link href="/contact" className="btn btn-purple">
                                        Request Free Assessment
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* 3. CTA */}
            <section className="section-xl" style={{ background: "var(--royal-deep)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                        <h2 className="t-display-sm anim-fade-up" style={{ color: "white", marginBottom: "32px" }}>
                            Bespoke Care for your<br /><em style={{ color: "var(--lavender-l)" }}>Unique Journey.</em>
                        </h2>
                        <p className="anim-fade-up d1" style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", marginBottom: "56px", fontWeight: 300 }}>
                            Registered and regulated by the CQC, we are here to support you at every stage. Let's find the right path together.
                        </p>
                        <div className="anim-fade-up d2" style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-purple" style={{ padding: "20px 48px" }}>Start Your Consultation</Link>
                            <a href="tel:01202948898" className="btn btn-outline-white" style={{ padding: "20px 48px" }}>Call Our Team</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
