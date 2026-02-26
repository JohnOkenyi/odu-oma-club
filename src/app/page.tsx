"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/* ── Luxury Components ────────────────────────────── */

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 200]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-luxury-charcoal">
            {/* Background Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/80 via-luxury-charcoal/20 to-transparent z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=90"
                    alt="Luxury Care Home Interior"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            <div className="container relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="t-caption mb-6 block"
                    >
                        Established Excellence in Care
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="t-hero text-white mb-8"
                    >
                        A life of <span className="t-italic text-luxury-gold">dignity</span>, <br />
                        surrounded by <br />
                        <span className="t-italic">compassion.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="t-body-lg text-white/70 mb-12 max-w-xl"
                    >
                        Homely Health Care offers more than support—we provide a 5-star lifestyle tailored to the unique journey of your loved ones.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex flex-wrap gap-6"
                    >
                        <Link href="/contact" className="btn-luxury">
                            Speak With Us
                        </Link>
                        <Link href="/services" className="btn-outline !text-white !border-white/20 hover:!bg-white hover:!text-luxury-charcoal">
                            Our Philosophy
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">Discover More</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold/60 to-transparent" />
            </motion.div>
        </section>
    );
};

const SectionHeader = ({ title, subtitle, caption, light = false }: any) => (
    <div className={`mb-20 ${light ? "text-center" : ""}`}>
        {caption && <span className="t-caption mb-4 block">{caption}</span>}
        <h2 className={`t-display ${light ? "text-white" : "text-luxury-charcoal"} mb-6`}>
            {title} <br />
            <span className="t-italic text-luxury-gold">{subtitle}</span>
        </h2>
    </div>
);

export default function HomePage() {
    return (
        <main className="bg-luxury-soft-cream">
            <Hero />

            {/* 2. ABOUT US - Story-driven */}
            <section className="section-xl relative overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <SectionHeader
                                caption="Our Philosophy"
                                title="Redefining the standard of"
                                subtitle="private care."
                            />
                            <p className="t-body-lg mb-10">
                                At Homely Health Care, we believe that choosing care shouldn't mean compromising on lifestyle. We provide an environment that feels like a private residence, where dignity and independence are our highest priorities.
                            </p>
                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                                    </div>
                                    <p className="text-luxury-charcoal/80">Tailored support for complex clinical needs</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                                    </div>
                                    <p className="text-luxury-charcoal/80">Empowering independent living with compassion</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                                    </div>
                                    <p className="text-luxury-charcoal/80">Highly trained professional senior clinical team</p>
                                </div>
                            </div>
                            <Link href="/about" className="btn-ghost text-sm uppercase tracking-widest font-bold">
                                Read Our Story
                            </Link>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 shadow-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                                    alt="Luxury Care Home"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-luxury-champagne rounded-3xl -z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES - Elegant Cards */}
            <section className="section-xl bg-luxury-alabaster">
                <div className="container">
                    <SectionHeader
                        caption="Bespoke Services"
                        title="Comprehensive support,"
                        subtitle="expertly delivered."
                        light
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Home Care", desc: "Professional clinical support in the comfort and familiarity of your own residence." },
                            { title: "Live-in Care", desc: "Expert round-the-clock support, providing peace of mind for you and your family." },
                            { title: "Supported Living", desc: "Empowering individuals to live independently while receiving tailored clinical care." },
                            { title: "Complex Care", desc: "Specialized clinical approach for those with advanced medical and support requirements." },
                            { title: "Specialist Support", desc: "Dedicated care for specific health conditions, led by our senior clinical team." },
                            { title: "Nursing Care", desc: "Excellence in nursing, focused on maintaining quality of life and clinical safety." },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="card-luxury flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-[10px] font-bold tracking-widest text-luxury-gold uppercase mb-4 block">0{i + 1}</span>
                                    <h3 className="t-heading !text-2xl mb-6">{service.title}</h3>
                                    <p className="text-luxury-warm-gray text-sm leading-relaxed mb-8">{service.desc}</p>
                                </div>
                                <Link href="/services" className="btn-ghost inline-block self-start text-[10px] font-bold uppercase tracking-widest">
                                    Explore Service
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. LIFESTYLE - The Window Concept */}
            <section className="section-xl bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-2">
                            <SectionHeader
                                caption="A Higher Quality of Living"
                                title="The art of"
                                subtitle="refined living."
                            />
                            <p className="t-body-lg mb-8">
                                Every morning brings a new opportunity for joy and comfort. From gourmet dining to curated activities, we ensure every day is lived to its fullest potential.
                            </p>
                            <Link href="/lifestyle" className="btn-luxury">View Lifestyle</Link>
                        </div>
                        <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    className="aspect-square rounded-2xl overflow-hidden relative shadow-lg"
                                >
                                    <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" alt="Living" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-lg"
                                >
                                    <Image src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&w=800&q=80" alt="Dining" fill className="object-cover" />
                                </motion.div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-lg"
                                >
                                    <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" alt="Activities" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    className="aspect-square rounded-2xl overflow-hidden relative shadow-lg"
                                >
                                    <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&w=800&q=80" alt="Comfort" fill className="object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS */}
            <section className="section-xl bg-luxury-alabaster overflow-hidden">
                <div className="container">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="quote-mark">“</div>
                            <p className="t-editorial mb-12">
                                The care and attention to detail at Homely Health Care is truly exceptional. We haven't just found a support service; we've found a partner in ensuring our father leads a life of comfort and dignity.
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-luxury-champagne">
                                    {/* Placeholder for author image if available */}
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-charcoal">The Richardson Family</span>
                                <span className="text-[9px] uppercase tracking-widest text-luxury-gold mt-1">Private Resident Family</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. VIRTUAL EXPERIENCE */}
            <section className="h-[70vh] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-luxury-charcoal/40 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=90"
                    alt="Virtual Experience"
                    fill
                    className="object-cover"
                />
                <div className="container relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="t-display text-white mb-8">Feel the atmosphere <br /> <span className="t-italic text-luxury-gold">of our home.</span></h2>
                        <Link href="/contact" className="btn-luxury">Request a Private Tour</Link>
                    </motion.div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="section-xl bg-luxury-champagne/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="t-caption mb-6 block">Your Journey Begins Here</span>
                        <h2 className="t-display mb-12">Experience the difference of <span className="t-italic">true boutique care.</span></h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/contact" className="btn-luxury">Speak With Our Clinical Team</Link>
                            <Link href="/privacy" className="btn-outline">Download Brochure</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
