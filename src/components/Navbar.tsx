import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Marterra", href: "#why" },
  { label: "Industries", href: "#industries" },
  { label: "Innovation", href: "#innovation" },
  { label: "Sustainability", href: "#sustainability" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-ocean flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm font-[var(--font-heading)]">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground font-[var(--font-heading)]">
              Marterra
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="default" size="default">
              Request Information
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" size="default" className="w-full mt-4">
                Request Information
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
