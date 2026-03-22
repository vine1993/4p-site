import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Four Pixels — Agência Digital",
  description:
    "Criamos sites e aplicativos que convertem. Agência digital especializada em desenvolvimento web e mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} antialiased`}>
      <body className="min-h-screen font-(--font-dm-sans)">{children}</body>
    </html>
  );
}
