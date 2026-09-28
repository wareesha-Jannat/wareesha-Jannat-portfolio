import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wareesha Jannat — Full Stack Web Developer",
  description:
    "Portfolio of Wareesha Jannat, a Full stack developer creating modern, responsive and interactive web applications.",
  keywords: [
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "Frontend Developer",
    "Full Stack Projects",
    "Full Stack Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Wareesha Jannat" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Wareesha Jannat — Full Stack Web Developer",
    description:
      "I build responsive and interactive web applications using modern technologies.",
    type: "website",
    url: "https://wareesha-jannat-portfolio.vercel.app",
    images: [
      {
        url: "https://wareesha-jannat-portfolio.vercel.app/og-image.png",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="qK4Jm5p8da7HBYfyWp-zJ5BGMqE0B7Dzw6qwC_p3tnA"
        />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wareesha Jannat",
              jobTitle: "Web Developer",
              url: "https://wareesha-jannat-portfolio.vercel.app",
              sameAs: [
                "https://github.com/wareesha-Jannat",
                "https://www.linkedin.com/in/wareesha-jannat",
              ],
            }),
          }}
        />
        <link
          rel="canonical"
          href="https://wareesha-jannat-portfolio.vercel.app"
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground selection:bg-[#dfd5c6] selection:text-accent-foreground`}
      >
        <div className="min-h-screen flex flex-col bg-background">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
