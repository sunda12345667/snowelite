import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Upload, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionHeader from "@/components/shared/SectionHeader";
import { toast } from "@/components/ui/use-toast";

const services = [
  "Commercial Cleaning", "Residential Cleaning", "Industrial Cleaning",
  "Janitorial Services", "Facility Management", "Pest Control",
  "Waste Management", "Landscaping", "Technical Maintenance",
  "Post-Construction Cleaning", "HVAC Maintenance", "Security Coordination",
];

const steps = ["Service", "Details", "Contact"];

const propertySizeLabels = {
  small: "Under 500 sqm",
  medium: "500 - 2,000 sqm",
  large: "2,000 - 10,000 sqm",
  enterprise: "10,000+ sqm",
};

const scheduleLabels = {
  daily: "Daily",
  weekly: "Weekly",
  biweekly: "Bi-Weekly",
  monthly: "Monthly",
  "one-time": "One-Time",
};

const budgetLabels = {
  standard: "Standard",
  premium: "Premium",
  enterprise: "Enterprise",
  custom: "Custom / Negotiate",
};

// Business WhatsApp line for incoming service requests.
const WHATSAPP_BUSINESS_NUMBER_LOCAL = "08143203600";

// Nigerian local numbers (0XXXXXXXXXX) convert to WhatsApp/international
// format by dropping the leading 0 and prefixing the 234 country code.
const toWhatsAppInternational = (localNumber) => `234${localNumber.replace(/^0/, "")}`;

function buildWhatsAppMessage(form) {
  const lines = ["Hello, I would like to request a cleaning service.", ""];

  const customerLines = [];
  if (form.name) customerLines.push(`Name: ${form.name}`);
  if (form.phone) customerLines.push(`Phone: ${form.phone}`);
  if (form.email) customerLines.push(`Email: ${form.email}`);
  if (customerLines.length) {
    lines.push("Customer Details", ...customerLines, "");
  }

  const serviceLines = [];
  if (form.service) serviceLines.push(`Service Required: ${form.service}`);
  if (form.propertySize) serviceLines.push(`Property Size: ${propertySizeLabels[form.propertySize] || form.propertySize}`);
  if (form.location) serviceLines.push(`Address: ${form.location}`);
  if (form.schedule) serviceLines.push(`Preferred Schedule: ${scheduleLabels[form.schedule] || form.schedule}`);
  if (form.budget) serviceLines.push(`Budget Range: ${budgetLabels[form.budget] || form.budget}`);
  if (serviceLines.length) {
    lines.push("Service Details", ...serviceLines, "");
  }

  if (form.message) {
    lines.push("Additional Information:", form.message);
  }

  return lines.join("\n").trim();
}

export default function QuoteSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: "", propertySize: "", location: "", schedule: "",
    budget: "", name: "", email: "", phone: "", message: "",
  });

  const update = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = () => {
    const requiredFields = [
      { key: "service", label: "Service Required", step: 0 },
      { key: "name", label: "Full Name", step: 2 },
      { key: "phone", label: "Phone / WhatsApp", step: 2 },
    ];

    const missing = requiredFields.find((f) => !form[f.key]?.trim());
    if (missing) {
      setStep(missing.step);
      toast({
        title: "Missing required field",
        description: `Please provide your ${missing.label} before submitting.`,
        variant: "destructive",
      });
      return;
    }

    const message = buildWhatsAppMessage(form);
    const url = `https://wa.me/${toWhatsAppInternational(WHATSAPP_BUSINESS_NUMBER_LOCAL)}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="quote" className="py-24 md:py-40 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Get Started"
          title="Request a Quote"
          description="Configure your service requirements and our team will provide a tailored proposal within 24 hours."
        />

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 flex items-center justify-center text-xs font-mono border transition-colors ${
                i <= step ? "bg-accent text-accent-foreground border-accent" : "bg-card text-muted-foreground border-border"
              }`}>
                {i + 1}
              </div>
              <span className={`text-xs font-mono tracking-wider hidden sm:inline ${
                i <= step ? "text-accent" : "text-muted-foreground"
              }`}>
                {s}
              </span>
              {i < steps.length - 1 && <div className="w-8 h-px bg-border mx-1" />}
            </div>
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="p-8 border border-border bg-card"
        >
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Service Required</label>
                <Select value={form.service} onValueChange={(v) => update("service", v)}>
                  <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Property Size</label>
                <Select value={form.propertySize} onValueChange={(v) => update("propertySize", v)}>
                  <SelectTrigger><SelectValue placeholder="Select size range" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Under 500 sqm</SelectItem>
                    <SelectItem value="medium">500 - 2,000 sqm</SelectItem>
                    <SelectItem value="large">2,000 - 10,000 sqm</SelectItem>
                    <SelectItem value="enterprise">10,000+ sqm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Location</label>
                <Input placeholder="City, Country" value={form.location} onChange={(e) => update("location", e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Preferred Schedule</label>
                <Select value={form.schedule} onValueChange={(v) => update("schedule", v)}>
                  <SelectTrigger><SelectValue placeholder="Select frequency" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="one-time">One-Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Budget Range</label>
                <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                  <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="custom">Custom / Negotiate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Full Name</label>
                  <Input placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Email</label>
                  <Input type="email" placeholder="email@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Phone / WhatsApp</label>
                <Input placeholder="0814 320 3600" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2 block">Additional Details</label>
                <Textarea placeholder="Tell us about your requirements..." value={form.message} onChange={(e) => update("message", e.target.value)} rows={4} />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="ghost"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="text-muted-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            {step < 2 ? (
              <Button onClick={() => setStep(step + 1)} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Submit Request <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </motion.div>

        {/* WhatsApp */}
        <div className="text-center mt-8">
          <a
            href={`https://wa.me/${toWhatsAppInternational(WHATSAPP_BUSINESS_NUMBER_LOCAL)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Prefer WhatsApp? Chat with us directly
          </a>
        </div>
      </div>
    </section>
  );
}