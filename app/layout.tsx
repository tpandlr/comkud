import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comkud.co.zw"),
  title: {
    default: "COMKUD Analytical Solutions | Environmental Consultancy Zimbabwe",
    template: "%s | COMKUD Analytical Solutions",
  },
  description:
    "Environmental consultancy, air emissions monitoring, laboratory analysis and technical training in Zimbabwe.",
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://comkud.co.zw",
    siteName: "COMKUD Analytical Solutions",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${inter.className} h-full scroll-smooth antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-surface font-body text-on-surface">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
