"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #9A7A2E 0%, #C9A84C 40%, #E8D5A3 60%, #C9A84C 80%, #9A7A2E 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 10px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-black/60 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Your Legal Partner in Kerala
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair-var), serif" }}
          >
            Facing a Legal Challenge?
            <br />
            We Are Here to Help.
          </h2>
          <p className="text-black/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Consult with experienced advocates at Salman Lex Chambers today.
            Your first consultation is the first step toward resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-[#080808] transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-black text-black text-sm font-bold tracking-widest uppercase hover:bg-black/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
