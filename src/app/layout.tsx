import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Company Wellness Solutions — The most innovative EAP in South Africa",
  description:
    "Turn-key corporate wellness — EAP, occupational health, wellness days and workshops, delivered locally across 87 countries.",
  metadataBase: new URL("https://companywellness.co.za"),
  openGraph: {
    title: "Company Wellness Solutions",
    description:
      "South Africa's highest-rated corporate wellness partner. EAP, OCC Health, Wellness Days, Workshops.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-fg font-sans selection:bg-mint/30 selection:text-fg">
        {children}
      </body>
    </html>
  );
}
