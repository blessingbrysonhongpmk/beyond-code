import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, GraduationCap, Sparkles, Building2, BookOpen } from 'lucide-react';
import profileImg from '../assets/image.png';

export default function Hero() {
  const scrollToBiography = (e) => {
    e.preventDefault();
    document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#EDF4FA] via-[#F4F8FC] to-white border-b border-[#D4E4F4]">

      {/* ── Background Campus Texture with Soft Atmosphere ── */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/sxcce-campus.png')" }}
        aria-hidden="true"
      />

      {/* Modern Soft Ambient Lights */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#8EBBE5]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[350px] bg-[#183451]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── Left: Modern Typography & Faculty Presentation (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Modern Faculty Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#D4E4F4] text-xs font-medium text-navy mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-navy">Assistant Professor</span>
              <span className="text-[#B9D7F2]">&bull;</span>
              <span className="text-accent font-medium">Department of AI &amp; DS</span>
            </div>

            {/* Faculty Member Name */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-navy tracking-tight leading-[1.05] mb-1">
              Ms. V. Mulli Mary
            </h1>

            {/* Academic Credentials */}
            <div className="font-serif italic text-2xl sm:text-3xl text-accent font-normal mb-6 flex items-center gap-2">
              <span>M.E., (Ph.D.)</span>
            </div>

            {/* Academic Title Block with Modern Glass Card & Left Rule */}
            <div className="w-full bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#D4E4F4] border-l-4 border-l-navy mb-6 shadow-subtle space-y-1">
              <div className="font-sans font-bold text-lg sm:text-xl text-navy">
                Assistant Professor
              </div>
              <div className="font-sans text-sm sm:text-base text-body font-medium">
                Department of Artificial Intelligence and Data Science
              </div>
              <div className="font-sans text-xs sm:text-sm text-body-muted flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>St. Xavier&apos;s Catholic College of Engineering</span>
              </div>
            </div>

            {/* Short Introduction Quote */}
            <p className="font-serif italic text-base sm:text-[17px] text-body leading-relaxed max-w-xl mb-8 font-normal">
              &ldquo;An experienced academic professional with a strong commitment to teaching, research and student mentorship.&rdquo;
            </p>

            {/* Modern Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full">
              <a
                href="#biography"
                onClick={scrollToBiography}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-navy text-white hover:bg-accent hover:shadow-md transition-all group shrink-0"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white text-navy border border-[#D4E4F4] hover:bg-[#EDF4FA] hover:border-accent transition-all shrink-0"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>Contact Office</span>
              </a>

              <div className="hidden xl:block flex-1 h-px bg-[#D4E4F4] ml-2" />
            </div>

            {/* Quick Metrics Ticker */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-6 border-t border-[#D4E4F4] w-full max-w-lg">
              <div>
                <div className="font-serif text-lg sm:text-xl font-bold text-navy">12 Years</div>
                <div className="text-[11px] font-medium text-body-muted">Teaching Career</div>
              </div>
              <div>
                <div className="font-serif text-lg sm:text-xl font-bold text-navy">2024</div>
                <div className="text-[11px] font-medium text-body-muted">Joined SXCCE AI&amp;DS</div>
              </div>
              <div>
                <div className="font-serif text-lg sm:text-xl font-bold text-navy">Ph.D.</div>
                <div className="text-[11px] font-medium text-body-muted">Medical Image AI</div>
              </div>
            </div>

          </motion.div>

          {/* ── Right: Actual Faculty Portrait with Modern Badging (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">

              {/* Decorative handwritten accent slogan */}
              <div className="hidden sm:block absolute -top-5 -right-3 z-20 text-right pointer-events-none">
                <span className="font-serif italic text-xl font-bold text-accent/80 tracking-wide block leading-tight drop-shadow-sm">
                  Learn<br />Research<br />Inspire
                </span>
              </div>

              {/* Portrait Frame with Modern Glass Finish */}
              <div className="relative rounded-2xl overflow-hidden p-2.5 bg-white/95 backdrop-blur-md border border-[#D4E4F4] shadow-elevated">
                <div className="rounded-xl overflow-hidden bg-surface-subtle">
                  <img
                    src={profileImg}
                    alt="Ms. V. Mulli Mary, Assistant Professor"
                    className="w-full h-auto object-contain block aspect-square"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Verified Experience Badge (Modern Ivy Style) */}
              <div className="absolute -bottom-4 -left-3 sm:bottom-3 sm:-left-5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#D4E4F4] shadow-elevated flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center text-white shrink-0 shadow-sm">
                  <GraduationCap className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy leading-none">12 Years Experience</div>
                  <div className="text-[10px] text-body-muted font-medium mt-0.5">Engineering Pedagogy</div>
                </div>
              </div>

              {/* Subtle bottom swoosh accent */}
              <div
                className="absolute -bottom-3 -left-3 -right-3 h-10 bg-navy/5 rounded-2xl -z-10 blur-sm"
                aria-hidden="true"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Modern Architectural Wave Transition into Biography ── */}
      <div className="relative w-full overflow-hidden leading-none -mb-px pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 lg:h-18 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C320,85 640,15 1020,40 C1220,55 1360,25 1440,30 L1440,90 L0,90 Z"
            fill="#B9D7F2"
            opacity="0.35"
          />
          <path
            d="M0,52 C280,88 580,25 960,48 C1180,62 1340,35 1440,42 L1440,90 L0,90 Z"
            fill="#183451"
            opacity="0.15"
          />
          <path
            d="M0,60 C360,95 720,35 1080,60 C1260,72 1380,48 1440,54 L1440,90 L0,90 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

    </section>
  );
}