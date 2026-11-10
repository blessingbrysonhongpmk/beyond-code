import React from 'react';
import { Mail, ArrowUpRight, Activity, Cloud, ShieldCheck, BookOpen, Users, FileText, Globe, Sparkles } from 'lucide-react';
import { SectionHeader } from './Biography';

const RESEARCH_INTERESTS = [
  {
    title: 'Medical Image Processing',
    icon: Activity,
    desc: 'Computational analysis of biomedical images, automated feature extraction, and algorithm development for clinical decision-support.',
    tags: ['Biomedical AI', 'Segmentation', 'Pattern Recognition'],
  },
  {
    title: 'Cloud Computing',
    icon: Cloud,
    desc: 'Scalable distributed computing architectures, cloud resource allocation, virtualization performance, and remote service delivery.',
    tags: ['Distributed Systems', 'Virtualization', 'Resource Scheduling'],
  },
  {
    title: 'Network Security',
    icon: ShieldCheck,
    desc: 'Cryptographic communication protocols, data integrity verification, secure routing, and defensive mechanisms in distributed networks.',
    tags: ['Data Cryptography', 'Protocol Security', 'Network Integrity'],
  },
];

const CONTRIBUTIONS = [
  {
    category: 'Project Guidance',
    icon: Users,
    desc: 'Active mentorship and supervision of undergraduate (UG) capstone engineering projects and postgraduate (PG) research dissertations.',
    highlight: 'UG & PG Dissertations',
  },
  {
    category: 'National Journals',
    icon: FileText,
    desc: 'Authored and contributed technical research papers published in refereed national academic periodicals.',
    highlight: 'Peer-Reviewed Research',
  },
  {
    category: 'International Journals',
    icon: Globe,
    desc: 'Peer-reviewed scholarly research papers published in recognized international scientific journals.',
    highlight: 'Global Indexing',
  },
  {
    category: 'Conferences',
    icon: Sparkles,
    desc: 'Research findings presented and documented in the proceedings of national and international conferences.',
    highlight: 'Conference Proceedings',
  },
  {
    category: 'Books & Chapters',
    icon: BookOpen,
    desc: 'Authored chapters and contributions to engineering textbooks and technical academic reference compendiums.',
    highlight: 'Academic Publications',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-16 sm:py-24 bg-white border-b border-[#D4E4F4]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <SectionHeader
          label="Scholarly Inquiry"
          title="Research &amp; Academic Contributions"
          subtitle="Doctoral specialization, core research interests, and scholarly publications."
        />

        {/* ── Primary Doctoral Specialization Feature Card ── */}
        <div className="mb-14 p-6 sm:p-9 rounded-2xl bg-gradient-to-br from-[#F8FAFD] via-[#EDF4FA]/50 to-white border border-[#D4E4F4] shadow-subtle relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-navy text-white shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
              <span>Doctoral Research &bull; Ph.D. In Progress</span>
            </span>

            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Primary Investigation
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">
            Deep Learning for Medical Image Analysis
          </h3>

          <p className="font-sans text-sm sm:text-base text-body leading-relaxed max-w-4xl mb-8">
            Active doctoral investigation into deep learning architectures and computational biomedical imaging. The research focuses on automated anatomical segmentation, medical feature representation, noise suppression, and diagnostic decision-support algorithms to assist clinical workflows and advance evidence-based patient healthcare.
          </p>

          {/* 4 Pillars with Modern Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#D4E4F4]">
            <div className="p-3.5 rounded-xl bg-white border border-[#D4E4F4]">
              <div className="font-sans font-bold text-xs text-navy mb-0.5">Biomedical Imaging</div>
              <div className="text-[11px] text-body-muted">Feature representation &amp; extraction</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#D4E4F4]">
              <div className="font-sans font-bold text-xs text-navy mb-0.5">Automated Segmentation</div>
              <div className="text-[11px] text-body-muted">Anatomical lesion boundaries</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#D4E4F4]">
              <div className="font-sans font-bold text-xs text-navy mb-0.5">Pattern Recognition</div>
              <div className="text-[11px] text-body-muted">Diagnostic decision-support models</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#D4E4F4]">
              <div className="font-sans font-bold text-xs text-navy mb-0.5">Noise Suppression</div>
              <div className="text-[11px] text-body-muted">Image enhancement algorithms</div>
            </div>
          </div>
        </div>

        {/* ── Core Research Interests ── */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl font-bold text-navy">
              Core Technical Domains
            </h3>
            <span className="text-xs text-accent font-medium">Interdisciplinary Focus</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESEARCH_INTERESTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[#D4E4F4] bg-[#F8FAFD] hover:bg-white hover:border-accent hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center mb-4 shadow-sm">
                      <IconComp className="w-5 h-5 text-accent-light" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-navy mb-2">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-body leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#D4E4F4]">
                    {item.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-navy border border-[#D4E4F4]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Academic Contributions ── */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl font-bold text-navy">
              Academic Contributions &amp; Scholarly Outputs
            </h3>
            <span className="text-xs text-body-muted font-medium">Peer-Reviewed &amp; Mentorship</span>
          </div>

          <div className="border border-[#D4E4F4] rounded-2xl divide-y divide-[#D4E4F4] bg-[#F8FAFD] overflow-hidden">
            {CONTRIBUTIONS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3 sm:w-1/3 shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-serif text-base font-bold text-navy">
                        {item.category}
                      </div>
                      <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
                        {item.highlight}
                      </span>
                    </div>
                  </div>

                  <span className="font-sans text-xs sm:text-sm text-body sm:w-2/3 leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Research Inquiries CTA */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#EDF4FA]/60 border border-[#D4E4F4]">
            <span className="text-xs text-body font-medium">
              Scholarly reprints, project discussions, and academic collaborations are welcomed.
            </span>
            <a
              href="mailto:mulli@sxcce.edu.in?subject=Research%20Collaboration%20Inquiry"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-navy text-white hover:bg-accent transition-colors shadow-sm shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Inquire for Reprints</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}