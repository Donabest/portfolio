import type { Metadata } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Nunito,
  Montserrat,
} from "next/font/google";
import "@/app/styles/globals.css";
import { cn } from "./lib/utils";

const MontserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const instrumentSans = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

const JetBrainMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jetBrains-Mono",
});
const NunitoSans = Nunito({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-Nunito-Sans",
});

const siteConfig = {
  name: "Rabiu Abdulazeez",
  url: "https://portfolio.vercel.app",
  description:
    "Rabiu Abdulazeez is a Frontend Engineer specializing in high-performance, visually immersive web applications using Next.js, React, and TypeScript.",
  author: "Rabiu Abdulazeez",
  twitter: "@donfttp",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Frontend Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  creator: siteConfig.author,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  keywords: [
    "Frontend Engineer",
    "Fullstack Developer",
    "SoftWare Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Rabiu Abdulazeez",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonId = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: ["https://github.com/Donabest", "https://twitter.com/donfttp"],
    jobTitle: "Software Engineer",
    description: siteConfig.description,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Web Development",
    ],
  };
  return (
    <html
      lang="en"
      className={cn(
        JetBrainMono.variable,
        MontserratSans.variable,
        instrumentSans.variable,
        NunitoSans.variable,
        "scroll-smooth",
      )}
    >
      <body className="h-full antialiased bg-secondary-100 text-gray-50 ">
        <script
          type="application/id+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonId) }}
        />
        {children}
      </body>
    </html>
  );
}
