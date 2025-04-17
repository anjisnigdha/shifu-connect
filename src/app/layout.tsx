import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "BSY - Bhaarat SaaS Yaatra",
  description: "Showcasing a new wave of entrepreneurs emerging from the roots of India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
