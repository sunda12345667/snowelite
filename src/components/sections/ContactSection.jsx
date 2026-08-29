import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageSquare, AlertCircle } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const contacts = [
  { icon: Phone, label: "Main Line", value: "+234 814 320 3600" },
  { icon: AlertCircle, label: "Emergency Hotline", value: "+234 814 320 3600" },
  { icon: Mail, label: "Email", value: "info@velvetcleaninghiub.com" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 07:00–18:00" },
  { icon: MapPin, label: "Head Office", value: "Close D, LSDPC Complex, Ogudu GRA, Lagos" },
  { icon: MessageSquare, label: "WhatsApp", value: "+234 814 320 3600" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          description="Our team is ready to discuss your facility management requirements."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 border border-border bg-card hover:border-accent/20 transition-colors group"
              >
                <c.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors mb-3" />
                <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase mb-1">{c.label}</div>
                <div className="text-sm font-medium text-foreground">{c.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border bg-muted flex items-center justify-center min-h-[320px]"
          >
            <div className="text-center">
              <MapPin className="w-8 h-8 text-accent/40 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Close D, LSDPC Complex, Ogudu GRA</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Lagos, Nigeria</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}