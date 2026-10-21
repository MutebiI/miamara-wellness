
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import the footer
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Miamara Wellness Centre",
  description: "Beating the stigma around mental health in Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer /> {/* Add the footer here */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}