import React from 'react';
import { SectionHeader } from './Biography';
import { GraduationCap, Award, BookOpen, School, CheckCircle2 } from 'lucide-react';

const QUALIFICATIONS = [
  {
    level: 'Doctoral Studies',
    degree: 'Doctor of Philosophy (Ph.D.)',
    status: 'Pursuing (Doctoral Scholar)',
    statusType: 'active',
    field: 'Deep Learning for Medical Image Analysis',
    institution: 'Doctoral Research Scholar',
    icon: GraduationCap,
    details: 'Active doctoral research investigating deep learning architectures for biomedical image segmentation, pattern analysis, and clinical diagnostic assistance.',
  },
  {
    level: 'Postgraduate Degree',
    degree: 'Master of Engineering (M.E.)',
    status: 'Conferred &bull; First Class',
    statusType: 'conferred',
    field: 'Computer Science and Engineering',
    institution: 'Arunachala College &bull; CSE Department',
    icon: Award,
    details: 'Completed postgraduate engineering curriculum with a research project focused on Cloud Computing architectures and Network Security protocols.',
  },
  {
    level: 'Undergraduate Degree',
    degree: 'Bachelor of Engineering (B.E.)',
    status: 'Conferred &bull; Engineering Degree',
    statusType: 'conferred',
    field: 'Computer Science and Engineering',
    institution: 'Accredited Engineering Institution',
    icon: BookOpen,
    details: 'Rigorous undergraduate engineering foundations covering data structures, algorithms, operating systems, database management systems, and software engineering.',
  },
  {
    level: 'Higher Studies',
    degree: 'Higher Secondary Education',
    status: 'Completed Foundations',
    statusType: 'completed',
    field: 'Pre-Engineering Academic Foundations',
    institution: 'VKP, Kanyakumari District, Tamil Nadu',
    icon: School,
    details: 'Completed foundational pre-university academic coursework in science and mathematics in Kanyakumari District.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-[#D4E4F4]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <SectionHeader
          label="Academic Credentials"
          title="Education &amp; Qualifications"
          subtitle="Chronological degree conferrals, doctoral research pursuits, and technical foundations."
        />

        {/* ── Modern Ivy-Style Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {QUALIFICATIONS.map((item, idx) => {
            const IconComponent = item.icon;
            const isActive = item.statusType === 'active';

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D4E4F4] hover:border-accent hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top Level & Status Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#D4E4F4]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {item.level}
                      </span>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${isActive
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-[#EDF4FA] text-navy border-[#D4E4F4]'
                        }`}
                      dangerouslySetInnerHTML={{ __html: item.status }}
                    />
                  </div>

                  {/* Degree Name & Specialization */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-1.5">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-semibold text-accent mb-3">
                    {item.field}
                  </div>

                  {/* Narrative details */}
                  <p className="font-sans text-xs sm:text-sm text-body leading-relaxed mb-5">
                    {item.details}
                  </p>
                </div>

                {/* Institution footer */}
                <div className="pt-3 border-t border-[#D4E4F4] flex items-center justify-between text-xs text-body-muted">
                  <span className="font-medium">Awarding Institution</span>
                  <span className="font-semibold text-navy">{item.institution}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}