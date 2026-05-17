"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Award } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Led by Adv. Salman Pallikkadan (Founder Partner) and Adv. Aysha Latheef (Partner)",
  // "Both alumni of H.H. The Maharaja's Government Law College, Ernakulam",
  // "Enrolled with the Bar Council of Kerala — Advocates Act, 1961",
  // "Practice before courts, tribunals, and statutory authorities across Kerala",
  // "Operating in adherence to the rules of the Bar Council of India",
];

const stats = [
  { value: "11+", label: "Practice Areas" },
  // { value: "2",   label: "Expert Partners" },
  // { value: "100%", label: "Commitment" },
  { value: "Manjeri", label: "Based At" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-[#0A1228] relative overflow-hidden">
      {/* Faint vertical pillar motif — referencing the logo */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#283C50]/40 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#283C50]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#617F98] text-[9px] tracking-[0.42em] uppercase mb-5 font-light">
                About the Firm
              </p>
             

              {/* Silver hairline */}
              <div className="w-14 h-px bg-gradient-to-r from-[#8AA4BA]/70 to-transparent mb-9" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-[#7A94A8] text-sm leading-relaxed mb-9 font-light text-justify hyphens-auto"
            >
              <p>
                <span className="text-[#CDD8E0] font-normal">Salman Lex Chambers</span>,
                Advocates &amp; Legal Consultants, is a full-service law office based at Manjeri,
                Malappuram District, engaged in providing legal representation, litigation
                assistance, and professional legal consultancy before courts, tribunals, and
                statutory authorities across the State of Kerala. The firm is led by Adv. Salman Pallikkadan, Founder Partner, together with Adv. Aysha Latheef, Partner, both alumni of His Highness The Maharaja's Government Law College, Ernakulam and enrolled with the Bar Council of Kerala.
              </p>
              <p>
               The firm’s practice encompasses criminal law, family and matrimonial matters, intellectual property rights litigation &  advisory, civil litigation, corporate and commercial matters, consumer disputes, rent control proceedings, labour and service matters, motor accident claims (MACT), legal advisory services, drafting and vetting of legal documents, and professional consultancy. 
              </p>
              <p>
                Salman Lex Chambers functions with an emphasis on professional integrity,
                confidentiality, and strict adherence to the ethical standards prescribed under
                the Advocates Act, 1961 and the rules of the Bar Council of India.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-3.5 mb-10"
            >
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.09 }}
                  className="flex items-start gap-3.5 text-[#7A94A8] text-sm font-light"
                >
                  <div className="w-px h-4 bg-[#617F98]/60 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-3 border border-[#283C50]/70 bg-[#435C72]/8"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8AA4BA] flex-shrink-0" />
              <span className="text-[#7A94A8] text-xs font-light tracking-wide">
                Manjeri, Malappuram District, Kerala, India
              </span>
            </motion.div>
          </div>

          {/* Right — image + stats */}
          <div className="space-y-5 order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-60 sm:h-80 md:h-[380px] lg:h-[420px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
                  alt="Law library"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1228]/70 via-[#0A1228]/10 to-transparent" />
              </div>

              {/* Offset silver border — luxury framing */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#435C72]/30 pointer-events-none" />

              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-[#0A1228]/95 backdrop-blur-sm border border-[#283C50]/80 px-5 py-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#617F98]" />
                  <div>
                    <p className="text-[#CDD8E0] text-xs font-medium tracking-wide">Bar Council of Kerala</p>
                    <p className="text-[#8AA4BA] text-[10px] font-light mt-0.5">Licensed Advocates</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.07 }}
                  className="bg-[#0E1A35] border border-[#283C50]/60 hover:border-[#435C72]/60 transition-colors duration-400 p-5 text-center group"
                >
                  <p
                    className="font-semibold mb-1 silver-gradient"
                    style={{
                      fontFamily: "var(--font-cormorant-var), Georgia, serif",
                      fontSize: "clamp(1.7rem, 3.5vw, 2.2rem)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#617F98] text-[9px] tracking-[0.22em] uppercase font-light">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
