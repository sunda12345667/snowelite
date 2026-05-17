import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl md:text-5xl font-bold text-white tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="font-mono text-xs tracking-[0.2em] uppercase text-white/40 mt-2">
        {label}
      </div>
    </div>
  );
}