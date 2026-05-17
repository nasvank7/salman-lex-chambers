"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const disclaimerItems = [
  "The user is seeking information about Salman Lex Chambers voluntarily and solely for personal, informational, or professional purposes.",
  "There has been no form of solicitation, advertisement, inducement, invitation, personal communication, or encouragement by Salman Lex Chambers, its partners, associates, or staff to solicit any work or advertise legal services in contravention of the rules prescribed by the Bar Council of India.",
  "The contents of this website are intended only to provide general information relating to the firm, its practice areas, publications, and professional activities. The information available on this website should not be interpreted as legal advice, legal opinion, or legal solicitation under any circumstances.",
  "Accessing this website, transmitting information through it, or communicating with the firm through this website does not create any advocate-client relationship between the user and Salman Lex Chambers.",
  "Any material downloaded, accessed, or obtained from this website is entirely at the user's discretion and volition.",
  "The contents of this website, including but not limited to text, design, logos, graphics, publications, and other materials, constitute the intellectual property of Salman Lex Chambers and are protected under applicable intellectual property laws. Unauthorized use, reproduction, or distribution is strictly prohibited.",
  "This website is maintained in compliance with the applicable rules of the Bar Council of India governing professional standards and conduct for advocates in India.",
];

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimer_accepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("disclaimer_accepted", "true");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#030610]/98 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl bg-[#0A1228] border border-[#283C50]/70 shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Top silver gradient line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8AA4BA]/50 to-transparent" />

            <div className="p-7 sm:p-9">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Salman Lex Chambers"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>

              {/* Firm name */}
              <h2
                className="text-center text-[#E8E2D9] font-medium mb-1 tracking-wide"
                style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif", fontSize: "1.35rem" }}
              >
                SALMAN LEX CHAMBERS
              </h2>
              <p className="text-center text-[#617F98] text-[9px] tracking-[0.3em] uppercase mb-6 font-light">
                Advocates &amp; Legal Consultants
              </p>

              {/* Ornament */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#617F98]/40" />
                <div className="w-1 h-1 bg-[#617F98]/50 rotate-45 flex-shrink-0" />
                <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#617F98]/40" />
              </div>

              <h3 className="text-center text-[#CDD8E0] text-[10px] tracking-[0.28em] uppercase mb-1 font-normal">
                Disclaimer &amp; Confirmation
              </h3>
              <p className="text-center text-[#617F98] text-[10px] font-light mb-5">
                Welcome to Salman Lex Chambers
              </p>

              {/* Scrollable disclaimer */}
              <div className="space-y-3 text-[#7A94A8] text-xs font-light leading-relaxed mb-7 max-h-48 overflow-y-auto pr-1 border border-[#283C50]/50 bg-[#060C1A]/60 p-4">
                <p className="text-[#7A94A8] text-xs">
                  By proceeding further and clicking on the &ldquo;I Agree&rdquo; button below,
                  the user expressly acknowledges and confirms the following:
                </p>
                <ol className="space-y-2.5 list-none">
                  {disclaimerItems.map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="text-[#8AA4BA] font-medium flex-shrink-0">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 pt-4 border-t border-[#283C50]/50 space-y-1">
                  <p className="text-[#8AA4BA] text-[10px] uppercase tracking-widest font-normal">
                    Salman Lex Chambers
                  </p>
                  <p className="text-[#7A94A8] text-[10px]">
                    2nd Floor, Pallikkadan Building, Opposite Seethi Haji Bus Stand,
                    Pandikkad Road, Manjeri, Malappuram — 676121
                  </p>
                  <p className="text-[#7A94A8] text-[10px]">Contact / WhatsApp: +91 7306647233</p>
                  <p className="text-[#7A94A8] text-[10px]">Email: salmanlexchambers@gmail.com</p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={accept}
                className="group relative overflow-hidden w-full py-4 bg-[#1B3D6E] text-[#E8E2D9] text-[10.5px] font-medium tracking-[0.28em] uppercase hover:bg-[#234E87] transition-all duration-500"
              >
                <span className="relative z-10">I Agree &amp; Enter</span>
                <div className="absolute inset-0 bg-[#CDD8E0]/8 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              </button>
            </div>

            {/* Bottom silver line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#617F98]/20 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
