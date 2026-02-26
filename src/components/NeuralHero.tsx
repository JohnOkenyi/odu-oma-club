"use client";

import { useEffect, useRef } from "react";

export default function NeuralHero({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (typeof window === "undefined" || window.innerWidth < 768) return;

        let animId = 0;

        const init = async () => {
            const THREE = await import("three");
            const canvas = canvasRef.current;
            if (!canvas) return;

            // Renderer
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);

            // Scene & Camera
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 160;

            // ── Points ──
            const POINT_COUNT = 280;
            const positions = new Float32Array(POINT_COUNT * 3);
            const velocities = new Float32Array(POINT_COUNT * 3);

            for (let i = 0; i < POINT_COUNT; i++) {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const r = 40 + Math.random() * 60;
                positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
                positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                positions[i * 3 + 2] = r * Math.cos(phi) * 0.4;
                velocities[i * 3] = (Math.random() - 0.5) * 0.04;
                velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.04;
                velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
            }

            const pGeom = new THREE.BufferGeometry();
            const posAttr = new THREE.BufferAttribute(positions, 3);
            pGeom.setAttribute("position", posAttr);

            const points = new THREE.Points(pGeom, new THREE.PointsMaterial({
                color: 0xC9A96E, size: 0.9, sizeAttenuation: true, transparent: true, opacity: 0.7,
            }));
            scene.add(points);

            // ── Lines ──
            const LINE_COUNT = POINT_COUNT * 4;
            const linePos = new Float32Array(LINE_COUNT * 6);
            const lAttr = new THREE.BufferAttribute(linePos, 3);
            const lGeom = new THREE.BufferGeometry();
            lGeom.setAttribute("position", lAttr);
            const lineMesh = new THREE.LineSegments(lGeom, new THREE.LineBasicMaterial({
                color: 0xC9A96E, transparent: true, opacity: 0.18,
            }));
            scene.add(lineMesh);

            // Events
            const onMouse = (e: MouseEvent) => {
                mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
                mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
            };
            const onResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener("mousemove", onMouse, { passive: true });
            window.addEventListener("resize", onResize, { passive: true });

            // ── Animation ──
            const CONNECT = 28;
            let frame = 0;

            const tick = () => {
                animId = requestAnimationFrame(tick);
                frame++;

                // Move points
                const pos = posAttr.array as Float32Array;
                for (let i = 0; i < POINT_COUNT; i++) {
                    pos[i * 3] += velocities[i * 3];
                    pos[i * 3 + 1] += velocities[i * 3 + 1];
                    pos[i * 3 + 2] += velocities[i * 3 + 2];
                    const d = Math.sqrt(pos[i * 3] ** 2 + pos[i * 3 + 1] ** 2 + pos[i * 3 + 2] ** 2);
                    if (d > 100) {
                        velocities[i * 3] *= -0.98;
                        velocities[i * 3 + 1] *= -0.98;
                        velocities[i * 3 + 2] *= -0.98;
                    }
                }
                posAttr.needsUpdate = true;

                // Update lines every 2nd frame
                if (frame % 2 === 0) {
                    const lp = lAttr.array as Float32Array;
                    let li = 0;
                    OUTER: for (let i = 0; i < POINT_COUNT; i++) {
                        for (let j = i + 1; j < POINT_COUNT; j++) {
                            if (li >= LINE_COUNT) break OUTER;
                            const dx = pos[i * 3] - pos[j * 3], dy = pos[i * 3 + 1] - pos[j * 3 + 1], dz = pos[i * 3 + 2] - pos[j * 3 + 2];
                            if (Math.sqrt(dx * dx + dy * dy + dz * dz) < CONNECT) {
                                lp[li * 6] = pos[i * 3]; lp[li * 6 + 1] = pos[i * 3 + 1]; lp[li * 6 + 2] = pos[i * 3 + 2];
                                lp[li * 6 + 3] = pos[j * 3]; lp[li * 6 + 4] = pos[j * 3 + 1]; lp[li * 6 + 5] = pos[j * 3 + 2];
                                li++;
                            }
                        }
                    }
                    lAttr.needsUpdate = true;
                    lGeom.setDrawRange(0, li * 2);
                }

                // Mouse parallax
                camera.position.x += (mouseRef.current.x * 8 - camera.position.x) * 0.03;
                camera.position.y += (mouseRef.current.y * 5 - camera.position.y) * 0.03;
                camera.lookAt(scene.position);
                scene.rotation.y += 0.0008;
                renderer.render(scene, camera);
            };

            tick();

            return () => {
                window.removeEventListener("mousemove", onMouse);
                window.removeEventListener("resize", onResize);
                cancelAnimationFrame(animId);
                renderer.dispose();
            };
        };

        let cleanup: (() => void) | undefined;
        init().then((fn) => { cleanup = fn; });

        return () => {
            cancelAnimationFrame(animId);
            cleanup?.();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}
