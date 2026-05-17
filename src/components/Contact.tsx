"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "2nd Floor, Pallikkadan Building,\nOpposite Seethi Haji Bus Stand,\nPandikkad Road, Manjeri — 676121",
    link: "https://maps.app.goo.gl/3Kh4ibzDdYuNBNWJA",
  },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 7306647233",               link: "tel:+917306647233" },
  { icon: Mail,  label: "Email",            value: "salmanlexchambers@gmail.com",   link: "mailto:salmanlexchambers@gmail.com" },
  { icon: Clock, label: "Office Hours",     value: "Monday – Saturday\n9:00 AM – 10:00 PM", link: null },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", matter: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const inputClass =
    "w-full bg-[#0A1228] border border-[#283C50]/70 focus:border-[#617F98]/60 text-[#E8E2D9] placeholder-[#3D5263] px-4 py-3 text-sm outline-none transition-colors duration-300 font-light";

  return (
    <section id="contact" className="section-padding bg-[#060C1A] relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#617F98]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[#617F98] text-[9px] tracking-[0.42em] uppercase mb-5 font-light">
            Get in Touch
          </p>
          <div className="flex items-end gap-8">
            <h2
              className="font-light italic leading-[0.9] tracking-tight text-[#E8E2D9]"
              style={{
                fontFamily: "var(--font-cormorant-var), Georgia, serif",
                fontSize: "clamp(2.6rem, 5vw, 4rem)",
              }}
            >
              Schedule a
              <br />
              <span
                className="not-italic font-semibold"
                style={{
                  background: "linear-gradient(135deg, #8AA4BA 0%, #CDD8E0 48%, #A5BCC8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Consultation
              </span>
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-[#283C50]/80 to-transparent mb-2" />
          </div>
          <p className="text-[#617F98] text-sm font-light leading-relaxed max-w-xl mt-6">
            Reach out for confidential legal advice. Our team will respond promptly and schedule
            a consultation at your earliest convenience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0A1228] border border-[#283C50]/60 p-6 sm:p-8">
              {/* Card top silver line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#617F98]/30 to-transparent mb-8" />

              <h3
                className="text-[#CDD8E0] font-medium mb-7 leading-tight"
                style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif", fontSize: "1.3rem" }}
              >
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-14"
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
                  <p className="text-[#617F98] text-sm font-light">
                    Thank you for reaching out. We will contact you within 24 hours to schedule
                    your consultation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
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
                        Email Address *
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

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[#7A94A8] text-[9px] tracking-[0.28em] uppercase mb-2 block font-light">
                        Phone Number
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
                          <option value="" style={{ background: "#0A1228" }}>Select area of law</option>
                          <option value="criminal"  style={{ background: "#0A1228" }}>Criminal Law</option>
                          <option value="family"    style={{ background: "#0A1228" }}>Family Disputes</option>
                          <option value="civil"     style={{ background: "#0A1228" }}>Civil Litigation</option>
                          <option value="corporate" style={{ background: "#0A1228" }}>Corporate &amp; Commercial</option>
                          <option value="consumer"  style={{ background: "#0A1228" }}>Consumer Disputes</option>
                          <option value="labour"    style={{ background: "#0A1228" }}>Labour &amp; Service Matters</option>
                          <option value="motor"     style={{ background: "#0A1228" }}>Motor Accident Claims</option>
                          <option value="property"  style={{ background: "#0A1228" }}>Property &amp; Real Estate</option>
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
                      rows={5}
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
          </motion.div>

          {/* Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.09 }}
                  className="bg-[#0A1228] border border-[#283C50]/60 hover:border-[#435C72]/60 p-5 transition-all duration-400 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center border border-[#283C50]/70 group-hover:border-[#617F98]/40 transition-colors duration-400">
                      <Icon className="w-3.5 h-3.5 text-[#7A94A8] group-hover:text-[#8AA4BA] transition-colors duration-400" />
                    </div>
                    <div>
                      <p className="text-[#7A94A8] text-[9px] tracking-[0.28em] uppercase mb-1.5 font-light">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-[#7A94A8] text-sm font-light whitespace-pre-line hover:text-[#CDD8E0] transition-colors duration-300 leading-relaxed"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#7A94A8] text-sm font-light whitespace-pre-line leading-relaxed">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.82 }}
              className="border border-[#283C50]/60 overflow-hidden"
            >
              <iframe
                title="Salman Lex Chambers Location"
                src="https://maps.google.com/maps?q=Pallikkadan+Building,Pandikkad+Road,Manjeri,Kerala+676121&output=embed&z=16"
                width="100%"
                height="190"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
