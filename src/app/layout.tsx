import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello!",
  description: "Rayyan's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-pallete-4 absolute -z-10 h-screen w-screen" />
        <div className="overflow-hidden ff-mono">{children}</div>
      </body>
    </html>
  );
}
