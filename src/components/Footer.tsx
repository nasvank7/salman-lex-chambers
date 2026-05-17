"use client";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

const practiceLinks = [
  "Criminal Law",
  "Family Disputes",
  "Civil Litigation",
  "Corporate & Commercial",
  "Consumer Disputes",
  "Motor Accident Claims",
];

const quickLinks = [
  { label: "About the Firm",  href: "#about" },
  { label: "Our Partners",    href: "#partners" },
  { label: "Practice Areas",  href: "#practice" },
  { label: "Why Choose Us",   href: "#why-us" },
  { label: "Contact Us",      href: "#contact" },
];

const opportunityLinks = [
  { label: "Career @ Salman Lex Chambers",     href: "mailto:salmanlexchambers@gmail.com?subject=Career%20Application%20%E2%80%94%20Salman%20Lex%20Chambers" },
  { label: "Internship @ Salman Lex Chambers", href: "mailto:salmanlexchambers@gmail.com?subject=Internship%20Application%20%E2%80%94%20Salman%20Lex%20Chambers" },
];

export default function Footer() {
  const scrollTop  = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNav  = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#030610] border-t border-[#1A2C40]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">

        {/* Top silver rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#617F98]/20 to-transparent mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-6">
              <Image
                src="/logo.png"
                alt="Salman Lex Chambers"
                width={38}
                height={38}
                className="object-contain opacity-70"
              />
              <div>
                <p
                  className="text-[#CDD8E0] font-medium text-base leading-tight"
                  style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif" }}
                >
                  Salman Lex Chambers
                </p>
                <p className="text-[#617F98] text-[9px] tracking-[0.22em] uppercase mt-0.5">
                  Advocates &amp; Legal  Consultants
                </p>
              </div>
            </div>

            <p className="text-[#617F98] text-xs font-light leading-relaxed mb-3 max-w-xs">
              A full-service law office at Manjeri, Malappuram District, providing legal
              assistance, litigation support, and consultancy services across Kerala.
            </p>
            <p className="text-[#617F98] text-[10px] font-light mb-7 max-w-xs leading-relaxed">
              2nd Floor, Pallikkadan Building, Opposite Seethi Haji Bus Stand,
              Pandikkad Road, Manjeri — 676121
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-[#283C50]/50 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#617F98] animate-pulse" />
          
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/adv.salman_pallikkadan?igsh=NTU4ajFoMjdhcmQ1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-[#283C50]/60 hover:border-[#617F98]/50 text-[#617F98] hover:text-[#8AA4BA] transition-all duration-400"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                  </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#CDD8E0] text-[9px] tracking-[0.32em] uppercase mb-6 font-normal">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-[#617F98] hover:text-[#8AA4BA] text-xs font-light transition-colors duration-400 text-left leading-relaxed"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-[#CDD8E0] text-[9px] tracking-[0.32em] uppercase mb-6 font-normal">
              Practice Areas
            </h4>
            <ul className="space-y-3.5">
              {practiceLinks.map((area) => (
                <li key={area}>
                  <button
                    onClick={() => handleNav("#practice")}
                    className="text-[#617F98] hover:text-[#8AA4BA] text-xs font-light transition-colors duration-400 text-left leading-relaxed"
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h4 className="text-[#CDD8E0] text-[9px] tracking-[0.32em] uppercase mb-6 font-normal">
              Opportunities
            </h4>
            <ul className="space-y-3.5">
              {opportunityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#617F98] hover:text-[#8AA4BA] text-xs font-light transition-colors duration-400 leading-relaxed block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A2C40]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-[#617F98] text-[10px] font-light">
              &copy; {new Date().getFullYear()} Salman Lex Chambers. All rights reserved.
            </p>
            <p className="text-[#617F98] text-[10px] font-light mt-0.5 hidden sm:block">
              Manjeri, Malappuram District, Kerala &nbsp;|&nbsp; Bar Council of Kerala
            </p>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-[#617F98] text-[10px] font-light hidden sm:block">
              This website does not constitute legal advice.
            </p>
            <button
              onClick={scrollTop}
              className="w-8 h-8 flex items-center justify-center border border-[#1A2C40]/70 hover:border-[#617F98]/40 hover:bg-[#617F98]/8 text-[#617F98] hover:text-[#617F98] transition-all duration-400"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
