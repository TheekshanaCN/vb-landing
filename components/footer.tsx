import Link from "next/link";
import { Italic } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Changelog", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Community", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 px-4 md:px-6 bg-black border-t border-white/5 selection:bg-white selection:text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/icon.svg"
                  alt="App Icon"
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-white uppercase">
                Idea<span className="text-white/40">Forge</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed font-light">
              Transform messy ideas into structural blueprints. Visual maps, tech
              stacks, and ready-to-build prompts for modern engineers.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                { name: 'Twitter', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'GitHub', href: '#' }
              ].map(social => (
                <Link key={social.name} href={social.href} className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="sm:col-span-1">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6 md:mb-8">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6 md:mb-8">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6 md:mb-8">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6 md:mb-8">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            © 2025 IdeaForge. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
