import { motion } from "framer-motion";
import { Compass, Cog, ShieldCheck, Lightbulb, Users, Handshake } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const capabilities = [
  {
    icon: Compass,
    title: "Executive Leadership",
    desc: "Strategic direction and long-term corporate growth.",
    image: "https://images.unsplash.com/photo-1759310610480-48649b55fbdf?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Cog,
    title: "Operations Excellence",
    desc: "Delivering efficient processes and reliable service execution.",
    image: "https://images.unsplash.com/photo-1787672357491-d43acdf974cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Maintaining high standards, safety, compliance, and continuous improvement.",
    image: "https://images.unsplash.com/photo-1770822662831-c361f15790ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Lightbulb,
    title: "Technology & Innovation",
    desc: "Using smart solutions to improve efficiency and customer experience.",
    image: "https://images.unsplash.com/photo-1604933762021-54a5858c9832?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Users,
    title: "People & Culture",
    desc: "Building a skilled, motivated, and high-performing workforce.",
    image: "https://images.unsplash.com/photo-1755705152670-0cfe7829fd0e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Handshake,
    title: "Business Development",
    desc: "Creating partnerships and opportunities that drive sustainable growth.",
    image: "https://images.unsplash.com/photo-1784202464389-de4ce60886df?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-40 px-6 bg-[#0A1F44] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          light
          label="Our People. Our Strength."
          title="Our Management Team"
          description="A dedicated team of professionals driving operational excellence, innovation, and sustainable growth across Africa."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group border border-white/5 bg-white/[0.02] hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-5 group-hover:border-accent/30 transition-colors">
                  <cap.icon className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{cap.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
