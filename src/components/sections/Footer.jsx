import { Snowflake, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const links = {
  Services: ["Commercial Cleaning", "Facility Management", "Technical Maintenance", "Pest Control", "Landscaping"],
  Company: ["About Us", "Leadership", "Careers", "News & Updates", "Sustainability"],
  Support: ["Contact Us", "Request a Quote", "FAQs", "Emergency Line", "Client Portal"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "POPIA Compliance"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] border-t border-white/5 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none">
        <Snowflake className="w-[500px] h-[500px] text-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-16 border-b border-white/5">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">Stay Updated</h3>
            <p className="text-white/40 text-sm">Subscribe for industry insights and company updates.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Input
              placeholder="email@company.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 w-full md:w-72"
            />
            <Button className="bg-accent hover:bg-accent/90 text-white px-6 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/40 hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Snowflake className="w-3 h-3 text-accent" />
            </div>
            <span className="font-heading font-bold text-sm text-white/60">
              Snow<span className="text-accent/60">Elite</span>
            </span>
          </div>
          <p className="text-xs text-white/20 text-center">
            © {new Date().getFullYear()} SnowElite Facility Management. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-accent/30 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-white/30" />
          </button>
        </div>
      </div>
    </footer>
  );
}