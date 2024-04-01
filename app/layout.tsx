import React from "react";

import LayoutHeader from "./Molecules/LayoutHeader";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Eventogy - Static",
  description: "events list",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <main>
          <LayoutHeader />
          {children}
        </main>
      </body>
    </html>
  )
};

export default RootLayout;
