import type { Metadata } from "next";
import "./globals.css";
import Hero from "./page";

export const metadata: Metadata = {
  title: "Projeto Ilha",
  description: "Projeto Ilha - Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
