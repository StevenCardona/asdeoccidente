"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type UseCountUpOptions = {
  target: number;
  durationMs?: number;
  enabled?: boolean;
  decimals?: number;
};

export function useCountUp({
  target,
  durationMs = 1200,
  enabled = true,
  decimals = 0,
}: UseCountUpOptions): { ref: RefObject<HTMLParagraphElement | null>; value: number } {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setValue(target);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled, target]);

  useEffect(() => {
    if (!started) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = target * eased;
      setValue(
        decimals > 0 ? Number(next.toFixed(decimals)) : Math.round(next),
      );
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, durationMs, decimals]);

  return { ref, value };
}
