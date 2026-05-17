import { motion } from "framer-motion";
import {
  Building2, Castle, HeartPulse, GraduationCap,
  Hotel, Landmark, ShoppingCart, Building, Factory
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const industries = [
  { icon: Building2, name: "Corporate Offices" },
  { icon: Castle, name: "Estates" },
  { icon: HeartPulse, name: "Hospitals" },
  { icon: GraduationCap, name: "Schools" },
  { icon: Hotel, name: "Hotels" },
  { icon: Landmark, name: "Banks" },
  { icon: ShoppingCart, name: "Shopping Malls" },
  { icon: Building, name: "Government" },
  { icon: Factory, name: "Industrial Plants" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 md:py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Sectors"
          title="Industries We Serve"
          description="Specialized expertise across nine critical industry verticals, each with tailored protocols and dedicated operational frameworks."
        />
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center gap-4 p-6 border border-border bg-card hover:border-accent/20 transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                <ind.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <span className="text-xs font-mono tracking-wider text-muted-foreground group-hover:text-foreground text-center transition-colors">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}