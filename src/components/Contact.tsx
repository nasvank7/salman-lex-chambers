"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Manjeri, Malappuram District,\nKerala, India",
    link: "https://maps.google.com/?q=Manjeri,Malappuram,Kerala",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 00000 00000",
    link: "tel:+910000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@salmanlex.in",
    link: "mailto:info@salmanlex.in",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Saturday\n9:00 AM – 6:00 PM",
    link: null,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    matter: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#0f0f0f] border border-[#2a2a2a] focus:border-[#C9A84C] text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors duration-300";

  return (
    <section id="contact" className="section-padding bg-dark-secondary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#C9A84C]/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-var), serif" }}
          >
            Schedule a Consultation
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Reach out to us for confidential legal advice. Our team will respond promptly
            and schedule a consultation at your earliest convenience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-card border border-[#2a2a2a] p-5 sm:p-8">
              <h3
                className="text-xl font-semibold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair-var), serif" }}
              >
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <h4
                    className="text-white text-xl font-semibold mb-2"
                    style={{ fontFamily: "var(--font-playfair-var), serif" }}
                  >
                    Message Sent
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Thank you for reaching out. We will contact you within 24 hours to
                    schedule your consultation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">
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
                      <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">
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
                      <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">
                        Legal Matter
                      </label>
                      <select
                        value={formState.matter}
                        onChange={(e) => setFormState({ ...formState, matter: e.target.value })}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" className="bg-[#0f0f0f]">
                          Select area of law
                        </option>
                        <option value="criminal" className="bg-[#0f0f0f]">
                          Criminal Law
                        </option>
                        <option value="family" className="bg-[#0f0f0f]">
                          Family Disputes
                        </option>
                        <option value="civil" className="bg-[#0f0f0f]">
                          Civil Litigation
                        </option>
                        <option value="corporate" className="bg-[#0f0f0f]">
                          Corporate &amp; Commercial
                        </option>
                        <option value="consumer" className="bg-[#0f0f0f]">
                          Consumer Disputes
                        </option>
                        <option value="labour" className="bg-[#0f0f0f]">
                          Labour &amp; Service Matters
                        </option>
                        <option value="motor" className="bg-[#0f0f0f]">
                          Motor Accident Claims
                        </option>
                        <option value="property" className="bg-[#0f0f0f]">
                          Property &amp; Real Estate
                        </option>
                        <option value="other" className="bg-[#0f0f0f]">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">
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
                  <p className="text-gray-600 text-xs">
                    All communications are strictly confidential and protected by attorney-client
                    privilege.
                  </p>
                  <button
                    type="submit"
                    className="group w-full py-4 bg-[#C9A84C] text-black font-bold text-sm tracking-widest uppercase hover:bg-[#E8D5A3] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-dark-card border border-[#2a2a2a] p-5 hover:border-[#C9A84C]/30 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-sm">
                        <Icon className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-gray-200 text-sm whitespace-pre-line hover:text-[#C9A84C] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-200 text-sm whitespace-pre-line">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="border border-[#2a2a2a] overflow-hidden"
            >
              <iframe
                title="Salman Lex Chambers Location — Manjeri, Malappuram"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31399.45!2d76.119!3d11.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba645c0eb851a5f%3A0x95b85a41b7a2cfce!2sManjeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Emergency note */}
            <div className="border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-4">
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-1">
                Urgent Legal Matter?
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                For urgent matters requiring immediate legal attention, please call us directly.
                We are committed to providing swift response in time-critical situations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
