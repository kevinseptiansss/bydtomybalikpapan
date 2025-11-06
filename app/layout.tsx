import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BYD Tomy Balikpapan - Mobil Listrik Premium",
  description:
    "Dealer resmi BYD di Balikpapan. Jelajahi koleksi mobil listrik premium BYD dengan teknologi terdepan dan harga terbaik.",
  keywords: [
    "BYD",
    "Mobil Listrik",
    "Electric Vehicle",
    "BYD Balikpapan",
    "BYD Tomy",
    "Denza D9",
    "BYD Sealion 7",
    "BYD Seal",
    "BYD Atto 3",
    "BYD Dolphin",
    "Kalimantan Timur",
  ],
  authors: [{ name: "BYD Haka Auto Balikpapan" }],
  creator: "BYD Haka Auto Balikpapan",
  publisher: "BYD Haka Auto Balikpapan",
  metadataBase: new URL("https://bydtomybalikpapan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BYD Tomy Balikpapan - Mobil Listrik Premium",
    description:
      "Dealer resmi BYD di Balikpapan. Jelajahi koleksi mobil listrik premium BYD dengan teknologi terdepan dan harga terbaik.",
    url: "https://bydtomybalikpapan.com",
    siteName: "BYD Tomy Balikpapan",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "BYD Tomy Balikpapan - Mobil Listrik Premium",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BYD Tomy Balikpapan - Mobil Listrik Premium",
    description:
      "Dealer resmi BYD di Balikpapan. Jelajahi koleksi mobil listrik premium BYD dengan teknologi terdepan dan harga terbaik.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/byd logo.svg", type: "image/svg+xml" },
      { url: "/byd logo.png", type: "image/png" },
    ],
    apple: [{ url: "/byd logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/byd logo.svg",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
