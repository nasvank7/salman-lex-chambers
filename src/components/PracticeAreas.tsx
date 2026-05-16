"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Shield,
  Users,
  Gavel,
  Briefcase,
  ShoppingBag,
  Home,
  Hammer,
  Car,
  BookOpen,
  FileText,
  Lightbulb,
  Scale,
} from "lucide-react";

const practices = [
  {
    icon: Shield,
    title: "Criminal Law",
    description:
      "Robust defense and prosecution representation in criminal matters before sessions and high courts.",
  },
  {
    icon: Users,
    title: "Family Disputes",
    description:
      "Sensitive handling of matrimonial cases, maintenance, child custody, and inheritance disputes.",
  },
  {
    icon: Gavel,
    title: "Civil Litigation",
    description:
      "Comprehensive representation in civil suits, injunctions, property matters, and appeals.",
  },
  {
    icon: Briefcase,
    title: "Corporate & Commercial",
    description:
      "Legal support for businesses covering contracts, disputes, regulatory compliance, and commercial litigation.",
  },
  {
    icon: ShoppingBag,
    title: "Consumer Disputes",
    description:
      "Advocacy before consumer forums for product liability, deficiency in service, and unfair trade practices.",
  },
  {
    icon: Home,
    title: "Rent Control Proceedings",
    description:
      "Expert guidance in tenancy disputes, eviction proceedings, and rent control tribunal matters.",
  },
  {
    icon: Hammer,
    title: "Labour & Service Matters",
    description:
      "Representation in employment disputes, industrial tribunals, and service law cases for employees and employers.",
  },
  {
    icon: Car,
    title: "Motor Accident Claims",
    description:
      "Efficient processing of MACT claims, insurance disputes, and compensation recovery for accident victims.",
  },
  {
    icon: BookOpen,
    title: "Legal Advisory",
    description:
      "Strategic legal opinions and advisory services tailored to your personal, commercial, or regulatory needs.",
  },
  {
    icon: FileText,
    title: "Document Drafting & Vetting",
    description:
      "Precise drafting and review of agreements, deeds, MoUs, wills, and all legal instruments.",
  },
  {
    icon: Lightbulb,
    title: "Professional Consultancy",
    description:
      "Expert consultation for individuals and organizations navigating complex legal landscapes in Kerala.",
  },
  {
    icon: Scale,
    title: "Property & Real Estate",
    description:
      "Title verification, property disputes, registration matters, and real estate transaction advisory.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function PracticeAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="practice"
      className="section-padding bg-dark-secondary relative overflow-hidden"
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-var), serif" }}
          >
            Our Practice Areas
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Comprehensive legal services covering every domain of law — from individual needs
            to corporate requirements, handled with precision and dedication.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
        >
          {practices.map((practice) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={practice.title}
                variants={cardVariants}
                className="group bg-dark-card border border-[#2a2a2a] hover:border-[#C9A84C]/50 p-4 sm:p-6 cursor-default transition-all duration-400 hover:bg-[#111111] relative overflow-hidden"
              >
                {/* Hover gold glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                {/* Icon */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-sm bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]/40 transition-all duration-300">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C]" />
                </div>

                <h3
                  className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 group-hover:text-[#C9A84C] transition-colors duration-300 leading-tight"
                  style={{ fontFamily: "var(--font-playfair-var), serif" }}
                >
                  {practice.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 hidden sm:block">
                  {practice.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 mb-5 text-sm">
            Not sure which practice area covers your matter?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-[#C9A84C] text-black text-sm font-bold tracking-widest uppercase hover:bg-[#E8D5A3] transition-all duration-300"
          >
            Speak to an Advocate
          </button>
        </motion.div>
      </div>
    </section>
  );
}
