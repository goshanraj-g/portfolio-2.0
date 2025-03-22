import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header"; // Optional, if you have one

export const metadata: Metadata = {
  title: "Goshanraj Govindaraj",
  description: "Goshanraj Govindaraj's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Optional global Header */}
        {/* <Header /> */}

        {/* All pages will render inside here */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
