"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Why Us", href: "/why-us" },
    { label: "Careers", href: "/careers" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const lightNavbar = isHome && !scrolled && !menuOpen;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-black/[0.03]" : "py-10 bg-transparent"
                }`}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className={`text-2xl font-serif tracking-tight transition-colors duration-500 ${lightNavbar ? "text-white" : "text-luxury-charcoal"
                            }`}>
                            Homely
                        </span>
                        <span className={`text-[9px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${lightNavbar ? "text-white/60" : "text-luxury-gold"
                            }`}>
                            Health Care
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-12">
                    <div className="flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300 relative group ${lightNavbar ? "text-white/80 hover:text-white" : "text-luxury-charcoal/70 hover:text-luxury-charcoal"
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-500 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/contact"
                        className={`btn-luxury !py-3 !px-8 !text-[10px] ${lightNavbar ? "bg-white !text-luxury-charcoal hover:!bg-luxury-gold hover:!text-white" : ""
                            }`}
                    >
                        Book a Visit
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`w-6 h-[1.5px] transition-all duration-500 ${lightNavbar ? "bg-white" : "bg-luxury-charcoal"
                        } ${menuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
                    <span className={`w-6 h-[1.5px] transition-all duration-500 ${lightNavbar ? "bg-white" : "bg-luxury-charcoal"
                        } ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`w-4 h-[1.5px] ml-auto transition-all duration-500 ${lightNavbar ? "bg-white" : "bg-luxury-charcoal"
                        } ${menuOpen ? "-rotate-45 -translate-y-[7.5px] !w-6" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-luxury-alabaster z-[90] flex flex-col items-center justify-center p-8 lg:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-serif text-luxury-charcoal hover:text-luxury-gold transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8"
                            >
                                <Link
                                    href="/contact"
                                    className="btn-luxury"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Request Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
