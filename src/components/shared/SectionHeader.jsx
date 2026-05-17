import { motion } from "framer-motion";

export default function SectionHeader({ label, title, description, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-16 md:mb-20`}
    >
      {label && (
        <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
          {label}
        </span>
      )}
      <h2 className={`font-heading font-800 text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl leading-relaxed ${light ? "text-white/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}