"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-luxury-alabaster border-t border-black/[0.03] pt-24 pb-12">
            <div className="container">
                <div className="grid lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="group inline-block mb-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-serif text-luxury-charcoal">Homely</span>
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold">Health Care</span>
                            </div>
                        </Link>
                        <p className="text-luxury-warm-gray text-sm leading-relaxed mb-8 max-w-xs">
                            Dedicated to providing 5-star luxury care and support, enabling you to lead a full and independent life in the comfort of your own home.
                        </p>
                        <div className="flex gap-6">
                            {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                                <Link
                                    key={social}
                                    href="#"
                                    className="text-[10px] uppercase tracking-widest font-bold text-luxury-charcoal/40 hover:text-luxury-gold transition-colors"
                                >
                                    {social}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div>
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-luxury-charcoal mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Our Story", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Why Us", href: "/why-us" },
                                { label: "Careers", href: "/careers" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-luxury-warm-gray hover:text-luxury-gold transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-luxury-charcoal mb-8">Services</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Personal Care", href: "/services" },
                                { label: "Live-in Support", href: "/services" },
                                { label: "Complex Needs", href: "/services" },
                                { label: "Companionship", href: "/services" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-luxury-warm-gray hover:text-luxury-gold transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-luxury-charcoal mb-8">Contact</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-2">Inquiries</p>
                                <p className="text-luxury-charcoal font-serif text-xl">01202 948 898</p>
                                <p className="text-sm text-luxury-warm-gray">info@homelyhealth.uk</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-2">Address</p>
                                <p className="text-sm text-luxury-warm-gray leading-relaxed">
                                    Suite 6a, Wessex House,<br />
                                    St. Leonards Road, Charminster,<br />
                                    Bournemouth, BH8 8QS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] text-luxury-warm-gray/60">
                        &copy; {new Date().getFullYear()} Homely Health Care Limited. All Rights Reserved.
                    </p>
                    <div className="flex gap-10">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-[11px] text-luxury-warm-gray/60 hover:text-luxury-gold transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
