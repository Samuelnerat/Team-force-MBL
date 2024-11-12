import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat_Alternates } from "next/font/google";
import Head from "next/head";

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "TEAM FORCE – Next Generation Payment Solutions",
  description: "Discover Team Force, the next generation of secure, fast payment solutions and transactions for businesses and individuals.",
  openGraph: {
    type: "website",
    url: "https://team-force-mbl.vercel.app/",
    title: "TEAM FORCE – Next Generation Payment Solutions",
    description: "Discover Team Force, the next generation of secure, fast payment solutions and transactions for businesses and individuals.",
    siteName: "Teamforce",
    images: [
      {
        url: "https://team-force-mbl.vercel.app/Second-Logo.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Meta Tags for SEO */}
        <meta name="description" content={metadata.description} />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="payments, transaction, banking, next generation payments, secure payments, payment, online, account, teamforce, solution " />

        {/* Canonical */}
        <link rel="canonical" href="https://team-force-mbl.vercel.app/" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />

          {/* Apple Touch Icon */}
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      </Head>
      <body className={montserratAlternates.className}>
        {/* Main Heading and Page Content */}
        <Header />
        {children}
        <Footer />      
      </body>
    </html>
  );
}
