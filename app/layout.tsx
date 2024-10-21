import type { Metadata } from "next";
import "./globals.css";

import { Alegreya } from 'next/font/google';

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400','500', '600', '700', '800', '900'],
  variable: '--font-alegreya'
});

export const metadata: Metadata = {
  title: "Kedai Buku Kita (KBK)",
  description: "KBK is a marketplace for pel-loved books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${alegreya.variable}`}>
        {children}
      </body>
    </html>
  );
}
