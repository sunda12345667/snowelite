import { motion } from "framer-motion";
import {
  Sparkles, Home, Factory, Briefcase, Building2, Bug,
  Trash2, TreePine, Wrench, HardHat, Wind, ShieldCheck, ArrowRight
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  { icon: Sparkles, title: "Commercial Cleaning", desc: "Precision-grade cleaning protocols for corporate headquarters, offices, and commercial spaces.", image: "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?auto=format&fit=crop&w=800&q=80" },
  { icon: Home, title: "Residential Cleaning", desc: "Premium residential care with white-glove attention to detail for luxury homes and estates.", image: "https://images.unsplash.com/photo-1758273705627-937374bfa978?auto=format&fit=crop&w=800&q=80" },
  { icon: Factory, title: "Industrial Cleaning", desc: "Heavy-duty decontamination and industrial hygiene for manufacturing and processing facilities.", image: "https://images.unsplash.com/photo-1784622526669-0c0b14686768?auto=format&fit=crop&w=800&q=80" },
  { icon: Briefcase, title: "Janitorial Services", desc: "Comprehensive daily maintenance programs designed for large-scale institutional environments.", image: "https://images.unsplash.com/photo-1779595912252-53ffb2a484ea?auto=format&fit=crop&w=800&q=80" },
  { icon: Building2, title: "Facility Management", desc: "End-to-end integrated facility management with smart monitoring and operational intelligence.", image: "https://images.unsplash.com/photo-1772442198689-af331f8f9617?auto=format&fit=crop&w=800&q=80" },
  { icon: Bug, title: "Pest Control", desc: "Advanced integrated pest management using eco-certified products and monitoring systems.", image: "https://images.unsplash.com/photo-1747659629851-a92bd71149f6?auto=format&fit=crop&w=800&q=80" },
  { icon: Trash2, title: "Waste Management", desc: "Sustainable waste reduction, recycling programs, and compliant disposal solutions.", image: "https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?auto=format&fit=crop&w=800&q=80" },
  { icon: TreePine, title: "Landscaping", desc: "Architectural landscaping and grounds maintenance for premium commercial properties.", image: "https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&w=800&q=80" },
  { icon: Wrench, title: "Technical Maintenance", desc: "Preventive and corrective maintenance for mechanical, electrical, and plumbing systems.", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" },
  { icon: HardHat, title: "Post-Construction", desc: "Specialized deep cleaning and debris removal for new construction and renovation projects.", image: "https://images.unsplash.com/photo-1576918783754-00613f24b68b?auto=format&fit=crop&w=800&q=80" },
  { icon: Wind, title: "HVAC Maintenance", desc: "Climate system optimization, filter management, and air quality monitoring services.", image: "https://images.unsplash.com/photo-1758798157512-f0a864c696c9?auto=format&fit=crop&w=800&q=80" },
  { icon: ShieldCheck, title: "Security Coordination", desc: "Integrated security management including access control, surveillance, and personnel coordination.", image: "https://images.unsplash.com/photo-1770529933902-d2f7851be31c?auto=format&fit=crop&w=800&q=80" },
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
              className="group border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-5 group-hover:border-accent/30 transition-colors">
                  <service.icon className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-white text-base mb-2">{service.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-accent/60 group-hover:text-accent text-xs font-mono tracking-wider transition-colors">
                  Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}