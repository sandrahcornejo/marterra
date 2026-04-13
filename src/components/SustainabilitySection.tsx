import { motion } from "framer-motion";
import { TreePine, Waves, Recycle } from "lucide-react";

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-eco">
            Our Commitment
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[var(--font-heading)]">
            Sustainability at <span className="text-gradient-ocean">our core</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Marterra, sustainability is not a tagline — it is the foundation of every solution we design, every system we deploy, and every decision we make. We are committed to protecting the ecosystems that sustain life while enabling industry to operate responsibly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: Waves, title: "Marine Ecosystem Protection", description: "Safeguarding ocean biodiversity through advanced spill prevention and contamination control technologies." },
            { icon: TreePine, title: "Terrestrial Conservation", description: "Protecting land, soil, and groundwater resources from hazardous substance contamination." },
            { icon: Recycle, title: "Circular & Responsible Practices", description: "Promoting waste reduction, material recovery, and responsible industrial practices aligned with ESG standards." },
          ].map((item, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-eco-light/50 border border-eco/10">
              <div className="w-14 h-14 rounded-full bg-gradient-eco flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground font-[var(--font-heading)] mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
