import { Metadata } from "next";

export const metaConfig: Metadata = {
  title: "Dzakiizza - Portfolio",
  description: "A personal website of Dzaki Izza",
  keywords: [
    "Personal Wesbite",
    "Dzaki Izza",
    "Portfolio",
    "Software Engineer",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Dzakiizza - Portfolio",
    description:
      "Hello I am Dzaki Izza. Highly interest in technology, product design, merging consulting and management skills for innovative",
  },
  openGraph: {
    type: "website",
    url: "https://dzakiizza-portfolio-app.vercel.app",
    title: "Dzakiizza - Portfolio",
    description:
      "Hello I am Dzaki Izza. Highly interest in technology, product design, merging consulting and management skills for innovative",
    siteName: "A personal website of Dzaki Izza",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
