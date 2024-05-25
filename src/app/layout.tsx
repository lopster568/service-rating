import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayuvya Ayurveda",
  description:
    "Buy best ayurvedic products at affordable prices. Explore range of skin, health, sexual wellness & more. Free shipping & top rated products online.",
    icons: {
      icon: '/favicon.ico',
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col justify-center items-center gap-8 p-12 scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
