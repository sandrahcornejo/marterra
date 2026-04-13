import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Anchor, Mountain, FlaskConical, Cpu } from "lucide-react";

const solutions = [
  {
    icon: Droplets,
    title: "Spill Prevention Solutions",
    description: "Comprehensive prevention systems designed to minimize the risk of hydrocarbon spills in maritime and industrial settings.",
  },
  {
    icon: ShieldCheck,
    title: "Contamination Control Systems",
    description: "Advanced containment and control technologies to manage contamination events with precision and speed.",
  },
  {
    icon: Anchor,
    title: "Maritime Environmental Response",
    description: "Specialized equipment and protocols for rapid response to maritime contamination incidents across open water and coastal areas.",
  },
  {
    icon: Mountain,
    title: "Land Contamination Response",
    description: "Effective terrestrial response solutions to address contamination from hazardous substances and hydrocarbon-related events.",
  },
  {
    icon: FlaskConical,
    title: "Hazardous Substance Management",
    description: "End-to-end support for the safe handling, containment, and disposal of hazardous materials in complex operational environments.",
  },
  {
    icon: Cpu,
    title: "Specialized Environmental Technology",
    description: "Innovative, technology-driven solutions that leverage the latest advances in environmental science and engineering.",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean">
            Solutions & Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[var(--font-heading)]">
            Comprehensive environmental
            <br className="hidden sm:block" />
            <span className="text-gradient-ocean">protection solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From prevention to rapid response, our integrated solutions address every phase of environmental contamination management.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-lg hover:border-ocean/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-ocean flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground font-[var(--font-heading)] mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
