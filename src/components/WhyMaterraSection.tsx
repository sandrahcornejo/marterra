import { motion } from "framer-motion";
import { Lightbulb, Leaf, GraduationCap, Zap, HeartHandshake, Settings } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation-Driven", description: "Continuously advancing our solutions through research and emerging technologies." },
  { icon: Leaf, title: "Sustainable Approach", description: "Ecological principles embedded in every solution we design and deploy." },
  { icon: GraduationCap, title: "Technical Expertise", description: "Deep specialized knowledge across environmental science and industrial operations." },
  { icon: Zap, title: "Rapid Response", description: "24/7 operational readiness for fast and reliable contamination response." },
  { icon: HeartHandshake, title: "Safety & Responsibility", description: "Uncompromising commitment to environmental safety and regulatory compliance." },
  { icon: Settings, title: "Tailored Solutions", description: "Customized approaches for complex, multi-variable operational contexts." },
];

export function WhyMaterraSection() {
  return (
    <section id="why" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean">
            Why Marterra
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[var(--font-heading)]">
            The Marterra <span className="text-gradient-ocean">advantage</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We combine deep expertise with innovative thinking to deliver environmental solutions that set the industry standard.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-eco/10 flex items-center justify-center mt-1">
                <item.icon className="text-eco" size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground font-[var(--font-heading)] mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
