import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-maritime.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maritime operations and environmental protection"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/95 via-ocean-deep/80 to-ocean-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco/20 text-eco-light text-sm font-medium border border-eco/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-eco animate-pulse" />
              Innovative Environmental Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-primary-foreground font-[var(--font-heading)]"
          >
            Protecting Oceans.
            <br />
            <span className="text-eco">Safeguarding Land.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl leading-relaxed text-primary-foreground/80 max-w-2xl"
          >
            Marterra delivers innovative, sustainable, and ecological solutions for the prevention and control of contamination caused by hydrocarbons and hazardous substances — across maritime and terrestrial environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl">
              Request Information
              <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Solutions
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
          <span className="text-xs uppercase tracking-widest">Discover</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
