"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassContainerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function GlassContainer({ children, className, delay = 0 }: GlassContainerProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1] // Custom luxury ease
            }}
            className={cn(
                "bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
