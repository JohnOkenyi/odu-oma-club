"use client";

import Link from "next/link";
import { Heart, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-luxury-charcoal text-white pt-20 pb-10 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                                <Heart className="text-luxury-gold w-5 h-5 fill-luxury-gold" />
                            </div>
                            <span className="text-2xl font-serif tracking-tight text-white">
                                Homely<span className="text-luxury-gold">Health</span>
                            </span>
                        </Link>
                        <p className="text-white/60 leading-relaxed mb-6">
                            Setting the gold standard in private healthcare and compassionate living. We believe care should feel like home.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-luxury-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-luxury-gold transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-luxury-gold transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif mb-8 text-luxury-gold">Our Services</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/services" className="hover:text-white transition-colors">Home Care</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Live-in Care</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Supported Living</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Companionship Care</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Specialized Dementia Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif mb-8 text-luxury-gold">Quick Links</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Our Vision</Link></li>
                            <li><Link href="/why-us" className="hover:text-white transition-colors">Why Families Choose Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Join Elite Team</Link></li>
                            <li><Link href="/testimonials" className="hover:text-white transition-colors">What Families Say</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Book Assessment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif mb-8 text-luxury-gold">Contact Us</h4>
                        <ul className="space-y-6 text-white/60">
                            <li className="flex gap-4">
                                <MapPin className="text-luxury-gold shrink-0" size={20} />
                                <span>123 Luxury Lane, Mayfair,<br />London, W1J 7JZ</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="text-luxury-gold shrink-0" size={20} />
                                <span>+44 (0) 20 7946 0000</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="text-luxury-gold shrink-0" size={20} />
                                <span>concierge@homelyhealth.uk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
                    <p>© {currentYear} Homely Health Care. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
