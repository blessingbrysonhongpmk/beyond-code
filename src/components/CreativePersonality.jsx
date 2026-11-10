import React from 'react';
import { SectionHeader } from './Biography';
import { Palette, Sparkles, Heart, CheckCircle2, Music } from 'lucide-react';

export default function CreativePersonality() {
  return (
    <section id="creative" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-[#D4E4F4]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <SectionHeader
          label="Co-Curricular &amp; Culture"
          title="Beyond Academics"
          subtitle="Institutional advisory responsibilities, cultural leadership, and creative expression."
        />

        {/* ── Two-Column Modern Editorial Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">

          {/* Institutional Advisory Role */}
          <div className="p-7 sm:p-8 bg-white rounded-2xl border border-[#D4E4F4] shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#D4E4F4]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Palette className="w-5 h-5 text-accent-light" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Institutional Advisory Role
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EDF4FA] text-navy border border-[#D4E4F4]">
                  SXCCE Fine Arts
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                Faculty Advisor &bull; Fine Arts Club
              </h3>
              <p className="font-sans text-xs sm:text-sm text-accent font-semibold mb-4">
                St. Xavier&apos;s Catholic College of Engineering
              </p>

              <p className="font-sans text-sm text-body leading-relaxed mb-6">
                Serving as the Faculty Advisor for the college Fine Arts Club at St. Xavier&apos;s Catholic College of Engineering. Actively mentors student coordinators across diverse cultural initiatives, supporting student talent development, and fostering an expressive, collaborative campus environment.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4E4F4] space-y-2 text-xs sm:text-sm text-body">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Advisory mentorship for student cultural committees and fests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Fostering campus creative vitality and artistic talent cultivation</span>
              </div>
            </div>
          </div>

          {/* Personal Creative Interest */}
          <div className="p-7 sm:p-8 bg-white rounded-2xl border border-[#D4E4F4] shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#D4E4F4]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Music className="w-5 h-5 text-accent-light" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Creative Expression
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EDF4FA] text-navy border border-[#D4E4F4]">
                  Personal Passion
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                Interest &amp; Talent in Dance
              </h3>
              <p className="font-sans text-xs sm:text-sm text-accent font-semibold mb-4">
                Aesthetic Discipline &amp; Performing Arts
              </p>

              <p className="font-sans text-sm text-body leading-relaxed mb-6">
                Alongside her teaching and research commitments, she has an enduring interest and talent in dancing. This creative discipline brings rhythm, poise, and aesthetic sensitivity into her daily life, complementing her technical engineering scholarship with creative balance and wellness.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4E4F4] space-y-2 text-xs sm:text-sm text-body">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Artistic discipline complementing analytical engineering pedagogy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Appreciation for classical rhythm, poise, and cultural expression</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Modern Editorial Quote Banner ── */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D4E4F4] flex flex-col md:flex-row items-center justify-between gap-6 shadow-subtle">
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-12 bg-accent rounded-full hidden sm:block shrink-0" />
            <div>
              <blockquote className="font-serif italic text-base sm:text-lg text-navy">
                &ldquo;Creativity and analytical inquiry are mutually enriching — bringing artistic sensitivity into engineering classrooms inspires students to think holistically.&rdquo;
              </blockquote>
              <div className="text-xs text-body-muted mt-1 font-sans">
                Academic &amp; Cultural Philosophy &bull; St. Xavier&apos;s Catholic College of Engineering
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}