import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const newRodin = localFont({ src: "./fonts/new-rodin.otf" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={newRodin.className}>{children}</body>
    </html>
  );
}
