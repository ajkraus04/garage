import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garage - Vehicle Marketplace",
  description: "Find and sell vehicles in our marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} antialiased min-h-full bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
