import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "United Kingdom Indonesia Visa | UK Indonesia Visa | Fast & Reliable Visa Services",
  description: "Professional United Kingdom Indonesia visa services through UK Indonesia Visa. 16+ years experience serving 97 countries. Fast, reliable visa processing for your Indonesian adventure from the UK. Learn about UK-Indonesia strategic partnership, tourism cooperation, and bilateral relations.",
  keywords: ["United Kingdom Indonesia Visa", "UK Indonesia Visa", "Indonesia Visa from UK", "UK Visa Extension Indonesia", "Tourist Visa Indonesia UK", "Business Visa Indonesia UK", "VOA Indonesia UK", "UK Indonesia Strategic Partnership", "Indonesia UK Relations", "UK Indonesia Tourism", "Indonesia UK Trade", "UK Indonesia Investment", "Indonesia UK Diplomatic Relations"],
  authors: [{ name: "UK Indonesia Visa" }],
  metadataBase: new URL("https://ukindonesiavisas.online"),
  alternates: {
    canonical: "https://ukindonesiavisas.online",
  },
  icons: {
    icon: "/icon.webp",
  },
  openGraph: {
    title: "United Kingdom Indonesia Visa - Professional Visa Services",
    description: "Fast, reliable, and professional visa services for your Indonesian adventure through UK Indonesia Visa from the United Kingdom.",
    url: "https://ukindonesiavisas.online",
    siteName: "UK Indonesia Visa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UK Indonesia Visa Services",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "United Kingdom Indonesia Visa | UK Indonesia Visa",
    description: "Professional Indonesian visa services with 16+ years experience. Fast, reliable, and trusted by thousands worldwide from the United Kingdom.",
    images: ["/og-image.png"],
    site: "@IndonesianVisas",
    creator: "@IndonesianVisas",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    "ICBM": "51.5074, -0.1278",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased h-full w-full bg-slate-50`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
