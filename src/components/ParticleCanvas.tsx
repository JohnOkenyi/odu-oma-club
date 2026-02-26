"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    radius: number; opacity: number;
}

interface ParticleCanvasProps {
    count?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function ParticleCanvas({
    count = 90,
    color = "201,169,110",
    className,
    style,
}: ParticleCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    useEffect(() => {
        if (isMobile) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        setSize();

        // Create particles
        const particles: Particle[] = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: 1.5 + Math.random() * 1.5,
            opacity: 0.1 + Math.random() * 0.25,
        }));

        const CONNECT = 110;
        const ATTRACT_RADIUS = 160;

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        };
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("resize", setSize, { passive: true });

        const draw = () => {
            animRef.current = requestAnimationFrame(draw);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            particles.forEach((p) => {
                // Cursor attraction
                const dx = mx - p.x;
                const dy = my - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < ATTRACT_RADIUS) {
                    const force = (ATTRACT_RADIUS - dist) / ATTRACT_RADIUS * 0.04;
                    p.vx += dx * force * 0.01;
                    p.vy += dy * force * 0.01;
                }

                // Speed damping
                p.vx *= 0.98;
                p.vy *= 0.98;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color},${p.opacity})`;
                ctx.fill();
            });

            // Draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < CONNECT) {
                        const alpha = (1 - d / CONNECT) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${color},${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        };

        draw();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", setSize);
        };
    }, [count, color, isMobile]);

    if (isMobile) return null;

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
                ...style,
            }}
        />
    );
}
