import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const team = [
  { name: "James Mthembu", role: "Chief Executive Officer", initials: "JM" },
  { name: "Amara Diallo", role: "Chief Operations Officer", initials: "AD" },
  { name: "David Osei", role: "VP, Technology & Innovation", initials: "DO" },
  { name: "Zinhle Nkosi", role: "Director, Quality Assurance", initials: "ZN" },
  { name: "Ibrahim Yusuf", role: "Head of Client Relations", initials: "IY" },
  { name: "Grace Kimani", role: "Regional Director, East Africa", initials: "GK" },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-40 px-6 bg-[#0A1F44] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,168,218,0.02)_1px,transparent_1px),linear_gradient(90deg,rgba(77,168,218,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          light
          label="Leadership"
          title="Our Management Team"
          description="Experienced professionals driving operational excellence across the African continent."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 border border-white/5 bg-white/[0.02] hover:border-accent/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center font-heading font-bold text-accent text-xl mb-5">
                {member.initials}
              </div>
              <h3 className="font-heading font-semibold text-white text-lg">{member.name}</h3>
              <p className="text-white/40 text-sm mt-1 mb-4">{member.role}</p>
              <Linkedin className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors cursor-pointer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}