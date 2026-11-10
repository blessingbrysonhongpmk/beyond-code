import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero',        label: 'Home' },
  { id: 'biography',   label: 'Biography' },
  { id: 'experience',  label: 'Experience' },
  { id: 'education',   label: 'Education' },
  { id: 'research',    label: 'Research' },
  { id: 'creative',    label: 'Beyond Academics' },
  { id: 'contact',     label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const goto = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#D4E4F4] shadow-sm">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12 h-[70px] flex items-center justify-between">

        {/* ── Brand: College Crest Shield + Name ── */}
        <a
          href="#hero"
          onClick={(e) => goto(e, 'hero')}
          className="flex items-center gap-3 group"
          aria-label="St. Xavier's Catholic College of Engineering"
        >
          {/* Institutional Shield Badge */}
          <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm group-hover:bg-accent transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
              <path d="M12 7v8" />
              <path d="M8 11h8" />
            </svg>
          </div>

          <div className="flex flex-col leading-tight border-l border-[#D4E4F4] pl-3">
            <span className="font-serif font-bold text-sm sm:text-base text-navy tracking-tight group-hover:text-accent transition-colors">
              St. Xavier's Catholic
            </span>
            <span className="font-sans text-[11px] font-medium text-body-muted">
              College of Engineering
            </span>
          </div>
        </a>

        {/* ── Center Desktop Links ── */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => goto(e, item.id)}
                className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  active
                    ? 'text-navy font-bold'
                    : 'text-body-muted hover:text-navy hover:bg-[#EDF4FA]/50 rounded-md'
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-navy rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── Contact Me CTA Button & Mobile Toggle ── */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => goto(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-navy text-white hover:bg-accent transition-all shadow-sm hover:shadow-md"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-[#EDF4FA] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-[#D4E4F4] px-6 py-3 space-y-1 shadow-md">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => goto(e, item.id)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  active
                    ? 'text-navy font-bold bg-[#EDF4FA]'
                    : 'text-body-muted hover:text-navy hover:bg-[#EDF4FA]/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#D4E4F4] mt-2">
            <a
              href="#contact"
              onClick={(e) => goto(e, 'contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-navy text-white hover:bg-accent"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
