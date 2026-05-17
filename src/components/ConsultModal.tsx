"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Send } from "lucide-react";
import { useConsultModal } from "@/src/context/ConsultModalContext";

const inputClass =
  "w-full bg-[#060C1A] border border-[#283C50]/70 focus:border-[#617F98]/60 text-[#E8E2D9] placeholder-[#3D5263] px-4 py-3 text-sm outline-none transition-colors duration-300 font-light";

export default function ConsultModal() {
  const { open, closeModal } = useConsultModal();
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", matter: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setFormState({ name: "", email: "", phone: "", matter: "", message: "" });
        setSubmitted(false);
        setError(null);
      }, 300);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#030610]/85 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-lg bg-[#0A1228] border border-[#283C50]/60 overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top silver accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8AA4BA]/40 to-transparent" />

              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-6 pb-0">
                <div>
                  <p className="text-[#617F98] text-[9px] tracking-[0.38em] uppercase font-light mb-1">
                    Salman Lex Chambers
                  </p>
                  <h2
                    className="text-[#E8E2D9] font-medium leading-tight"
                    style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif", fontSize: "1.4rem" }}
                  >
                    Book a Consultation
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 flex items-center justify-center border border-[#283C50]/60 hover:border-[#617F98]/50 text-[#617F98] hover:text-[#8AA4BA] transition-all duration-300 flex-shrink-0 mt-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="h-px bg-gradient-to-r from-[#283C50]/70 to-transparent mx-6 mt-5 mb-6" />

              {/* Body */}
              <div className="px-6 pb-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-14 h-14 border border-[#617F98]/30 flex items-center justify-center mx-auto mb-5">
                      <Send className="w-5 h-5 text-[#617F98]" />
                    </div>
                    <h4
                      className="text-[#E8E2D9] font-medium mb-3"
                      style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif", fontSize: "1.4rem" }}
                    >
                      Message Sent
                    </h4>
                    <p className="text-[#617F98] text-sm font-light leading-relaxed mb-6">
                      Thank you for reaching out. We will contact you within 24 hours to
                      schedule your consultation.
                    </p>
                    <button
                      onClick={closeModal}
                      className="px-8 py-3 border border-[#283C50]/70 text-[#8AA4BA] text-[10px] tracking-[0.24em] uppercase font-light hover:border-[#617F98]/50 transition-all duration-300"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[#7A94A8] text-[9px] tracking-[0.28em] uppercase mb-2 block font-light">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-[#7A94A8] text-[9px] tracking-[0.28em] uppercase mb-2 block font-light">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[#7A94A8] text-[9px] tracking-[0.28em] uppercase mb-2 block font-light">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 00000 00000"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-[#7A94A8] text-[9px] tracking-[0.28em] uppercase mb-2 block font-light">
                          Legal Matter
                        </label>
                        <div className="relative">
                          <select
                            value={formState.matter}
                            onChange={(e) => setFormState({ ...formState, matter: e.target.value })}
                            className={`${inputClass} appearance-none cursor-pointer pr-9`}
                          >
                            <option value="" style={{ background: "#0A1228" }}>Select area</option>
                            <option value="criminal"  style={{ background: "#0A1228" }}>Criminal Law</option>
                            <option value="family"    style={{ background: "#0A1228" }}>Family Disputes</option>
                            <option value="civil"     style={{ background: "#0A1228" }}>Civil Litigation</option>
                            <option value="corporate" style={{ background: "#0A1228" }}>Corporate &amp; Commercial</option>
                            <option value="consumer"  style={{ background: "#0A1228" }}>Consumer Disputes</option>
                            <option value="labour"    style={{ background: "#0A1228" }}>Labour &amp; Service</option>
                            <option value="motor"     style={{ background: "#0A1228" }}>Motor Accident</option>
                            <option value="property"  style={{ background: "#0A1228" }}>Property</option>
                            <option value="other"     style={{ background: "#0A1228" }}>Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                            <svg className="w-3.5 h-3.5 text-[#617F98]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-[#7A94A8] text-[9px] tracking-[0.28em] uppercase mb-2 block font-light">
                        Brief Description *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Briefly describe your legal matter..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <p className="text-[#617F98] text-[10px] font-light leading-relaxed">
                      All communications are strictly confidential and protected by attorney-client privilege.
                    </p>

                    {error && (
                      <p className="text-red-400 text-xs font-light">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full py-4 bg-[#1B3D6E] text-[#E8E2D9] font-medium text-[10.5px] tracking-[0.28em] uppercase hover:bg-[#234E87] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-500 flex items-center justify-center gap-3"
                    >
                      {loading ? "Sending…" : "Send Message"}
                      {!loading && <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
