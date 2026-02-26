"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Choose Us", href: "/why-us" },
    { name: "Careers", href: "/careers" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 py-6",
                isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-luxury-charcoal rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                        <Heart className="text-luxury-gold w-5 h-5 fill-luxury-gold" />
                    </div>
                    <span className="text-xl font-serif tracking-tight text-luxury-charcoal">
                        Homely<span className="text-luxury-gold">Health</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-luxury-charcoal/70 hover:text-luxury-gold transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="luxury-button text-sm">
                        Book Assessment
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-luxury-charcoal"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-white border-b border-luxury-parchment p-6 flex flex-col gap-4 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-serif text-luxury-charcoal"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="luxury-button text-center"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Book Assessment
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
