"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#partners", label: "Our Partners" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#C9A84C]/20 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-all duration-300">
                <Scale className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <div className="hidden sm:block">
                <p
                  className="text-white font-semibold text-sm leading-tight"
                  style={{ fontFamily: "var(--font-playfair-var), serif" }}
                >
                  Salman Lex
                </p>
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase">
                  Chambers
                </p>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-[#C9A84C] text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="ml-4 px-6 py-2.5 bg-[#C9A84C] text-black text-sm font-semibold tracking-wide rounded-sm hover:bg-[#E8D5A3] transition-all duration-300"
              >
                Consult Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#C9A84C] transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-[#C9A84C]" />
                <span
                  className="text-white font-semibold"
                  style={{ fontFamily: "var(--font-playfair-var), serif" }}
                >
                  Salman Lex Chambers
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-2 p-8 flex-1 justify-center">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-2xl font-medium text-gray-200 hover:text-[#C9A84C] transition-colors py-4 border-b border-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-playfair-var), serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-8 w-full py-4 bg-[#C9A84C] text-black font-semibold text-lg rounded-sm"
              >
                Consult Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
