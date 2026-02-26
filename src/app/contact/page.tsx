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

export default function ContactPage() {
    useReveal();
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "18px 24px",
        border: "1px solid var(--mist)",
        borderRadius: "var(--r-lg)",
        fontSize: "15px",
        fontFamily: "var(--font-sans)",
        color: "var(--royal)",
        background: "white",
        outline: "none",
        transition: "all 0.4s var(--ease)",
        appearance: "none",
    };

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
                        <div className="eyebrow eyebrow-white anim-fade-up">Get in Touch</div>
                        <h1 className="t-hero anim-fade-up d1" style={{ color: "white", marginBottom: "32px", lineHeight: 1.1 }}>
                            Let's Begin a<br /><em style={{ color: "var(--lavender-l)" }}>New Chapter.</em>
                        </h1>
                        <p className="t-body-lg anim-fade-up d2" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", fontWeight: 300 }}>
                            Our Registered Managers are ready to listen with empathy and clinical insight. Whether you need immediate care or just some advice, we are here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. FORM + INFO SECTION */}
            <section className="section-xl" style={{ background: "white" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "100px", alignItems: "start" }}>
                        {/* Form */}
                        <div className="anim-slide-right">
                            {sent ? (
                                <div style={{ padding: "80px 48px", borderRadius: "var(--r-xl)", textAlign: "center", background: "var(--alabaster)", border: "1px solid var(--mist)" }}>
                                    <div style={{ fontSize: "64px", marginBottom: "32px" }}>💜</div>
                                    <h2 className="t-display-sm" style={{ color: "var(--royal)", marginBottom: "20px" }}>Message Received.</h2>
                                    <p style={{ color: "var(--slate-mid)", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
                                        Thank you, {form.name.split(" ")[0]}. A member of our clinical team will contact you within 24 hours to discuss your needs.
                                    </p>
                                    <button onClick={() => setSent(false)} className="btn btn-purple" style={{ marginTop: "40px" }}>Send Another Message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                                    <div>
                                        <h2 className="t-display-sm" style={{ color: "var(--royal)", marginBottom: "16px" }}>Book an Assessment</h2>
                                        <p style={{ color: "var(--slate-mid)", fontSize: "16px", fontWeight: 300, marginBottom: "32px" }}>
                                            The first step toward premium care starts with a simple conversation. Fill out the form below and we'll be in touch.
                                        </p>
                                    </div>

                                    <div className="grid-2" style={{ gap: "24px" }}>
                                        <div>
                                            <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "var(--lavender)", marginBottom: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Full Name</label>
                                            <input required style={inputStyle} placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                        </div>
                                        <div>
                                            <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "var(--lavender)", marginBottom: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Phone Number</label>
                                            <input style={inputStyle} placeholder="01202 000 000" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "var(--lavender)", marginBottom: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Email Address</label>
                                        <input required style={inputStyle} placeholder="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "var(--lavender)", marginBottom: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Service of Interest</label>
                                        <select style={{ ...inputStyle, cursor: "pointer" }} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                                            <option value="">Select requirement...</option>
                                            <option>Home Care</option>
                                            <option>Live-in Care</option>
                                            <option>Supported Living</option>
                                            <option>Residential Support</option>
                                            <option>TDDI / Complex Care</option>
                                            <option>General Enquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "var(--lavender)", marginBottom: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Your Message</label>
                                        <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }} placeholder="How can we help?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                    </div>

                                    <button type="submit" className="btn btn-purple" style={{ alignSelf: "flex-start", padding: "20px 48px" }}>
                                        Send Your Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Info */}
                        <div className="anim-slide-left">
                            <h3 className="t-display-sm" style={{ color: "var(--royal)", marginBottom: "40px" }}>Contact Details</h3>
                            {[
                                { icon: "📞", label: "Direct Lines", value: "01202 948 898\n07985 591 098", href: "tel:01202948898" },
                                { icon: "✉️", label: "Email Enquiries", value: "info@homelyhealth.uk", href: "mailto:info@homelyhealth.uk" },
                                { icon: "📍", label: "Head Office", value: "Suite 6a, Wessex House\nSt. Leonards Road\nBournemouth BH8 8QS", href: "https://goo.gl/maps/search/Homely+Health+Care+Wessex+House" },
                            ].map((c, i) => (
                                <a key={i} href={c.href} style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "32px",
                                    padding: "36px 0",
                                    borderBottom: "1px solid var(--mist)",
                                    textDecoration: "none",
                                    color: "inherit",
                                }}>
                                    <div style={{ fontSize: "24px" }}>{c.icon}</div>
                                    <div>
                                        <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--lavender)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{c.label}</div>
                                        <div style={{ color: "var(--royal)", fontSize: "17px", lineHeight: 1.6, whiteSpace: "pre-line", fontWeight: 500 }}>{c.value}</div>
                                    </div>
                                </a>
                            ))}

                            <div style={{ marginTop: "64px", padding: "48px", background: "var(--royal-deep)", borderRadius: "var(--r-xl)", color: "white" }}>
                                <h4 style={{ color: "var(--lavender-l)", marginBottom: "32px", fontSize: "18px", fontWeight: 600 }}>Emergency Contact</h4>
                                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                                    We offer a 24/7 on-call service for our current clients and emergencies. Please use our main phone line for urgent enquiries.
                                </p>
                                <a href="tel:01202948898" className="btn btn-outline-white" style={{ display: "inline-block" }}>Call On-Call Manager</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
