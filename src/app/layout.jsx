import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  default: {
    title: "Nexfy | Hassle free shopping",
    template: "%s | Nexfy",
  },
  description:
    "Nexfy a modern E-com platform. Save your time , Buy  quality products. hassle free shopping! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header section  */}
        <header className="sticky top-0 z-50">
          <Header />
        </header>
        {/* main section/ content */}
        {children}
        {/* Footer section  */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
