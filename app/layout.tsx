import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/v1/Navbar";
import Footer from "./components/v1/Footer";
import { FirebaseProvider } from "./context/firebase";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palm Tree Club",
  description:
    "Join us for an experience of wide range of activities including but not limited to, learning indemand software, updating one’s technical facts, improving self-confidence, soft skills etc. \n \n \n  Students who want to test the limits of their knowledge and explore new possibilities. If you are passionate about all things computer,then you’re in the right place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative dark:bg-black`}>
        <FirebaseProvider>{children}</FirebaseProvider>
      </body>
    </html>
  );
}
