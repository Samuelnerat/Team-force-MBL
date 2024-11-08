// import "./globals.css";
// import Header from "@/components/Header";
// import { Montserrat_Alternates } from "next/font/google";

// export const montserratAlternates = Montserrat_Alternates({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "500", "600", "700", "800", "900"],
//   variable: "--font-plus-jakarta",
// });

// export const metadata = {
// title: "TEAM FORCE",
// description: "The next generation payment ways.",

// openGraph: {
//   type: "website",
//   url: "",
//   title: "Teamforce",
//   description: "The next generation payment ways.",
//   siteName: "Teamforce",
//   images: [
//     {
//       url: "/logo.png",
//     },
//   ],
// },
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={montserratAlternates.className}>
//       <Header />
//         {children}
//       </body>
//     </html>
//   );
// }



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
  title: "TEAM FORCE",
  description: "The next generation payment ways.",
  openGraph: {
    type: "website",
    url: "https://team-force-mbl.vercel.app/",
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
      <Head>
        <title>{metadata.title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <meta http-equiv="X-UA-Compatible" content="IE-edge" />
        <meta name="keywords" content="payments, transaction, banking"/>
        <link rel="canonical" href="https://team-force-mbl.vercel.app/" />
        {/* Open Graph tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
      </Head>
      <body className={montserratAlternates.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
