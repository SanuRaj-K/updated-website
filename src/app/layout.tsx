import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import { MicrosoftClarity } from "@/components/MicrosoftClarity";
import { portfolioData } from "@/data/portfolio";
import { siteUrl } from "@/data/site";

const GA_ID = "G-PW0JRT1WS2";
const CLARITY_PROJECT_ID = process.env.CLARITY_PROJECT_ID ?? "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: `${portfolioData.name} — ${portfolioData.role}`,
  description:
    "Sanu Raj is a Product Engineer and Full-Stack Developer building modern web applications, AI-powered products, and backend systems with Next.js, Python, and Azure.",
  keywords: [
    "Sanu Raj",
    "Product Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "AI integrations",
  ],
  authors: [{ name: portfolioData.name }],
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title: `${portfolioData.name} — ${portfolioData.role}`,
    description: portfolioData.tagline,
    type: "website",
    siteName: "Sanu Raj — Product Engineer",
    locale: "en_IN",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanu Raj — Product Engineer",
    description: portfolioData.tagline,
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MicrosoftClarity projectId={CLARITY_PROJECT_ID} />
        <Analytics />
      </body>
    </html>
  );
}
