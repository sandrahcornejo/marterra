import { motion } from "framer-motion";
import { Shield, Globe, Award } from "lucide-react";

const stats = [
  { icon: Shield, value: "100%", label: "Commitment to Safety" },
  { icon: Globe, value: "24/7", label: "Operational Readiness" },
  { icon: Award, value: "ISO", label: "Certified Standards" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-ocean">
              About Marterra
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground font-[var(--font-heading)]">
              Engineering a cleaner,
              <br />
              <span className="text-gradient-ocean">safer future</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Marterra is a Mexican company specialized in innovative, sustainable, and ecological solutions for the prevention and control of contamination caused by hydrocarbons and hazardous substances across maritime and terrestrial environments.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With deep technical expertise and an unwavering commitment to environmental stewardship, we partner with industries to ensure operational continuity while protecting the ecosystems that sustain us all. Our forward-looking approach combines proven methodology with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center">
                  <stat.icon className="text-ocean" size={26} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-[var(--font-heading)]">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
