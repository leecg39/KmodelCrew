import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google"; // Import Google Font
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "K-Model Crew Academy",
  description: "Senior Model Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${cormorantGaramond.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
