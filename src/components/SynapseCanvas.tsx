"use client";

import { useEffect, useRef } from "react";

interface SynapseCanvasProps {
    nodeCount?: number;
    color?: string;
}

export default function SynapseCanvas({ nodeCount = 40, color = "201,169,110" }: SynapseCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);

    useEffect(() => {
        if (typeof window === "undefined" || window.innerWidth < 768) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        setSize();
        window.addEventListener("resize", setSize, { passive: true });

        // Static node positions with slow drift
        type Node = { x: number; y: number; vx: number; vy: number; pulse: number; pulseSpeed: number };
        const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.006 + Math.random() * 0.008,
        }));

        const CONNECT = 180;
        let t = 0;

        const draw = () => {
            animRef.current = requestAnimationFrame(draw);
            t++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodes.forEach((n) => {
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += n.pulseSpeed;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

                // Pulsing node dot
                const pAlpha = 0.03 + 0.04 * Math.sin(n.pulse);
                ctx.beginPath();
                ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color},${pAlpha})`;
                ctx.fill();
            });

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < CONNECT) {
                        // Slow pulse along line using time offset
                        const pulse = 0.03 + 0.03 * Math.sin(t * 0.01 + i + j);
                        const alpha = (1 - d / CONNECT) * pulse;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(${color},${alpha})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }
            }
        };

        draw();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", setSize);
        };
    }, [nodeCount, color]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        />
    );
}
