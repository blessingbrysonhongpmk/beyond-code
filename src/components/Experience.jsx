import React from 'react';
import { SectionHeader } from './Biography';
import { Building2, Calendar, Award, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

const EXPERIENCES = [
  {
    order: '01',
    institution: 'Arunachala College',
    department: 'Department of Computer Science and Engineering (CSE)',
    role: 'Faculty Member',
    tenure: '10 Years of Teaching Service',
    type: 'Previous Faculty Tenure',
    status: 'Completed 10-Year Service',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    description:
      'Served as a faculty member in the Department of Computer Science and Engineering across a 10-year teaching tenure. Instructed undergraduate engineering students, coordinated laboratory curricula, and mentored student academic progress.',
    highlights: [
      '10 years of dedicated teaching experience in the CSE department',
      'Undergraduate engineering curriculum instruction and laboratory coordination',
      'Academic advising and foundational student project supervision',
    ],
    skills: ['Computer Science', 'CSE Curriculum', 'Laboratory Instruction', 'Project Mentorship'],
  },
  {
    order: '02',
    institution: "St. Xavier's Catholic College of Engineering",
    department: 'Department of Artificial Intelligence and Data Science (AI&DS)',
    role: 'Assistant Professor',
    tenure: 'Joined in 2024 &bull; Active Faculty',
    type: 'Current Faculty Appointment',
    status: 'Joined 2024 (Active)',
    badgeColor: 'bg-[#EDF4FA] text-navy border-[#B9D7F2]',
    description:
      'Joined in 2024 as Assistant Professor in the Department of Artificial Intelligence and Data Science. Actively engaged in undergraduate teaching, advising capstone student projects, and continuing doctoral research in Medical Image Analysis.',
    highlights: [
      'Appointed as Assistant Professor in 2024',
      'Undergraduate instruction across AI, data science, and core computing subjects',
      'Capstone project mentorship and active doctoral inquiry',
    ],
    skills: ['Artificial Intelligence', 'Data Science', 'Deep Learning', 'Undergraduate Pedagogy'],
    isCurrent: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-white border-b border-[#D4E4F4]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <SectionHeader
          label="Career Progression"
          title="Professional Experience"
          subtitle="Chronological teaching appointments, faculty tenures, and departmental leadership."
        />

        {/* ── Prominent Modern Metric Banner (Separate from Timeline) ── */}
        <div className="mb-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#EDF4FA] via-white to-[#EDF4FA] border border-[#D4E4F4] shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-7 h-7 text-accent-light" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-navy leading-none">
                  12 Years
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-navy text-white">
                  Cumulative Experience
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-body-muted mt-1 leading-normal">
                Total Teaching Experience across Accredited Engineering Institutions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-navy font-medium bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-[#D4E4F4]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>10 Years at Arunachala College &bull; Joined SXCCE in 2024</span>
          </div>
        </div>

        {/* ── Modern Connected Academic Timeline ── */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#D4E4F4] space-y-10 sm:space-y-12 ml-3 sm:ml-6">
          {EXPERIENCES.map((exp) => (
            <div key={exp.order} className="relative group">

              {/* Timeline Bullet Node with Modern Ring Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full border-4 ${exp.isCurrent
                    ? 'border-navy bg-white shadow-sm ring-4 ring-accent/20'
                    : 'border-accent bg-white shadow-sm'
                  }`}
              >
                {exp.isCurrent && (
                  <span className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                )}
              </div>

              {/* Card Container with Modern Hover Lift */}
              <div className="bg-[#F8FAFD] p-6 sm:p-8 rounded-2xl border border-[#D4E4F4] hover:border-accent hover:shadow-elevated transition-all duration-300">

                {/* Card Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-[#D4E4F4]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-accent tracking-wider uppercase">
                      {exp.order} &bull; {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${exp.badgeColor} flex items-center gap-1.5`}
                    >
                      {exp.isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                      <span dangerouslySetInnerHTML={{ __html: exp.tenure }} />
                    </span>
                  </div>
                </div>

                {/* Institution & Role Details */}
                <div className="mb-4">
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-navy mb-1 group-hover:text-accent transition-colors">
                    {exp.institution}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm font-semibold text-body">
                    <span className="text-navy">{exp.role}</span>
                    <span className="text-[#B9D7F2]">&bull;</span>
                    <span className="text-accent font-medium">{exp.department}</span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="font-sans text-sm sm:text-[15px] text-body leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements & Highlights */}
                <div className="space-y-2 text-xs sm:text-sm text-body pt-4 border-t border-[#D4E4F4]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-body-muted block mb-2">
                    Core Faculty Responsibilities
                  </span>
                  {exp.highlights.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Modern Competency Badges */}
                <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t border-[#D4E4F4]">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-[#D4E4F4] text-navy"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}