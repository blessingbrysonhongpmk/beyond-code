import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import CreativePersonality from './components/CreativePersonality';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTIONS = [
  'hero',
  'biography',
  'experience',
  'education',
  'research',
  'creative',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [toast, setToast] = useState(null);

  /* ── ScrollSpy ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 160;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Toast notification ── */
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-body selection:bg-accent-light selection:text-navy">

      {/* Floating toast notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-navy text-white text-xs font-medium px-4 py-2.5 rounded shadow-elevated"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
          <span>{toast}</span>
        </div>
      )}

      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        <Hero />
        <Biography />
        <Experience />
        <Education />
        <Research />
        <CreativePersonality />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />
    </div>
  );
}
