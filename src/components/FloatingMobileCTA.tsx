"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          {/* Top silver shimmer */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#617F98]/30 to-transparent" />

          <div className="bg-[#030610]/97 backdrop-blur-xl px-4 py-3 flex gap-3 items-center">
            <a
              href="tel:+917306647233"
              className="flex-1 flex items-center justify-center gap-2.5 py-3.5 bg-[#1B3D6E] text-[#E8E2D9] text-[10px] tracking-[0.2em] uppercase font-medium active:bg-[#234E87] transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-1 flex items-center justify-center gap-2.5 py-3.5 border border-[#435C72]/50 text-[#8AA4BA] text-[10px] tracking-[0.2em] uppercase font-light active:bg-[#8AA4BA]/5 transition-colors duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Consult Us
            </button>
          </div>

          {/* Safe area padding for notched phones */}
          <div className="bg-[#030610]/97" style={{ height: "env(safe-area-inset-bottom)" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
