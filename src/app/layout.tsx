import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wareesha Jannat — Web Developer",
  description:
    "Portfolio of Wareesha Jannat, a web developer creating modern, responsive and interactive web applications.",
  keywords: [
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "Frontend Developer",
    "Full Stack Projects",
  ],
  authors: [{ name: "Wareesha Jannat" }],
  robots: "index, follow",
  openGraph: {
    title: "Wareesha Jannat — Web Developer",
    description:
      "I build responsive and interactive web applications using modern technologies.",
    type: "website",
    url: "https://wareesha-jannat-portfolio.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wareesha Jannat Portfolio Preview",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wareesha Jannat",
              jobTitle: "Web Developer",
              url: "https://your-portfolio-url.com",
              sameAs: [
                "https://github.com/wareesha-Jannat",
                "https://www.linkedin.com/in/wareesha-jannat-172409399/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased font-sans`}
      >
        <div className="min-h-dvh flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
