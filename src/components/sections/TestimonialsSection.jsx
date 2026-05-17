import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Adebayo Okonkwo",
    role: "CEO, Meridian Properties",
    text: "SnowElite transformed our approach to facility management. Their technology-driven operations and attention to detail are unmatched in the African market.",
  },
  {
    name: "Sarah Ndikumana",
    role: "Property Manager, Crown Estates",
    text: "We manage 45 luxury residences and SnowElite handles every one flawlessly. Their professionalism and response times set the standard for the industry.",
  },
  {
    name: "Dr. Kwame Asante",
    role: "Director, Accra General Hospital",
    text: "In healthcare, hygiene isn't optional — it's critical. SnowElite's medical-grade protocols and quality assurance give us absolute confidence.",
  },
  {
    name: "Fatima Al-Hassan",
    role: "GM, The Palms Hotel",
    text: "Our guests expect five-star standards. SnowElite delivers consistently, and their real-time reporting gives us complete visibility into operations.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Client Voices"
          title="Trusted by Industry Leaders"
          description="What Africa's most discerning organizations say about the SnowElite standard of service."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 border border-border hover:border-accent/20 bg-card transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-6" />
              <p className="text-foreground leading-relaxed mb-8 text-[15px]">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-accent/10 border border-accent/20 flex items-center justify-center font-heading font-bold text-accent text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}