import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : {}}
      className={`backdrop-blur-2xl bg-white/[0.03] border border-white/10 ${className}`}
    >
      {children}
    </motion.div>
  );
}