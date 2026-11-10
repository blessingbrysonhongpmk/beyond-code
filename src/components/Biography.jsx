import React from 'react';
import {
  GraduationCap,
  Building2,
  Atom,
  ShieldCheck,
  BookOpen,
  Award,
  Compass,
  CheckCircle2
} from 'lucide-react';

export function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-12 pb-5 border-b border-[#D4E4F4]">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF4FA] border border-[#D4E4F4] text-xs font-semibold text-accent mb-3 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span>{label}</span>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-navy tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-sm sm:text-base text-body-muted mt-2 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Biography() {
  return (
    <section id="biography" className="relative py-20 sm:py-24 bg-white border-b border-[#D4E4F4] overflow-hidden">

      {/* ── Subtle Background Architectural Watermark & Flourish (As seen in Reference) ── */}
      <div
        className="absolute bottom-0 right-0 w-[420px] h-[260px] opacity-[0.06] pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 240" fill="none" stroke="#183451" strokeWidth="1.2" className="w-full h-full">
          {/* Architectural facade wireframe */}
          <rect x="20" y="40" width="360" height="190" />
          <line x1="20" y1="90" x2="380" y2="90" />
          <line x1="20" y1="140" x2="380" y2="140" />
          <line x1="20" y1="190" x2="380" y2="190" />
          {/* Columns */}
          <line x1="65" y1="40" x2="65" y2="230" />
          <line x1="110" y1="40" x2="110" y2="230" />
          <line x1="155" y1="40" x2="155" y2="230" />
          <line x1="200" y1="40" x2="200" y2="230" />
          <line x1="245" y1="40" x2="245" y2="230" />
          <line x1="290" y1="40" x2="290" y2="230" />
          <line x1="335" y1="40" x2="335" y2="230" />
          {/* Pediment & roof */}
          <polygon points="20,40 200,5 380,40" />
          <circle cx="200" cy="25" r="10" />
        </svg>
      </div>

      {/* ── Botanical Flourish on Left (Subtle decorative accent from reference) ── */}
      <div
        className="absolute bottom-4 left-2 w-32 h-32 opacity-10 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="#416B96" strokeWidth="1.2">
          <path d="M10 90 Q30 50 60 40 T90 20" />
          <circle cx="60" cy="40" r="6" fill="#EDF4FA" />
          <circle cx="75" cy="30" r="5" fill="#EDF4FA" />
          <circle cx="90" cy="20" r="7" fill="#EDF4FA" />
          <path d="M25 70 Q45 65 50 50" />
          <circle cx="50" cy="50" r="5" fill="#EDF4FA" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Section Header with Leading Line ── */}
        <div className="pb-8 border-b border-[#D4E4F4]">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-accent">
              Academic Biography
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-navy tracking-tight leading-[1.15]">
                About Me
              </h2>
              <p className="font-sans text-sm sm:text-base text-body-muted mt-2 max-w-2xl leading-relaxed">
                Academic foundations, tenured teaching career, and ongoing doctoral research in medical image analysis.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-body-muted pb-1 shrink-0 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>Faculty in Service &bull; SXCCE AI&amp;DS</span>
            </div>
          </div>
        </div>

        {/* ── Sophisticated Editorial Layout (Left vs Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-10 sm:pt-12">

          {/* ── LEFT SIDE: Section Intro, Statement & Compact Information Area (5 cols) ── */}
          <div className="lg:col-span-5 space-y-7 lg:pr-4">

            {/* Prominent Academic Statement */}
            <div className="space-y-3">
              <blockquote className="font-serif text-xl sm:text-2xl text-navy italic leading-snug border-l-4 border-accent pl-4">
                &ldquo;Dedicated to advancing engineering education, guiding student innovation, and pursuing research in computational medical image analysis.&rdquo;
              </blockquote>
              <p className="text-xs text-body-muted font-sans pl-5 leading-normal">
                Ms. V. Mulli Mary, M.E., (Ph.D.) &bull; Assistant Professor
              </p>
            </div>

            {/* Compact Professional Information Area (Clean Academic Ledger) */}
            <div className="bg-[#F8FAFD] rounded-xl p-5 sm:p-6 border border-[#D4E4F4] space-y-4 shadow-subtle">
              <div className="flex items-center justify-between border-b border-[#D4E4F4] pb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                  Faculty Dossier
                </span>
                <span className="text-[11px] font-medium text-accent bg-[#EDF4FA] px-2 py-0.5 rounded">
                  SXCCE Faculty
                </span>
              </div>

              {/* 2-Column Compact Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                    Current Designation
                  </span>
                  <span className="font-semibold text-navy text-[13px] block">
                    Assistant Professor
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                    Present Institution
                  </span>
                  <span className="font-semibold text-navy text-[13px] block">
                    SXCCE (Joined 2024)
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                    Department
                  </span>
                  <span className="font-semibold text-navy text-[13px] block">
                    AI &amp; Data Science
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                    Appointment
                  </span>
                  <span className="font-semibold text-navy text-[13px] block">
                    Joined in 2024
                  </span>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-[#D4E4F4]/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                    Previous Institution &amp; Department
                  </span>
                  <span className="font-semibold text-navy text-[13px] block">
                    Arunachala College &bull; CSE Department
                  </span>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-[#D4E4F4]/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                    Total Teaching Experience
                  </span>
                  <span className="font-semibold text-navy text-[13px] block">
                    12 Years (10 yrs at Arunachala College + SXCCE Faculty)
                  </span>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-[#D4E4F4]/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                    Doctoral Research
                  </span>
                  <span className="font-semibold text-navy text-[13px] block">
                    Deep Learning for Medical Image Analysis (Pursuing)
                  </span>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-[#D4E4F4]/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                    Postgraduate Project
                  </span>
                  <span className="font-semibold text-navy text-[13px] block">
                    Cloud Computing and Network Security
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT SIDE: Complete Biography Narrative (7 cols) ── */}
          <div className="lg:col-span-7 space-y-6 text-[#273444] text-[16px] sm:text-[17px] leading-[1.75] font-normal lg:pl-6 lg:border-l lg:border-[#D4E4F4]">

            {/* Paragraph 1 */}
            <p>
              Ms. V. Mulli Mary is a graduate in Computer Science and Engineering. She received her Bachelor&apos;s and Master&apos;s degrees in Computer Science and Engineering. Her postgraduate project focused on Cloud Computing and Network Security.
            </p>

            {/* Paragraph 2 */}
            <p>
              With 12 years of comprehensive teaching experience in higher technical education, she dedicated 10 years of service to Arunachala College in the Computer Science and Engineering department. In 2024, she joined St. Xavier&apos;s Catholic College of Engineering, where she instructs undergraduate students in the Artificial Intelligence and Data Science department.
            </p>

            {/* Paragraph 3 */}
            <p>
              She is pursuing her Ph.D. in <strong className="text-navy font-semibold">Deep Learning for Medical Image Analysis</strong>.
            </p>

            {/* Paragraph 4 */}
            <p>
              She has guided various undergraduate and postgraduate student projects and contributed technical research papers to national and international journals, conferences and books.
            </p>

            {/* ── Section 5: Subtle High-Density Academic Summary Anchor ── */}
            <div className="pt-8 mt-6 border-t border-[#D4E4F4]">
              <div className="text-[11px] font-bold uppercase tracking-widest text-navy mb-3">
                Key Professional Anchors
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. 12 Years Teaching */}
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F8FAFD] border border-[#D4E4F4] transition-colors hover:border-accent">
                  <div className="w-9 h-9 rounded-md bg-navy text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif text-base font-bold text-navy leading-none mb-1">
                      12 Years
                    </div>
                    <div className="text-xs text-body-muted font-medium leading-tight">
                      Total Teaching Experience
                    </div>
                  </div>
                </div>

                {/* 2. Current Department SXCCE */}
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F8FAFD] border border-[#D4E4F4] transition-colors hover:border-accent">
                  <div className="w-9 h-9 rounded-md bg-navy text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif text-base font-bold text-navy leading-none mb-1">
                      AI &amp; Data Science
                    </div>
                    <div className="text-xs text-body-muted font-medium leading-tight">
                      Current Department &bull; SXCCE (Joined 2024)
                    </div>
                  </div>
                </div>

                {/* 3. Research Focus */}
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F8FAFD] border border-[#D4E4F4] transition-colors hover:border-accent">
                  <div className="w-9 h-9 rounded-md bg-navy text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Atom className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif text-base font-bold text-navy leading-none mb-1">
                      Research Focus
                    </div>
                    <div className="text-xs text-body-muted font-medium leading-tight">
                      Deep Learning &amp; Medical Image Analysis
                    </div>
                  </div>
                </div>

                {/* 4. PG Specialization */}
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F8FAFD] border border-[#D4E4F4] transition-colors hover:border-accent">
                  <div className="w-9 h-9 rounded-md bg-navy text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif text-base font-bold text-navy leading-none mb-1">
                      Cloud &amp; Security
                    </div>
                    <div className="text-xs text-body-muted font-medium leading-tight">
                      Postgraduate Research Specialization
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}