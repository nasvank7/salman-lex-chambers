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
    default: "Adv. Salman Pallikkadan | Salman Lex Chambers – Advocates & Legal Consultants, Manjeri",
    template: "%s | Salman Lex Chambers",
  },
  description:
    "Adv. Salman Pallikkadan (Salman Pallikadan), Founder Partner of Salman Lex Chambers — a full-service law office at Manjeri, Malappuram, Kerala. Expert in criminal law, civil litigation, family disputes, corporate law, IPR, and MACT. Enrolled with the Bar Council of Kerala.",
  keywords: [
    "Salman Pallikkadan",
    "Salman Pallikadan",
    "Adv Salman Pallikkadan",
    "Adv Salman Pallikadan",
    "advocate Salman Pallikkadan",
    "lawyer Salman Pallikadan",
    "Salman Lex Chambers",
    "advocate Manjeri",
    "lawyer Malappuram",
    "best lawyer Malappuram",
    "legal services Kerala",
    "criminal law Manjeri",
    "family law Malappuram",
    "civil litigation Kerala",
    "corporate law Malappuram",
    "IPR lawyer Kerala",
    "MACT advocate Malappuram",
    "Bar Council Kerala",
    "Aysha Latheef advocate",
  ],
  authors: [{ name: "Adv. Salman Pallikkadan" }],
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
    title: "Adv. Salman Pallikkadan | Salman Lex Chambers – Advocates, Manjeri",
    description:
      "Adv. Salman Pallikkadan — Founder Partner of Salman Lex Chambers, Manjeri, Malappuram. Expert legal services in criminal law, civil litigation, family disputes, corporate law, and IPR across Kerala.",
    type: "website",
    url: SITE_URL,
    siteName: "Salman Lex Chambers",
    locale: "en_IN",
    images: [
      {
        url: "/SALMANLEXCHAMBERS.png",
        width: 1200,
        height: 630,
        alt: "Salman Lex Chambers – Adv. Salman Pallikkadan, Manjeri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adv. Salman Pallikkadan | Salman Lex Chambers, Manjeri",
    description:
      "Full-service law office at Manjeri, Malappuram led by Adv. Salman Pallikkadan. Excellence in law. Integrity in practice.",
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
      areaServed: {
        "@type": "State",
        name: "Kerala",
      },
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
          name: "Aysha Latheef",
          alternateName: "Adv. Aysha Latheef",
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
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Salman Lex Chambers",
      description: "Official website of Salman Lex Chambers – Adv. Salman Pallikkadan, Manjeri",
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
