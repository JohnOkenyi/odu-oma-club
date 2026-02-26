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

const VALUES = [
    { n: "01", title: "Dignity & Respect", desc: "Every person we care for is treated with the same dignity and respect we would extend to someone we love. Always." },
    { n: "02", title: "Person-Centred", desc: "Your routine, your preferences, your way of life. We build every care plan around the individual, not a template." },
    { n: "03", title: "Clinical Excellence", desc: "Our team undergo continual training to the highest standards. We never accept 'good enough' — only the best." },
    { n: "04", title: "Compassion", desc: "Care that comes from the heart. We chose this profession because we genuinely care about the people we serve." },
];

const LEADERSHIP = [
    { name: "Douglas Matungamire", role: "Director / Registered Manager", bio: "Douglas started Homely Health Care in 2016. Previously he worked in various sectors including Healthcare, Education, and Insurance. He has also worked as a Support Worker, giving him deep insight into person-centred care." },
    { name: "Maria Wilson", role: "Office Manager", bio: "Joining us in 2022 after a career in general management within the NHS, Maria manages HR, recruitment, and client liaison with clinical precision and genuine warmth." },
    { name: "Cedric Dube", role: "Compliance Officer", bio: "With 15 years in the legal and compliance field, Cedric ensures our processes exceed regulatory requirements and adhere to the highest ethical practices." },
    { name: "Sara Randall", role: "Registered Manager", bio: "Sara has over 35 years in social care. Her passion for excellence ensures our clients receive the best care possible and our staff are trained to the highest standards." },
    { name: "Pauline Makazhu", role: "Nurse Lead", bio: "A compassionate Registered Nurse and Manager, Pauline leads our TDDI and Complex Care teams, ensuring those with higher clinical needs receive safe, expert support." },
];

