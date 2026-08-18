import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver world-class cleaning solutions that exceed customer expectations through professionalism, innovation, reliability, and integrity.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become the most trusted and preferred cleaning service provider in Nigeria and Africa.",
  },
  {
    icon: Gem,
    title: "Our Philosophy",
    text: "We treat every facility as a living organism. Our approach integrates intelligent monitoring, precision protocols, and trained professionals to deliver environments that inspire productivity and trust.",
  },
];

const timeline = [
  { year: "2015", event: "Founded in Johannesburg" },
  { year: "2017", event: "Expanded to 5 African markets" },
  { year: "2019", event: "Launched AI operations platform" },
  { year: "2021", event: "Reached 1,000+ facilities" },
  { year: "2023", event: "Pan-African coverage achieved" },
  { year: "2025", event: "2,500+ facilities managed" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="About VELVET CLEANING HIUB LIMITED"
          title="The Architecture of Excellence"
          description="A next-generation integrated facility management company, focused on innovation, operational efficiency, and premium service delivery across Africa's most demanding environments."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 border border-border hover:border-accent/20 bg-card transition-all duration-500"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors">
                <pillar.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{pillar.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="font-heading font-bold text-2xl text-center mb-12 text-foreground">Growth Timeline</h3>
          <div className="hidden md:block absolute top-[70px] left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="hidden md:block w-2 h-2 bg-accent mx-auto mb-4 rounded-full" />
                <div className="font-mono text-accent font-bold text-lg">{item.year}</div>
                <div className="text-sm text-muted-foreground mt-2">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}