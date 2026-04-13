import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="section-padding bg-gradient-ocean relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-eco blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-ocean-light blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-[var(--font-heading)]">
            Ready to protect what matters?
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/75 max-w-2xl mx-auto">
            Contact us for technical advice, tailored solutions, or to learn how Marterra can support your environmental protection needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Mail size={18} />
              Contact Us
              <ArrowRight size={18} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Request a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
