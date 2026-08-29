import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const showcases = [
  { label: "Corporate Office", before: "Before: Outdated, poorly maintained workspace", after: "After: Pristine, modern, professional environment", image: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=800&q=80" },
  { label: "Industrial Facility", before: "Before: Accumulated grime and safety hazards", after: "After: Spotless, compliant, and inspection-ready", image: "https://images.unsplash.com/photo-1669101602124-f5b78895d91c?auto=format&fit=crop&w=800&q=80" },
  { label: "Post-Construction", before: "Before: Construction debris and dust throughout", after: "After: Move-in ready with showroom finish", image: "https://images.unsplash.com/photo-1742483359033-13315b247c74?auto=format&fit=crop&w=800&q=80" },
  { label: "Luxury Residence", before: "Before: Neglected surfaces and dull finishes", after: "After: Restored brilliance with premium detailing", image: "https://images.unsplash.com/photo-1698328722772-cbe7fb7c8d12?auto=format&fit=crop&w=800&q=80" },
];

function SliderCard({ item, delay }) {
  const [value, setValue] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group border border-border bg-card overflow-hidden"
    >
      <div className="relative h-56 bg-muted overflow-hidden">
        {/* Before (desaturated photo) */}
        <div className="absolute inset-0">
          <img src={item.image} alt={item.before} className="w-full h-full object-cover grayscale brightness-[.65]" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-orange-900/20 flex items-center justify-center">
            <span className="text-sm text-white px-4 text-center drop-shadow-md">{item.before}</span>
          </div>
        </div>
        {/* After (full-color photo, revealed by slider) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <img src={item.image} alt={item.after} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-900/10 flex items-center justify-center">
            <span className="text-sm text-white px-4 text-center drop-shadow-md">{item.after}</span>
          </div>
        </div>
        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-accent/60"
          style={{ left: `${value}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-accent border-2 border-white rounded-full shadow-lg" />
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-heading font-semibold text-foreground mb-2">{item.label}</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-1 bg-border rounded-full appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between mt-2">
          <span className="text-[11px] font-mono text-muted-foreground tracking-wider">BEFORE</span>
          <span className="text-[11px] font-mono text-accent tracking-wider">AFTER</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-40 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Transformation"
          title="The VELVET CLEANING HIUB Difference"
          description="Witness the measurable impact of our precision cleaning and facility management protocols."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcases.map((item, i) => (
            <SliderCard key={item.label} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}