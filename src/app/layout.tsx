import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-var",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
