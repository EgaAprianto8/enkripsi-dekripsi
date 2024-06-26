import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const code = Source_Code_Pro({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Advanced Encryption Standard (AES)",
  description: "Made By Ega Aprianto (227006018)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white min-h-screen overflow-hidden">
        {children}
        </div>
      </body>
    </html>
  );
}
