import { useState, useEffect, useRef } from "react";

export function useCountUp(target: number, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    const raf = useRef<number>(0);

    useEffect(() => {
        if (!start) return;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
                raf.current = requestAnimationFrame(tick);
            }
        };

        raf.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf.current);
    }, [target, duration, start]);

    return count;
}

export function useInView(threshold = 0.2): [React.RefObject<HTMLElement>, boolean] {
    const ref = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref as React.RefObject<HTMLElement>, inView];
}
