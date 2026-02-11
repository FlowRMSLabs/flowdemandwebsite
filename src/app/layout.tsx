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
  title: "Flow Demand AI | Cooperative Marketing Campaigns in Minutes",
  description:
    "AI marketing infrastructure for reps and manufacturers. Build and deploy cooperative marketing campaigns in minutes — across your entire rep network with full-funnel attribution.",
  openGraph: {
    title: "Flow Demand AI | Cooperative Marketing Campaigns in Minutes",
    description:
      "AI marketing infrastructure for reps and manufacturers. Build and deploy cooperative campaigns in minutes with full-funnel attribution.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
