import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Solutions: ["Spill Prevention", "Contamination Control", "Maritime Response", "Land Response", "Hazardous Substances"],
  Company: ["About Us", "Innovation", "Sustainability", "Industries", "Contact"],
};

export function FooterSection() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-eco flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-[var(--font-heading)]">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight font-[var(--font-heading)]">Marterra</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Innovative, sustainable, and ecological solutions for environmental protection and contamination control.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-foreground/40 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">Mexico City, Mexico</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary-foreground/40 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">+52 (55) 0000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-foreground/40 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">info@marterra.mx</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Marterra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
