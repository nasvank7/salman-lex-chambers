"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Scale } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "Adv. Salman Pallikkadan",
    role: "Founder Partner",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
    education: "H.H. The Maharaja's Government Law College, Ernakulam",
    enrollment: "Bar Council of Kerala",
    description:
      "Adv. Salman Pallikkadan founded Salman Lex Chambers with a vision to deliver accessible, effective, and ethical legal representation. With expertise spanning criminal law, civil litigation, and corporate matters, he brings rigorous analytical thinking and courtroom acumen to every client engagement.",
    specialties: ["Criminal Law", "Civil Litigation", "Corporate Matters"],
  },
  {
    name: "Adv. Aysha Latheef",
    role: "Partner",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
    education: "H.H. The Maharaja's Government Law College, Ernakulam",
    enrollment: "Bar Council of Kerala",
    description:
      "Adv. Aysha Latheef is a dedicated partner who brings deep expertise in family law, consumer disputes, and labour matters. Her empathetic approach and thorough legal preparation ensure that clients receive both sound counsel and compassionate support through challenging legal proceedings.",
    specialties: ["Family Law", "Consumer Disputes", "Labour Matters"],
  },
];

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" className="section-padding bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4">
            Our Leadership
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-var), serif" }}
          >
            Meet Our Partners
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Led by two distinguished advocates committed to delivering exceptional legal
            representation with professionalism and integrity.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group relative bg-dark-card border border-[#2a2a2a] hover:border-[#C9A84C]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Top gold accent */}
              <div className="h-1 w-full bg-gradient-to-r from-[#9A7A2E] via-[#C9A84C] to-[#E8D5A3]" />

              <div className="p-5 sm:p-8">
                {/* Profile — stacks on very small screens */}
                <div className="flex flex-col xs:flex-row items-center xs:items-start gap-4 sm:gap-6 mb-6 text-center xs:text-left">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden border-2 border-[#C9A84C]/30 mx-auto xs:mx-0">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#C9A84C]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg sm:text-xl font-bold text-white leading-tight mb-1"
                      style={{ fontFamily: "var(--font-playfair-var), serif" }}
                    >
                      {partner.name}
                    </h3>
                    <p className="text-[#C9A84C] text-sm font-medium tracking-wide mb-2 sm:mb-3">
                      {partner.role}
                    </p>
                    <div className="flex flex-col gap-1.5 items-center xs:items-start">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-400 text-xs leading-tight text-left">{partner.education}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                        <p className="text-gray-400 text-xs">{partner.enrollment}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#2a2a2a] mb-5" />

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>

                {/* Specialties */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                    Areas of Focus
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#C9A84C]/25 bg-[#C9A84C]/5 text-[#C9A84C] text-xs tracking-wide"
                      >
                        <Scale className="w-3 h-3" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/0 to-[#C9A84C]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* College mention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center p-6 border border-[#C9A84C]/15 bg-[#C9A84C]/3"
        >
          <p className="text-gray-400 text-sm">
            Both advocates are distinguished alumni of{" "}
            <span className="text-[#C9A84C] font-medium">
              His Highness The Maharaja&apos;s Government Law College, Ernakulam
            </span>{" "}
            and are enrolled with the{" "}
            <span className="text-[#C9A84C] font-medium">Bar Council of Kerala</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
