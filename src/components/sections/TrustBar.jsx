import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2, BadgeCheck, Globe, Leaf } from "lucide-react";

const badges = [
  { icon: Shield, label: "ISO 9001 Certified" },
  { icon: Award, label: "ISSA Member" },
  { icon: BadgeCheck, label: "OHSAS 18001" },
  { icon: Globe, label: "Pan-African Coverage" },
  { icon: Leaf, label: "Green Cleaning Certified" },
  { icon: CheckCircle2, label: "BICS Accredited" },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Trusted by leading organizations across Africa
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 border border-border bg-background flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <badge.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <span className="text-[11px] font-mono tracking-wider text-muted-foreground text-center">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}