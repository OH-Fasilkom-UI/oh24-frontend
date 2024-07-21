import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/ui/footer";

const rifficFont = localFont({
  src: "./fonts/rifficfree-bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-riffic",
});

const texGyreAdventorFont = localFont({
  src: [
    {
      path: "./fonts/texgyreadventor-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/texgyreadventor-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/texgyreadventor-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/texgyreadventor-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-tex-gyre-adventor",
});

export const metadata: Metadata = {
  title: "Open House Fasilkom UI 2024",
  description: "Open House Fasilkom UI 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${texGyreAdventorFont.variable} ${rifficFont.variable}`}
    >
      <body className="font-tga font-normal h-screen flex flex-col justify-between">
        {children}
        <Footer

        />
      </body>
    </html>
  );
}
