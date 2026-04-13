import { motion } from "framer-motion";
import { Ship, Warehouse, Fuel, Factory, TreePine, Siren } from "lucide-react";

const industries = [
  { icon: Ship, name: "Maritime Industry" },
  { icon: Warehouse, name: "Ports & Terminals" },
  { icon: Fuel, name: "Oil & Gas" },
  { icon: Factory, name: "Industrial Operations" },
  { icon: TreePine, name: "Environmental Management" },
  { icon: Siren, name: "Emergency Response" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-gradient-ocean text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            Industries Served
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)]">
            Trusted across critical sectors
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg">
            Delivering specialized environmental solutions to the industries where it matters most.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <item.icon size={32} className="text-eco" />
              <span className="text-sm font-medium text-center text-primary-foreground/90">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
