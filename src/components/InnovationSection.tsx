import { motion } from "framer-motion";
import { Radar, Microscope, Satellite, Workflow } from "lucide-react";

const capabilities = [
  { icon: Radar, title: "Real-Time Monitoring", description: "Advanced sensing and monitoring systems for early detection of contamination events." },
  { icon: Microscope, title: "Environmental Analysis", description: "State-of-the-art analytical capabilities for precise contamination assessment." },
  { icon: Satellite, title: "Remote Sensing", description: "Satellite and drone-based technologies for large-scale environmental surveillance." },
  { icon: Workflow, title: "Integrated Systems", description: "Seamlessly connected platforms that unify prevention, detection, and response." },
];

export function InnovationSection() {
  return (
    <section id="innovation" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-ocean">
              Technology & Innovation
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground font-[var(--font-heading)]">
              Advancing environmental
              <br />
              <span className="text-gradient-ocean">protection technology</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Marterra invests in the development and deployment of next-generation technologies, leveraging innovation to deliver faster, more effective, and more sustainable environmental solutions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our technology platform integrates advanced detection, monitoring, and response systems into a unified framework — enabling proactive environmental management at industrial scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {capabilities.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center mb-4">
                  <item.icon className="text-ocean" size={20} />
                </div>
                <h3 className="text-sm font-bold text-foreground font-[var(--font-heading)] mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
