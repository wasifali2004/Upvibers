import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";
import LoadingWrapper from "@/components/LoadingWrapper";
import { Component } from "@/components/spotlight-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upvibers - Make Every Minute Count",
  description: "Transform your idle time into productive moments with AI-powered activity suggestions",
  icons: {
    icon: "/logo2.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <LoadingWrapper>
              <Navbar />
              <Component />
              {children}
            </LoadingWrapper>
          </ThemeProvider>
      </body>
    </html>
  );
}
