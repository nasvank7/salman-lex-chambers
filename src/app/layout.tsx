import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import DisclaimerModal from "@/src/components/DisclaimerModal";
import ConsultModal from "@/src/components/ConsultModal";
import { ConsultModalProvider } from "@/src/context/ConsultModalContext";

const SITE_URL = "https://www.salmanlexchambers.com";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel-var",
  display: "swap",
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-var",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Adv. Salman Pallikkadan & Adv. Aysha Latheef | Salman Lex Chambers – Best Advocates in Manjeri, Malappuram, Tirur & Perinthalmanna",
    template: "%s | Salman Lex Chambers",
  },
  description:
    "Looking for the best advocate in Manjeri, Malappuram, Tirur, or Perinthalmanna? Salman Lex Chambers — led by Adv. Salman Pallikkadan and Adv. Aysha Latheef — is a top-rated law firm serving clients across Manjeri, Malappuram, Tirur, Perinthalmanna, and throughout Kerala. Expert lawyers for criminal law, civil litigation, family disputes, corporate law, IPR, and MACT. Enrolled with the Bar Council of Kerala.",
  keywords: [
    // Name-based
    "Salman Pallikkadan",
    "Salman Pallikadan",
    "Adv Salman Pallikkadan",
    "Adv Salman Pallikadan",
    "advocate Salman Pallikkadan",
    "lawyer Salman Pallikadan",
    "Aysha Latheef",
    "Aysha Latheef advocate",
    "Adv Aysha Latheef",
    "Adv. Aysha Latheef",
    "advocate Aysha Latheef",
    "lawyer Aysha Latheef",
    "Aysha Latheef Manjeri",
    "Aysha Latheef Malappuram",
    "Aysha Latheef Kerala",
    "Aysha Latheef Salman Lex Chambers",
    // Firm
    "Salman Lex Chambers",
    "Salman Lex Chambers Manjeri",
    "Salman Lex Chambers Malappuram",
    // Best advocate / lawyer — Manjeri
    "best advocate in Manjeri",
    "best lawyer in Manjeri",
    "top advocate Manjeri",
    "top lawyer Manjeri",
    "advocate Manjeri",
    "lawyer Manjeri",
    "leading advocate Manjeri",
    "experienced advocate Manjeri",
    // Best advocate / lawyer — Malappuram
    "best advocate in Malappuram",
    "best lawyer in Malappuram",
    "top advocate Malappuram",
    "top lawyer Malappuram",
    "advocate Malappuram",
    "lawyer Malappuram",
    "leading advocate Malappuram",
    "experienced advocate Malappuram",
    // Best advocate / lawyer — Tirur
    "advocate Tirur",
    "lawyer Tirur",
    "best advocate in Tirur",
    "best lawyer in Tirur",
    "top advocate Tirur",
    "top lawyer Tirur",
    "leading advocate Tirur",
    "experienced advocate Tirur",
    "criminal lawyer Tirur",
    "family lawyer Tirur",
    "civil lawyer Tirur",
    // Best advocate / lawyer — Perinthalmanna
    "advocate Perinthalmanna",
    "lawyer Perinthalmanna",
    "best advocate in Perinthalmanna",
    "best lawyer in Perinthalmanna",
    "top advocate Perinthalmanna",
    "top lawyer Perinthalmanna",
    "leading advocate Perinthalmanna",
    "experienced advocate Perinthalmanna",
    "criminal lawyer Perinthalmanna",
    "family lawyer Perinthalmanna",
    "civil lawyer Perinthalmanna",
    // Best advocate / lawyer — Kerala
    "best advocate Kerala",
    "best lawyer Kerala",
    "top advocate Kerala",
    "legal services Kerala",
    // Practice area + location
    "criminal lawyer Manjeri",
    "criminal advocate Manjeri",
    "criminal lawyer Malappuram",
    "family lawyer Manjeri",
    "family law Malappuram",
    "divorce lawyer Manjeri",
    "divorce advocate Malappuram",
    "civil litigation Kerala",
    "civil lawyer Malappuram",
    "corporate law Malappuram",
    "IPR lawyer Kerala",
    "MACT advocate Malappuram",
    "motor accident lawyer Manjeri",
    "consumer dispute advocate Malappuram",
    "labour law advocate Kerala",
    // Credibility
    "Bar Council Kerala",
    "enrolled advocate Kerala",
    "Maharaja Law College advocate",
  ],
  authors: [{ name: "Adv. Salman Pallikkadan" }, { name: "Adv. Aysha Latheef" }],
  creator: "Salman Lex Chambers",
  publisher: "Salman Lex Chambers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Adv. Salman Pallikkadan & Adv. Aysha Latheef | Salman Lex Chambers – Best Advocates in Manjeri, Malappuram, Tirur & Perinthalmanna",
    description:
      "Adv. Salman Pallikkadan and Adv. Aysha Latheef — Partners of Salman Lex Chambers, Manjeri, Malappuram. Top advocates for criminal law, civil litigation, family disputes, corporate law, and IPR. Serving Manjeri, Malappuram, Tirur, Perinthalmanna, and across Kerala.",
    type: "website",
    url: SITE_URL,
    siteName: "Salman Lex Chambers",
    locale: "en_IN",
    images: [
      {
        url: "/SALMANLEXCHAMBERS.png",
        width: 1200,
        height: 630,
        alt: "Best Advocates in Manjeri & Malappuram – Salman Lex Chambers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adv. Salman Pallikkadan & Adv. Aysha Latheef | Best Advocates in Manjeri, Malappuram, Tirur & Perinthalmanna",
    description:
      "Top law firm serving Manjeri, Malappuram, Tirur, Perinthalmanna and across Kerala. Led by Adv. Salman Pallikkadan & Adv. Aysha Latheef. Excellence in law. Integrity in practice.",
    images: ["/SALMANLEXCHAMBERS.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Salman Lex Chambers",
      alternateName: "Salman Lex Chambers – Advocates & Legal Consultants",
      url: SITE_URL,
      logo: `${SITE_URL}/SALMANLEXCHAMBERS.png`,
      image: `${SITE_URL}/SALMANLEXCHAMBERS.png`,
      description:
        "Full-service law office at Manjeri, Malappuram, Kerala providing legal representation, litigation assistance, and professional legal consultancy.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manjeri",
        addressRegion: "Malappuram",
        addressCountry: "IN",
        addressLocality2: "Kerala",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.1193,
        longitude: 76.1212,
      },
      areaServed: [
        { "@type": "City", name: "Manjeri" },
        { "@type": "City", name: "Malappuram" },
        { "@type": "City", name: "Tirur" },
        { "@type": "City", name: "Perinthalmanna" },
        { "@type": "State", name: "Kerala" },
      ],
      serviceType: [
        "Criminal Law",
        "Civil Litigation",
        "Family Law",
        "Corporate Law",
        "Intellectual Property Rights",
        "Motor Accident Claims (MACT)",
        "Consumer Disputes",
        "Labour Law",
        "Rent Control",
        "Legal Consultancy",
        "Document Drafting",
      ],
      knowsAbout: [
        "Criminal Defense",
        "Family and Matrimonial Law",
        "Civil Litigation",
        "Corporate and Commercial Law",
        "Intellectual Property Rights",
        "Consumer Disputes",
        "Labour and Service Matters",
        "Motor Accident Claims",
        "Rent Control Proceedings",
      ],
      employee: [
        {
          "@type": "Person",
          "@id": `${SITE_URL}/#salman-pallikkadan`,
          name: "Salman Pallikkadan",
          alternateName: ["Salman Pallikadan", "Adv. Salman Pallikkadan", "Adv Salman Pallikadan"],
          jobTitle: "Advocate & Founder Partner",
          worksFor: { "@id": `${SITE_URL}/#organization` },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "H.H. The Maharaja's Government Law College, Ernakulam",
          },
          knowsAbout: [
            "Criminal Law",
            "Civil Litigation",
            "Family Law",
            "Corporate Law",
            "Intellectual Property Rights",
            "Kerala High Court practice",
          ],
        },
        {
          "@type": "Person",
          "@id": `${SITE_URL}/#aysha-latheef`,
          name: "Aysha Latheef",
          alternateName: ["Adv. Aysha Latheef", "Adv Aysha Latheef", "advocate Aysha Latheef"],
          jobTitle: "Advocate & Partner",
          worksFor: { "@id": `${SITE_URL}/#organization` },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "H.H. The Maharaja's Government Law College, Ernakulam",
          },
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#salman-pallikkadan`,
      name: "Salman Pallikkadan",
      alternateName: ["Salman Pallikadan", "Adv. Salman Pallikkadan", "Adv Salman Pallikadan"],
      jobTitle: "Advocate & Founder Partner",
      description:
        "Adv. Salman Pallikkadan is the Founder Partner of Salman Lex Chambers, a law firm based in Manjeri, Malappuram, Kerala. He is enrolled with the Bar Council of Kerala and practises criminal law, civil litigation, family law, corporate law, and IPR.",
      url: SITE_URL,
      image: `${SITE_URL}/salman.jpeg`,
      worksFor: {
        "@type": "LegalService",
        name: "Salman Lex Chambers",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Manjeri",
          addressRegion: "Malappuram, Kerala",
          addressCountry: "IN",
        },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "H.H. The Maharaja's Government Law College, Ernakulam",
      },
      memberOf: {
        "@type": "Organization",
        name: "Bar Council of Kerala",
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#aysha-latheef`,
      name: "Aysha Latheef",
      alternateName: ["Adv. Aysha Latheef", "Adv Aysha Latheef", "advocate Aysha Latheef"],
      jobTitle: "Advocate & Partner",
      description:
        "Adv. Aysha Latheef is a Partner at Salman Lex Chambers, a law firm based in Manjeri, Malappuram, Kerala. She is enrolled with the Bar Council of Kerala and practises criminal law, civil litigation, family law, corporate law, and related legal matters.",
      url: SITE_URL,
      worksFor: {
        "@type": "LegalService",
        name: "Salman Lex Chambers",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Manjeri",
          addressRegion: "Malappuram, Kerala",
          addressCountry: "IN",
        },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "H.H. The Maharaja's Government Law College, Ernakulam",
      },
      memberOf: {
        "@type": "Organization",
        name: "Bar Council of Kerala",
      },
      knowsAbout: [
        "Criminal Law",
        "Civil Litigation",
        "Family Law",
        "Corporate Law",
        "Intellectual Property Rights",
        "Kerala High Court practice",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Salman Lex Chambers",
      description: "Official website of Salman Lex Chambers – Best Advocates in Manjeri & Malappuram",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best advocate in Manjeri?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Adv. Salman Pallikkadan and Adv. Aysha Latheef of Salman Lex Chambers are among the leading advocates in Manjeri, Malappuram, Kerala. The firm is a full-service law office providing expert legal representation in criminal law, civil litigation, family law, corporate law, IPR, and MACT. Both advocates are enrolled with the Bar Council of Kerala and are alumni of H.H. The Maharaja's Government Law College, Ernakulam.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best lawyer in Malappuram?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salman Lex Chambers, led by Adv. Salman Pallikkadan (Founder Partner) and Adv. Aysha Latheef (Partner), is a top-rated law firm in Malappuram, Kerala. The firm practices criminal law, civil litigation, family and matrimonial matters, corporate law, intellectual property rights, motor accident claims (MACT), and consumer disputes.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Salman Lex Chambers located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salman Lex Chambers is located in Manjeri, Malappuram District, Kerala, India. The firm is led by Adv. Salman Pallikkadan and Adv. Aysha Latheef.",
          },
        },
        {
          "@type": "Question",
          name: "What are the practice areas of Salman Lex Chambers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salman Lex Chambers handles criminal law, civil litigation, family and matrimonial law, corporate and commercial law, intellectual property rights (IPR), motor accident claims (MACT), consumer disputes, labour and service matters, rent control proceedings, legal advisory, and document drafting.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Adv. Aysha Latheef?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Adv. Aysha Latheef is a Partner at Salman Lex Chambers, Manjeri, Malappuram. She is an alumna of H.H. The Maharaja's Government Law College, Ernakulam and is enrolled with the Bar Council of Kerala. She practises criminal law, civil litigation, family law, corporate law, and intellectual property rights.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Adv. Salman Pallikkadan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Adv. Salman Pallikkadan (also spelled Salman Pallikadan) is the Founder Partner of Salman Lex Chambers, a leading law firm in Manjeri, Malappuram, Kerala. He is an alumnus of H.H. The Maharaja's Government Law College, Ernakulam and is enrolled with the Bar Council of Kerala.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best advocate in Tirur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salman Lex Chambers, led by Adv. Salman Pallikkadan and Adv. Aysha Latheef, provides legal services to clients from Tirur and the surrounding areas of Malappuram District, Kerala. The firm handles criminal law, civil litigation, family law, corporate law, IPR, and motor accident claims (MACT).",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best lawyer in Tirur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Adv. Salman Pallikkadan and Adv. Aysha Latheef of Salman Lex Chambers are experienced advocates serving clients from Tirur, Malappuram, Manjeri, and across Kerala. Both are enrolled with the Bar Council of Kerala.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best advocate in Perinthalmanna?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salman Lex Chambers, led by Adv. Salman Pallikkadan and Adv. Aysha Latheef, provides legal representation and consultancy to clients from Perinthalmanna and the wider Malappuram District, Kerala. The firm covers criminal law, civil litigation, family law, corporate and commercial matters, IPR, and MACT.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best lawyer in Perinthalmanna?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Adv. Salman Pallikkadan and Adv. Aysha Latheef of Salman Lex Chambers are among the top advocates serving clients from Perinthalmanna, Malappuram, Tirur, Manjeri, and across Kerala. Both are alumni of H.H. The Maharaja's Government Law College and enrolled with the Bar Council of Kerala.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#060C1A] text-[#E8E2D9] antialiased">
        <ConsultModalProvider>
          <DisclaimerModal />
          <ConsultModal />
          {children}
        </ConsultModalProvider>
      </body>
    </html>
  );
}
