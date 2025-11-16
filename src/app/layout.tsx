import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/hint.min.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import { PostHogProvider } from "./providers";
import StructuredData from "@/components/StructuredData";

const chromate = localFont({
  src: "./Chromate-Regular.ttf",
  variable: "--font-chromate",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saurabh374.github.io"),
  title: {
    default: "Saurabh Patil - Software Engineer & Full Stack Developer",
    template: "%s | Saurabh Patil",
  },
  description:
    "Saurabh Patil is a Software Engineer based in Nagpur, India, specializing in React, Next.js, TypeScript and scalable backend systems with Node.js, MySQL, Redis, and AWS. Explore projects like Chatify, CVision, GTA VI Landing Page, and Jyotish Vishwakosh.",
  keywords: [
    "Saurabh Patil",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MERN Stack",
    "Web Developer",
    "Portfolio",
    "Chatify",
    "CVision",
    "Jyotish Vishwakosh",
    "GTA VI Landing Page",
  ],
  authors: [{ name: "Saurabh Patil", url: "https://saurabh374.github.io" }],
  creator: "Saurabh Patil",
  publisher: "Saurabh Patil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saurabh374.github.io",
    title: "Saurabh Patil - Software Engineer & Full Stack Developer",
    description:
      "Portfolio of Saurabh Patil, a Software Engineer specializing in modern frontend (React, Next.js, TypeScript) and scalable backend systems with Node.js, MySQL, Redis, and AWS.",
    siteName: "Saurabh Patil Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saurabh Patil - Software Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Patil - Software Engineer & Full Stack Developer",
    description:
      "Software Engineer specializing in React, Next.js, Node.js, and cloud-native architectures. Explore my projects and experience.",
    // `creator` omitted since no Twitter handle is listed in your resume
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://saurabh374.github.io",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  axios.defaults.baseURL = process.env.DOMAIN;

  return (
    <html lang="en">
      <head>
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#84cc16" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://saurabh374.github.io" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${chromate.variable} font-sans`}>
        <PostHogProvider>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
