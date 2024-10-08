import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"], weight: ['500'] })

export const metadata: Metadata = {
  title: "Recipe Sharing Platform",
  description: "Recipe Sharing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  );
}
