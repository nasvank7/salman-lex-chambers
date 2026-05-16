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
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          {/* Thin gold top line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

          <div className="bg-[#0a0a0a]/95 backdrop-blur-md px-4 py-3 flex gap-3 items-center shadow-2xl">
            {/* Call button */}
            <a
              href="tel:+910000000000"
              className="flex-1 flex items-center justify-center gap-2.5 py-3.5 bg-[#C9A84C] text-black text-sm font-bold tracking-wide rounded-sm active:bg-[#E8D5A3] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            {/* WhatsApp / Consult button */}
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex-1 flex items-center justify-center gap-2.5 py-3.5 border border-[#C9A84C]/60 text-[#C9A84C] text-sm font-semibold tracking-wide rounded-sm bg-[#C9A84C]/5 active:bg-[#C9A84C]/15 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Consult Us
            </button>
          </div>

          {/* Safe area spacer for iOS home indicator */}
          <div className="h-safe-bottom bg-[#0a0a0a]/95" style={{ height: "env(safe-area-inset-bottom)" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
