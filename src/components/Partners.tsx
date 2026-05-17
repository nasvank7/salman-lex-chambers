"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Scale, Briefcase, Building2 } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "Adv. Salman Pallikkadan",
    role: "Founder Partner | Advocate & Legal Consultant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
    degree: "B.A. LL.B.",
    education: "H.H. The Maharaja's Government Law College, Ernakulam",
    enrollmentNo: "K/814/2020",
    career: [
      "Muhammed Siyad & Associates, Ernakulam",
      "KVS Legal Associates, Manjeri",
      "Legal Aid Defence Counsel, NALSA (2023 – 2025)",
    ],
    corporate: "Legal Advisor — Popees Baby Care Pvt. Ltd.",
    description:
      "Adv. Salman Pallikkadan is the Founder Partner of Salman Lex Chambers, enrolled with the Bar Council of Kerala in 2020. He holds a B.A. LL.B. from H.H. The Maharaja's Government Law College, Ernakulam. He began his career at Muhammed Siyad & Associates, Ernakulam, and later practised at KVS Legal Associates, Manjeri. He was subsequently selected as a Legal Aid Defence Counsel under NALSA, serving from 2023 to 2025, representing underprivileged accused in criminal trials. He established Salman Lex Chambers along with Adv. Aysha Latheef and serves as Legal Advisor to Popees Baby Care Private Limited.",
    specialties: ["Criminal Law", "Civil Disputes", "Corporate & Commercial", "Family Law", "IPR Advisory & Litigation", "MACT", "Consumer Disputes"],
  },
  {
    name: "Adv. Aysha Latheef",
    role: "Partner | Advocate & Legal Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
    degree: "B.Com LL.B.",
    education: "H.H. The Maharaja's Government Law College, Ernakulam",
    enrollmentNo: "K/1224/2022",
    career: [
      "KVS Legal Associates, Manjeri",
      "Partner, Salman Lex Chambers",
    ],
    corporate: "Legal Support — Popees Baby Care Pvt. Ltd., Fragomen, Building Blocks Software Services Pvt. Ltd.",
    description:
      "Adv. Aysha Latheef is a Partner at Salman Lex Chambers, enrolled with the Bar Council of Kerala in 2022. She holds a B.Com LL.B. from H.H. The Maharaja's Government Law College, Ernakulam and brings professional experience in litigation, legal advisory, drafting, and consultancy across diverse areas of practice. She commenced her career at KVS Legal Associates, Manjeri, and subsequently joined Salman Lex Chambers as Partner. Alongside court practice, she has rendered corporate legal support to Popees Baby Care Private Limited, Fragomen, and Building Blocks Software Services Private Limited.",
    specialties: ["Family Law", "Corporate & Commercial", "IPR Advisory & Litigation", "Criminal Law", "Civil Disputes", "MACT", "Consumer Disputes"],
  },
];

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" className="section-padding bg-[#060C1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[#617F98] text-[9px] tracking-[0.42em] uppercase mb-5 font-light">
            Our Leadership
          </p>
          <div className="flex items-end gap-8">
            <h2
              className="font-light italic leading-[0.9] tracking-tight text-[#E8E2D9]"
              style={{
                fontFamily: "var(--font-cormorant-var), Georgia, serif",
                fontSize: "clamp(2.6rem, 5vw, 4rem)",
              }}
            >
              Meet Our
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
                Partners
              </span>
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-[#283C50]/80 to-transparent mb-2" />
          </div>
        </motion.div>

        {/* Partner cards — stacked vertical, full-width each */}
        <div className="space-y-5">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.18 }}
              className="group relative bg-[#0E1A35] border border-[#283C50]/60 hover:border-[#435C72]/60 transition-all duration-500 overflow-hidden"
            >
              {/* Top silver accent bar */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8AA4BA]/40 to-transparent" />

              <div className="flex flex-col sm:flex-row">
                {/* Portrait image */}
                <div className="relative w-full sm:w-52 lg:w-64 h-56 sm:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, 256px"
                  />
                  {/* Portrait overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E1A35]/60 hidden sm:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A35]/60 to-transparent sm:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3
                        className="text-[#E8E2D9] font-medium leading-tight mb-1"
                        style={{
                          fontFamily: "var(--font-cormorant-var), Georgia, serif",
                          fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                        }}
                      >
                        {partner.name}
                      </h3>
                      <p className="text-[#8AA4BA] text-[10px] tracking-[0.22em] uppercase font-light">
                        {partner.role}
                      </p>
                    </div>

                    {/* Number indicator */}
                    <span
                      className="text-[#283C50] font-light hidden md:block"
                      style={{
                        fontFamily: "var(--font-cormorant-var), Georgia, serif",
                        fontSize: "3.5rem",
                        lineHeight: 1,
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Credentials */}
                  <div className="flex flex-col gap-2 mb-5">
                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#7A94A8] mt-0.5 flex-shrink-0" />
                      <p className="text-[#617F98] text-xs font-light leading-snug">
                        {partner.degree} &mdash; {partner.education}
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-3.5 h-3.5 text-[#7A94A8] flex-shrink-0" />
                      <p className="text-[#617F98] text-xs font-light">
                        Bar Council of Kerala &mdash; Enrl. No. {partner.enrollmentNo}
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#7A94A8] mt-0.5 flex-shrink-0" />
                      <p className="text-[#617F98] text-xs font-light leading-snug">
                        {partner.career.join(" → ")}
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-3.5 h-3.5 text-[#7A94A8] mt-0.5 flex-shrink-0" />
                      <p className="text-[#617F98] text-xs font-light leading-snug">{partner.corporate}</p>
                    </div>
                  </div>

                  {/* Silver divider */}
                  <div className="h-px bg-gradient-to-r from-[#283C50]/70 to-transparent mb-5" />

                  <p className="text-[#7A94A8] text-sm leading-relaxed mb-6 font-light">
                    {partner.description}
                  </p>

                  {/* Specialties */}
                  <div>
                    <p className="text-[#7A94A8] text-[9px] tracking-[0.3em] uppercase mb-3">
                      Areas of Focus
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#283C50]/70 text-[#8AA4BA] text-[10px] tracking-wide font-light hover:border-[#617F98]/50 hover:text-[#8AA4BA] transition-all duration-300"
                        >
                          <Scale className="w-2.5 h-2.5 text-[#7A94A8]" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom silver accent */}
              <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#617F98]/30 to-transparent transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Alumni note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 px-6 py-5 border border-[#283C50]/50 bg-[#0A1228]/50"
        >
          <p className="text-[#617F98] text-xs font-light leading-relaxed text-center">
            Both advocates are distinguished alumni of{" "}
            <span className="text-[#8AA4BA] font-normal">
              His Highness The Maharaja&apos;s Government Law College, Ernakulam
            </span>{" "}
            and are enrolled with the{" "}
            <span className="text-[#8AA4BA] font-normal">Bar Council of Kerala</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
