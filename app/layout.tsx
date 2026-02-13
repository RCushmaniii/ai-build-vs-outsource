import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4, DM_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-context";
import { LocaleProvider } from "@/lib/locale-context";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Build vs. Outsource — Decision Framework | CushLabs",
  description:
    "Interactive weighted decision framework for evaluating build vs. outsource logistics decisions. 20 criteria across 5 categories with real-time scoring.",
  metadataBase: new URL("https://ai-build-vs-outsource.vercel.app"),
  openGraph: {
    title: "Build vs. Outsource — Decision Framework",
    description:
      "Data-driven logistics decision tool. 20 weighted criteria, real-time scoring.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${sourceSerif.variable} ${dmMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <TooltipProvider>
              <SiteHeader />
              {children}
            </TooltipProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
