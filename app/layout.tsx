import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter,Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LegalFooter from "@/components/shared/LegalFooter";
import PrimaryFooter from "@/components/shared/PrimaryFooter";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const brandon2 = localFont({
  src: [
    {
      path: '../fonts/fonts/brandon/Brandon_thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_thin_it.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_light_it.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_reg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_reg_it.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_med.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_med_it.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_bld.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_bld_it.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_blk.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/fonts/brandon/Brandon_blk_it.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-brandon2',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "blacktomato",
  description: "travelling the world in style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${brandon2.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            
        {children}
        <PrimaryFooter/>
        <LegalFooter />
      </body>
    </html>
  );
}
