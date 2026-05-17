"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useConsultModal } from "@/src/context/ConsultModalContext";

const navLinks = [
  { href: "#about",    label: "About" },
  { href: "#partners", label: "Partners" },
  { href: "#practice", label: "Practice" },
  { href: "#why-us",   label: "Philosophy" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useConsultModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#030610]/96 backdrop-blur-2xl border-b border-[#435C72]/20 shadow-[0_8px_48px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[4.5rem]">

            {/* Logo */}
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3.5 group"
            >
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/SALMANLEXCHAMBERS.png"
                  alt="Salman Lex Chambers"
                  fill
                  className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="hidden sm:block">
                <p
                  className="text-[#E8E2D9] text-sm font-medium leading-tight tracking-wide"
                  style={{ fontFamily: "var(--font-cormorant-var), serif" }}
                >
                  Salman Lex Chambers
                </p>
                <p className="text-[#617F98] text-[9px] tracking-[0.25em] uppercase mt-0.5">
                  Advocates &amp; Legal Consultants
                </p>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-[10.5px] tracking-[0.2em] uppercase text-[#7A94A8] hover:text-[#CDD8E0] transition-colors duration-500 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#8AA4BA]/60 group-hover:w-full transition-all duration-500" />
                </button>
              ))}

              <button
                onClick={openModal}
                className="ml-3 px-5 py-2 border border-[#435C72]/50 text-[#8AA4BA] text-[10.5px] tracking-[0.2em] uppercase hover:border-[#8AA4BA]/70 hover:text-[#CDD8E0] hover:bg-[#8AA4BA]/5 transition-all duration-500"
              >
                Consult
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#7A94A8] hover:text-[#CDD8E0] transition-colors duration-300"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#030610] flex flex-col"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between h-[4.5rem] px-6 border-b border-[#283C50]/60">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Salman Lex Chambers" width={32} height={32} className="object-contain" />
                <span
                  className="text-[#E8E2D9] text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-cormorant-var), serif" }}
                >
                  Salman Lex Chambers
                </span>
              </div>
              <button onClick={() => setMenuOpen(false)} className="text-[#617F98] hover:text-[#E8E2D9] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile links */}
            <div className="flex flex-col flex-1 justify-center px-8 space-y-0">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between py-5 border-b border-[#283C50]/50 group"
                >
                  <span
                    className="text-[2.2rem] font-light italic text-[#E8E2D9] group-hover:text-[#8AA4BA] transition-colors duration-400 leading-none"
                    style={{ fontFamily: "var(--font-cormorant-var), serif" }}
                  >
                    {link.label}
                  </span>
                  <span className="text-[#283C50] text-xs tracking-widest group-hover:text-[#617F98] transition-colors">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onClick={() => { setMenuOpen(false); openModal(); }}
                className="mt-9 w-full py-4 border border-[#435C72]/50 text-[#8AA4BA] text-[11px] tracking-[0.25em] uppercase hover:border-[#8AA4BA]/60 hover:text-[#CDD8E0] transition-all duration-400"
              >
                Book a Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
