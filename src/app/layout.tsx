import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
<<<<<<< HEAD
import { MicrosoftClarity } from "@/components/MicrosoftClarity";
import { portfolioData } from "@/data/portfolio";

const GA_ID = "G-PW0JRT1WS2";
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
=======
import { portfolioData } from "@/data/portfolio";

const GA_ID = "G-PW0JRT1WS2";
>>>>>>> af7bd3cd4c73dff233cbbd61b2c0fc344986bdf5

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.name} — ${portfolioData.role}`,
  description: portfolioData.tagline,
  keywords: ["portfolio", "developer", "full stack", "react", "nextjs"],
  authors: [{ name: portfolioData.name }],
  openGraph: {
    title: `${portfolioData.name} — ${portfolioData.role}`,
    description: portfolioData.tagline,
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-slate-200 noise-bg`}
      >
        {children}
<<<<<<< HEAD
        {CLARITY_PROJECT_ID ? (
          <MicrosoftClarity projectId={CLARITY_PROJECT_ID} />
        ) : null}
=======
>>>>>>> af7bd3cd4c73dff233cbbd61b2c0fc344986bdf5
        <Analytics />
      </body>
    </html>
  );
}
