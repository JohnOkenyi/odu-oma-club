"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import Image from "next/image";

interface CareWindowProps {
    imageUrl: string;
    children?: ReactNode;
    title?: string;
}

export default function CareWindow({ imageUrl, children, title }: CareWindowProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Smooth cinematic expansion
    const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["40%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <div ref={containerRef} className="relative w-full min-h-[80vh] flex items-center justify-center py-20 px-6 sm:px-12">
            <motion.div
                style={{ borderRadius, scale, opacity }}
                className="relative w-full max-w-6xl aspect-video overflow-hidden shadow-2xl bg-luxury-parchment"
            >
                <Image
                    src={imageUrl}
                    alt={title || "Care Window View"}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                    {title && (
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-white text-3xl sm:text-5xl font-serif max-w-2xl"
                        >
                            {title}
                        </motion.h3>
                    )}
                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-4"
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
