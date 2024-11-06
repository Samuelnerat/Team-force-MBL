import "./globals.css";
import Header from "@/components/Header";
import { Montserrat_Alternates } from "next/font/google";

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
title: "TEAM FORCE",
description: "The next generation payment ways.",

openGraph: {
  type: "website",
  url: "",
  title: "Teamforce",
  description: "The next generation payment ways.",
  siteName: "Teamforce",
  images: [
    {
      url: "/logo.png",
    },
  ],
},
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserratAlternates.className}>
      <Header />
        {children}
      </body>
    </html>
  );
}
