import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { end: 2500, suffix: "+", label: "Facilities Managed" },
  { end: 180, suffix: "+", label: "Corporate Clients" },
  { end: 4200, suffix: "+", label: "Team Members" },
  { end: 12, label: "Countries" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1F44]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(77,168,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,168,218,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/20 bg-accent/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
                Next-Generation Facility Management
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-white tracking-tight leading-[1.05] mb-8"
          >
            Elevating Spaces
            <br />
            Through{" "}
            <span className="text-gradient">Elite Facility</span>
            <br />
            Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed mb-10"
          >
            Delivering operational excellence through intelligent systems, precision hygiene protocols, and premium infrastructure maintenance for Africa's most prestigious facilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-base group"
              onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 text-white/70 hover:text-white hover:bg-white/5 h-14 px-8 text-base"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/5 pt-12"
        >
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}