export default function AboutPage() {
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
                <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(150,133,181,0.1) 0%, transparent 70%)" }} />

                <div className="container">
                    <div style={{ maxWidth: "800px" }}>
                        <div className="eyebrow eyebrow-white anim-fade-up">Our Institution</div>
                        <h1 className="t-hero anim-fade-up d1" style={{ color: "white", marginBottom: "32px", lineHeight: 1.1 }}>
                            Compassion as a<br /><em style={{ color: "var(--lavender-l)" }}>Clinical Standard.</em>
                        </h1>
                        <p className="t-body-lg anim-fade-up d2" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", marginBottom: "56px", fontWeight: 300 }}>
                            Homely Health Care was founded on the belief that exceptional care must be as unique as the individual receiving it. We serve families across Bournemouth with dignity and expert skill.
                        </p>
                        <div className="anim-fade-up d3">
                            <Link href="/contact" className="btn btn-purple">Book a Free Assessment</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE STORY */}
            <section className="section-xl" style={{ background: "white" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "100px", alignItems: "start" }}>
                        <div className="anim-slide-right">
                            <div className="img-cover shadow-lg" style={{ borderRadius: "var(--r-xl)", overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
                                <Image
                                    src="/images/activities_care.png"
                                    alt="Clinical Excellence"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="eyebrow anim-fade-up" style={{ color: "var(--royal)" }}>Our Origin</div>
                            <h2 className="t-display-sm anim-fade-up d1" style={{ marginBottom: "32px", color: "var(--royal)", lineHeight: 1.1 }}>
                                Rooted in Bournemouth,<br /><em>Trusted Across Dorset.</em>
                            </h2>
                            <p className="t-body-lg anim-fade-up d2" style={{ color: "var(--slate-mid)", marginBottom: "28px", fontWeight: 300 }}>
                                At Homely Health Care we are dedicated to creating an atmosphere of care and support which enables and encourages you to lead a full and independent life.
                            </p>
                            <p className="t-body anim-fade-up d3" style={{ color: "var(--slate-l)", marginBottom: "32px" }}>
                                Our friendly team of staff are highly trained to deliver person centred care which allows you to choose how you live whilst maintaining dignity and respect. We take pride in the positive impact we have on our community.
                            </p>
                            <div className="anim-fade-up d4 shadow-sm" style={{ padding: "32px", background: "var(--alabaster)", borderRadius: "var(--r-lg)", borderLeft: "4px solid var(--royal)" }}>
                                <p style={{ fontStyle: "italic", color: "var(--royal-deep)", fontSize: "15px" }}>
                                    "We are proud to give a percentage of our profits to <a href="https://rahula-trust.org" target="_blank" style={{ color: "var(--royal)", fontWeight: 600 }}>The Rahula Trust</a>, supporting children's education worldwide."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. LEADERSHIP */}
            <section className="section-xl" style={{ background: "var(--royal-deep)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "80px" }}>
                        <div className="eyebrow eyebrow-white anim-fade-up" style={{ justifyContent: "center" }}>Our Leadership</div>
                        <h2 className="t-display-sm anim-fade-up d1" style={{ color: "white" }}>The Minds Behind <br /><em style={{ color: "var(--lavender-l)" }}>Our Care.</em></h2>
                    </div>
                    <div className="grid-auto" style={{ gap: "32px" }}>
                        {LEADERSHIP.map((m, i) => (
                            <div key={i} className={`card-dark anim-fade-up d${(i % 3) + 1}`} style={{ padding: "40px", background: "rgba(255,255,255,0.03)", borderRadius: "var(--r-lg)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--lavender-l)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>{m.role}</div>
                                <h3 className="t-subheading" style={{ color: "white", marginBottom: "20px", fontWeight: 600 }}>{m.name}</h3>
                                <div style={{ width: "40px", height: "1px", background: "var(--lavender)", marginBottom: "20px" }} />
                                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7, fontWeight: 300 }}>{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VALUES */}
            <section className="section-xl" style={{ background: "var(--alabaster)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 80px" }}>
                        <div className="eyebrow anim-fade-up" style={{ color: "var(--royal)", justifyContent: "center" }}>Our Values</div>
                        <h2 className="t-display-sm anim-fade-up d1" style={{ color: "var(--royal)" }}>Principles That<br /><em>Guide Us.</em></h2>
                    </div>
                    <div className="grid-2" style={{ gap: "40px" }}>
                        {VALUES.map((v, i) => (
                            <div key={i} className={`anim-fade-up d${(i % 2) + 1}`} style={{
                                padding: "48px",
                                background: "white",
                                borderRadius: "var(--r-lg)",
                                border: "1px solid var(--mist)",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                <div style={{
                                    position: "absolute", top: "0", right: "0",
                                    fontFamily: "var(--font-serif)", fontSize: "120px",
                                    color: "var(--lavender-pale)", opacity: 0.3,
                                    transform: "translate(20%, -30%)", pointerEvents: "none"
                                }}>
                                    {v.n}
                                </div>
                                <h3 className="t-subheading" style={{ marginBottom: "20px", fontWeight: 600, color: "var(--royal)" }}>{v.title}</h3>
                                <p style={{ color: "var(--slate-mid)", fontSize: "16px", lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-lg" style={{ background: "var(--royal)", textAlign: "center" }}>
                <div className="container">
                    <h2 className="t-heading anim-fade-up" style={{ color: "white", marginBottom: "20px" }}>
                        Experience the Homely Difference.
                    </h2>
                    <p className="anim-fade-up d1" style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", marginBottom: "48px", fontWeight: 300 }}>
                        Speak with our clinical leads today for a free assessment.
                    </p>
                    <div className="anim-fade-up d2" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn btn-purple" style={{ padding: "16px 40px", fontWeight: 600 }}>Start Consultation</Link>
                        <Link href="/services" className="btn btn-outline-white" style={{ padding: "16px 40px", fontWeight: 600 }}>Explore Care</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .card-dark:hover {
                    background: rgba(255,255,255,0.06) !important;
                    border-color: rgba(255,255,255,0.1) !important;
                    transform: translateY(-5px);
                    transition: all 0.3s var(--ease);
                }
            `}</style>
        </main>
    );
}
