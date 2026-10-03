import { Geist, Geist_Mono, Capriola, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const capriola = Capriola({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-capriola",
});

export interface ContactInfoFields {
  email?: string;
  githubLink?: string;
  linkedinLink?: string;
}

export const contactInfo: ContactInfoFields = {
  email: "emily.ung3@gmail.com",
  githubLink: "https://github.com/emilyungm",
  linkedinLink: "https://www.linkedin.com/in/emily-m-ung/",
};

export const metadata = {
  title: "EmFolio",
  author: "Emily Ung",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        capriola.variable,
        "font-mono",
        jetbrainsMono.variable,
      )}
    >
      <body className="flex min-h-dvh flex-col bg-surface">
        <Navbar title={metadata.title} />
        {children}
        <Footer authorName={metadata.author} contactInfo={contactInfo} />
      </body>
    </html>
  );
}
