import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/sites/billiondollartweets/Header";
import { Footer } from "@/components/sites/billiondollartweets/Footer";
import { Newsletter } from "@/components/sites/billiondollartweets/Newsletter";

export const metadata: Metadata = {
  title: "Trillion Dollar Tweets",
  description:
    "Twitter has some of the smartest people on Earth. But with the huge volume of content, most ideas get buried. A hand-picked directory of the best tweets, threads, and articles.",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
