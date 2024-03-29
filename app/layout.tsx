import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/navBar/navBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Deports",
  description: "Una Aplicación de Deportes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="">
       
        {children}
        
      </body>
    </html>
  );
}
