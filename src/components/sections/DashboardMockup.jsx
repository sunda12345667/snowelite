import { motion } from "framer-motion";
import { Activity, Users, ClipboardCheck, BarChart3, MapPin, Zap } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const metrics = [
  { icon: Activity, label: "Active Jobs", value: "1,402", change: "+12%", color: "text-green-400" },
  { icon: Users, label: "Teams Deployed", value: "847", change: "+8%", color: "text-accent" },
  { icon: ClipboardCheck, label: "Inspections Today", value: "236", change: "+15%", color: "text-blue-300" },
  { icon: BarChart3, label: "Quality Score", value: "98.7%", change: "+0.3%", color: "text-emerald-400" },
  { icon: MapPin, label: "Sites Monitored", value: "2,518", change: "+5%", color: "text-purple-400" },
  { icon: Zap, label: "Avg Response", value: "4m 12s", change: "-8%", color: "text-yellow-400" },
];

export default function DashboardMockup() {
  return (
    <section className="py-24 md:py-40 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Operations Intelligence"
          title="Live Operations Dashboard"
          description="Our proprietary command center provides real-time visibility into every aspect of facility operations."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0A1F44] border border-white/10 p-6 md:p-8"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase">
                Live Operations Feed
              </span>
            </div>
            <span className="font-mono text-[11px] text-white/20">
              Last updated: 2 seconds ago
            </span>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="p-4 border border-white/5 bg-white/[0.02] hover:border-accent/20 transition-colors group"
              >
                <metric.icon className="w-4 h-4 text-white/20 mb-3 group-hover:text-accent/60 transition-colors" />
                <div className="font-mono text-2xl font-bold text-white tracking-tight">{metric.value}</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-mono text-[10px] text-white/30 tracking-wider">{metric.label}</span>
                  <span className={`font-mono text-[10px] ${metric.color}`}>{metric.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Activity bar */}
          <div className="mt-6 p-4 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">Service Coverage</span>
            </div>
            <div className="flex gap-1 h-8">
              {Array.from({ length: 48 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.02 }}
                  className="flex-1 bg-accent/20 hover:bg-accent/40 transition-colors origin-bottom"
                  style={{ height: `${30 + Math.random() * 70}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}