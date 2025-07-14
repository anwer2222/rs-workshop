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
  title: "Rose Nest",
  description: "Rose Nest - session",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body //  bg-cover bg-no-repeat bg-center
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url(/hangryhippo.png)] bg-fixed bg-size-[1000px] md:bg-auto overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
