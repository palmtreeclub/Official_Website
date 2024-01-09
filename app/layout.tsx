import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/v1/Navbar";
import Footer from "./components/v1/Footer";
import { FirebaseProvider } from "./context/firebase";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GDSC SOU",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative dark:bg-black`}>
        <Suspense
          fallback={<h1>Loading....</h1>}
          unstable_expectedLoadTime={10}
        >
          <FirebaseProvider>
            {children}
            {/* <Footer /> */}
          </FirebaseProvider>
        </Suspense>
      </body>
    </html>
  );
}
