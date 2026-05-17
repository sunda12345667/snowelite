import { motion } from "framer-motion";
import {
  Brain, Users, Leaf, Headphones,
  BarChart3, ClipboardCheck, GraduationCap, Siren
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const features = [
  { icon: Brain, title: "AI-Powered Monitoring", desc: "Machine learning algorithms analyze operational data to predict issues before they arise." },
  { icon: Users, title: "Smart Workforce", desc: "Intelligent staff allocation and real-time tracking for optimal resource deployment." },
  { icon: Leaf, title: "Eco-Friendly Systems", desc: "Green-certified products and sustainable practices that meet international environmental standards." },
  { icon: Headphones, title: "24/7 Support Center", desc: "Round-the-clock operations center with dedicated account managers and emergency response." },
  { icon: BarChart3, title: "Real-Time Reporting", desc: "Live dashboards with granular analytics on service delivery, quality scores, and SLA compliance." },
  { icon: ClipboardCheck, title: "Quality Inspections", desc: "Multi-layer quality assurance with photographic evidence and digital sign-off protocols." },
  { icon: GraduationCap, title: "Trained Professionals", desc: "Rigorously trained staff with continuous certification programs and career development paths." },
  { icon: Siren, title: "Emergency Response", desc: "Rapid deployment teams available within 60 minutes for critical facility emergencies." },
];

export default function FeaturesSection() {
  return (
    <section id="technology" className="py-24 md:py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Advanced Capabilities"
          title="Technology-Driven Excellence"
          description="Our proprietary systems and operational frameworks set us apart from conventional facility management providers."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 border border-border hover:border-accent/20 bg-card transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
              <feature.icon className="w-6 h-6 text-accent/60 group-hover:text-accent transition-colors mb-5" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}