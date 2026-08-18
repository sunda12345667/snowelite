import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const comparisons = [
  "Certified & trained professionals",
  "AI-powered operational monitoring",
  "24/7 emergency response teams",
  "Real-time quality dashboards",
  "Eco-certified cleaning products",
  "Corporate-grade SLA guarantees",
  "Dedicated account management",
  "Technology-integrated systems",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-40 px-6 bg-[#0A1F44] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeader
          light
          label="Comparison"
          title="Why VELVET CLEANING HIUB LIMITED Stands Apart"
          description="The difference between ordinary cleaning services and an elite facility management corporation."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 backdrop-blur-sm overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.02]">
            <div className="p-4 md:p-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase">Feature</span>
            </div>
            <div className="p-4 md:p-6 text-center border-x border-white/5">
              <span className="font-heading font-bold text-accent text-sm">VELVET CLEANING HIUB LIMITED</span>
            </div>
            <div className="p-4 md:p-6 text-center">
              <span className="font-heading font-bold text-white/30 text-sm">Others</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
            >
              <div className="p-4 md:p-5 flex items-center">
                <span className="text-white/60 text-sm">{item}</span>
              </div>
              <div className="p-4 md:p-5 flex justify-center items-center border-x border-white/5">
                <div className="w-6 h-6 bg-accent/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
              </div>
              <div className="p-4 md:p-5 flex justify-center items-center">
                <div className="w-6 h-6 bg-white/5 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-white/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}