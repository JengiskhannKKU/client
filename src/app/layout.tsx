import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNavBar } from "@/shared/components/navbar/main.navbar";
import { MainFooter } from "@/shared/components/footer/main.footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "หน้าลงทะเบียน",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainNavBar/>
        {children}
        <MainFooter/>
      </body>
    </html>
  );
}
