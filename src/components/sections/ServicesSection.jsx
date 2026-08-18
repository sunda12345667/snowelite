import { motion } from "framer-motion";
import {
  Sparkles, Home, Factory, Briefcase, Building2, Bug,
  Trash2, TreePine, Wrench, HardHat, Wind, ShieldCheck, ArrowRight
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  { icon: Sparkles, title: "Commercial Cleaning", desc: "Precision-grade cleaning protocols for corporate headquarters, offices, and commercial spaces." },
  { icon: Home, title: "Residential Cleaning", desc: "Premium residential care with white-glove attention to detail for luxury homes and estates." },
  { icon: Factory, title: "Industrial Cleaning", desc: "Heavy-duty decontamination and industrial hygiene for manufacturing and processing facilities." },
  { icon: Briefcase, title: "Janitorial Services", desc: "Comprehensive daily maintenance programs designed for large-scale institutional environments." },
  { icon: Building2, title: "Facility Management", desc: "End-to-end integrated facility management with smart monitoring and operational intelligence." },
  { icon: Bug, title: "Pest Control", desc: "Advanced integrated pest management using eco-certified products and monitoring systems." },
  { icon: Trash2, title: "Waste Management", desc: "Sustainable waste reduction, recycling programs, and compliant disposal solutions." },
  { icon: TreePine, title: "Landscaping", desc: "Architectural landscaping and grounds maintenance for premium commercial properties." },
  { icon: Wrench, title: "Technical Maintenance", desc: "Preventive and corrective maintenance for mechanical, electrical, and plumbing systems." },
  { icon: HardHat, title: "Post-Construction", desc: "Specialized deep cleaning and debris removal for new construction and renovation projects." },
  { icon: Wind, title: "HVAC Maintenance", desc: "Climate system optimization, filter management, and air quality monitoring services." },
  { icon: ShieldCheck, title: "Security Coordination", desc: "Integrated security management including access control, surveillance, and personnel coordination." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-40 px-6 bg-[#0A1F44] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          light
          label="Service Matrix"
          title="Comprehensive Facility Solutions"
          description="Twelve core service verticals designed to deliver operational excellence across every dimension of facility management."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer"
            >
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-5 group-hover:border-accent/30 transition-colors">
                <service.icon className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-white text-base mb-2">{service.title}</h3>
              <p className="text-white/30 text-sm leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-flex items-center gap-1 text-accent/60 group-hover:text-accent text-xs font-mono tracking-wider transition-colors">
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}