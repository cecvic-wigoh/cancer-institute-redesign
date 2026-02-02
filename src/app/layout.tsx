import type { Metadata } from "next";
import { PT_Sans_Narrow } from "next/font/google";
import "./globals.css";

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CI(WIA) Website Redesign - Design Mockups",
  description: "Design mockups for the Cancer Institute (WIA) website redesign project, showcasing multiple design variations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSansNarrow.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
