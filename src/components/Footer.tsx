"use client";
import { Scale, ArrowUp } from "lucide-react";

const practiceLinks = [
  "Criminal Law",
  "Family Disputes",
  "Civil Litigation",
  "Corporate & Commercial",
  "Consumer Disputes",
  "Motor Accident Claims",
];

const quickLinks = [
  { label: "About the Firm", href: "#about" },
  { label: "Our Partners", href: "#partners" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040404] border-t border-[#1a1a1a]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <div>
                <p
                  className="text-white font-bold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-playfair-var), serif" }}
                >
                  Salman Lex Chambers
                </p>
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase">
                  Advocates &amp; Consultants
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              A full-service law office at Manjeri, Malappuram District, providing legal
              assistance, litigation support, and consultancy services before courts and
              legal authorities across Kerala.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/20 bg-[#C9A84C]/5">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-xs tracking-widest uppercase">
                Accepting New Clients
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white text-sm font-semibold mb-5 uppercase tracking-widest"
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-[#C9A84C] text-sm transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-widest">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceLinks.map((area) => (
                <li key={area}>
                  <button
                    onClick={() => handleNav("#practice")}
                    className="text-gray-400 hover:text-[#C9A84C] text-sm transition-colors duration-300 text-left"
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Salman Lex Chambers. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-1 hidden sm:block">
            Manjeri, Malappuram District, Kerala &nbsp;|&nbsp; Bar Council of Kerala
          </p>
          <p className="text-gray-700 text-[10px] mt-1 sm:hidden">
            Manjeri, Kerala &nbsp;|&nbsp; Bar Council of Kerala
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-gray-700 text-[10px] sm:text-xs hidden sm:block">
            This website does not constitute legal advice.
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 flex items-center justify-center border border-[#2a2a2a] hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 text-gray-500 hover:text-[#C9A84C] transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
