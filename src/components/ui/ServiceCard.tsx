"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { MouseEvent } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="luxury-card p-10 flex flex-col items-center text-center group cursor-pointer"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="w-16 h-16 rounded-full bg-luxury-parchment flex items-center justify-center mb-6 group-hover:bg-luxury-gold transition-colors duration-500"
            >
                <Icon className="w-8 h-8 text-luxury-gold group-hover:text-white transition-colors duration-500" />
            </div>

            <h4
                style={{ transform: "translateZ(40px)" }}
                className="text-2xl mb-4 text-luxury-charcoal"
            >
                {title}
            </h4>

            <p
                style={{ transform: "translateZ(30px)" }}
                className="text-luxury-charcoal/60 leading-relaxed"
            >
                {description}
            </p>

            <div className="mt-8 pt-6 border-t border-luxury-parchment w-full">
                <span className="text-xs font-medium uppercase tracking-widest text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                </span>
            </div>
        </motion.div>
    );
}
