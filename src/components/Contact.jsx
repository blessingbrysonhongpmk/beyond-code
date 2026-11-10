import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Clock, Building2, Send } from 'lucide-react';
import { SectionHeader } from './Biography';

const TOPICS = [
  {
    title: 'Academic & Research Inquiries',
    desc: 'Collaborative projects, doctoral research discussions, or paper reprints.',
    href: 'mailto:mulli@sxcce.edu.in?subject=Academic%20and%20Research%20Inquiry'
  },
  {
    title: 'Student Mentorship & Guidance',
    desc: 'Undergraduate capstone projects, lab queries, and academic advising.',
    href: 'mailto:mulli@sxcce.edu.in?subject=Student%20Mentorship%20Inquiry'
  },
  {
    title: 'Fine Arts Club Coordination',
    desc: 'Campus cultural initiatives, student competitions, and event planning.',
    href: 'mailto:mulli@sxcce.edu.in?subject=Fine%20Arts%20Club%20Inquiry'
  },
];

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(null);

  const copy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    onShowToast?.(`Copied ${label} to clipboard`);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#D4E4F4]">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <SectionHeader
          label="Institutional Directory"
          title="Contact &amp; Office Information"
          subtitle="Direct faculty communication channels, departmental office details, and inquiry categories."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── Left: Official Directory Details (7 cols) ── */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#F8FAFD] p-6 sm:p-8 rounded-2xl border border-[#D4E4F4] space-y-6 shadow-subtle">

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent block mb-1">
                  Official Academic Directory
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
                  Ms. V. Mulli Mary
                </h3>
                <div className="font-sans text-sm font-semibold text-navy mt-1">
                  Assistant Professor &bull; M.E., (Ph.D.)
                </div>
                <div className="font-sans text-xs sm:text-sm text-body-muted">
                  Department of Artificial Intelligence and Data Science
                </div>
                <div className="font-sans text-xs sm:text-sm text-body-muted">
                  St. Xavier&apos;s Catholic College of Engineering
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-[#D4E4F4] space-y-4">

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#D4E4F4]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block">
                        Institutional Email
                      </span>
                      <a
                        href="mailto:mulli@sxcce.edu.in"
                        className="font-sans text-sm font-semibold text-navy hover:text-accent transition-colors"
                      >
                        mulli@sxcce.edu.in
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copy('mulli@sxcce.edu.in', 'Email')}
                    className="p-2 rounded-lg text-body-muted hover:text-navy hover:bg-[#EDF4FA] transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied === 'Email' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Telephone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#D4E4F4]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block">
                        College Telephone
                      </span>
                      <a
                        href="tel:+914652232560"
                        className="font-sans text-sm font-semibold text-navy hover:text-accent transition-colors"
                      >
                        +91 4652 232560
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copy('+91 4652 232560', 'Phone')}
                    className="p-2 rounded-lg text-body-muted hover:text-navy hover:bg-[#EDF4FA] transition-colors"
                    title="Copy Telephone"
                    aria-label="Copy Telephone"
                  >
                    {copied === 'Phone' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Campus Address */}
                <div className="p-3.5 rounded-xl bg-white border border-[#D4E4F4] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-body-muted block mb-0.5">
                      Campus Office Location
                    </span>
                    <div className="font-sans text-xs sm:text-sm text-body leading-relaxed">
                      Department of AI &amp; DS, St. Xavier&apos;s Catholic College of Engineering<br />
                      Chunkankadai, Nagercoil, Kanyakumari District, Tamil Nadu — 629 003
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Mail Action Button */}
              <div className="pt-2">
                <a
                  href="mailto:mulli@sxcce.edu.in"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 rounded-xl text-sm font-semibold bg-navy text-white hover:bg-accent transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose Institutional Email</span>
                </a>
              </div>

            </div>
          </div>

          {/* ── Right: Pre-Configured Topics (5 cols) ── */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-xl font-bold text-navy">
              Correspondence Channels
            </h4>
            <p className="font-sans text-xs sm:text-sm text-body-muted leading-relaxed">
              Select an inquiry category to automatically pre-fill your email client with subject routing:
            </p>

            <div className="space-y-3">
              {TOPICS.map((topic, idx) => (
                <a
                  key={idx}
                  href={topic.href}
                  className="group block p-4 rounded-xl border border-[#D4E4F4] bg-[#F8FAFD] hover:border-accent hover:bg-white hover:shadow-subtle transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-serif text-base font-bold text-navy group-hover:text-accent transition-colors">
                      {topic.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="font-sans text-xs text-body-muted leading-relaxed">
                    {topic.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* Office Hours Note */}
            <div className="p-4 rounded-xl bg-[#EDF4FA] border border-[#D4E4F4] flex items-start gap-3">
              <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div className="text-xs text-body leading-relaxed">
                <strong className="text-navy font-semibold">Consultation Hours:</strong> Available during official college working hours (Monday to Friday, 9:00 AM – 4:30 PM IST). Prior appointment via email is recommended.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}