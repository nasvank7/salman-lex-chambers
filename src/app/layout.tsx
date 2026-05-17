import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import DisclaimerModal from "@/src/components/DisclaimerModal";

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
  title: "Salman Lex Chambers | Advocates & Legal Consultants, Manjeri",
  description:
    "Salman Lex Chambers — a full-service law office at Manjeri, Malappuram District, providing legal assistance, litigation support, and consultancy services. Led by Adv. Salman Pallikkadan and Adv. Aysha Latheef.",
  keywords:
    "advocate Manjeri, lawyer Malappuram, legal services Kerala, criminal law, family disputes, civil litigation, corporate law, Salman Pallikkadan",
  openGraph: {
    title: "Salman Lex Chambers | Advocates & Legal Consultants",
    description:
      "Full-service law office at Manjeri, Malappuram. Excellence in law. Integrity in practice.",
    type: "website",
  },
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
      </head>
      <body className="bg-[#060C1A] text-[#E8E2D9] antialiased">
        <DisclaimerModal />
        {children}
      </body>
    </html>
  );
}
