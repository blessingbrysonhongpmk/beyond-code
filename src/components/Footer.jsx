import React from 'react';
import { ArrowUp } from 'lucide-react';

const FOOTER_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#biography', label: 'Biography' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#research', label: 'Research' },
  { href: '#creative', label: 'Beyond Academics' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white pt-14 pb-10 border-t border-navy-700">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">

          {/* Left: Faculty & Institutional Identification (6 cols) */}
          <div className="md:col-span-6 space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ms. V. Mulli Mary
            </h3>
            <p className="font-serif italic text-sm text-accent-light">
              M.E., (Ph.D.) &bull; Assistant Professor
            </p>
            <p className="font-sans text-xs text-slate-300 leading-relaxed pt-1 max-w-md">
              Department of Artificial Intelligence and Data Science<br />
              St. Xavier's Catholic College of Engineering<br />
              Chunkankadai, Nagercoil, Kanyakumari District, Tamil Nadu — 629 003
            </p>
          </div>

          {/* Center: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-light block mb-2">
              Sections
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {FOOTER_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Remaining Navigation & Quick Contacts (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-light block mb-2">
              Academic Profile
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {FOOTER_LINKS.slice(4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 text-xs text-slate-400 space-y-0.5">
              <div>Email: <a href="mailto:mulli@sxcce.edu.in" className="text-slate-300 hover:text-white">mulli@sxcce.edu.in</a></div>
              <div>Tel: <a href="tel:+914652232560" className="text-slate-300 hover:text-white">+91 4652 232560</a></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Ms. V. Mulli Mary. Academic Portfolio.
          </div>

          <div className="flex items-center gap-6">
            <span>St. Xavier's Catholic College of Engineering</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white text-xs transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
