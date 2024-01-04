import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import { AppContext } from "@/context/AppContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/footer/Footer";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clement Portfolio",
  description:
    "I'm Chris Clement UI Designer /UX Designer & Researcher I help users to easily interact with your projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`absolute top-0 z-[-2]  w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ${inter.className}`}>
        <AppContext>
          <Header />
          <div className="pt-20">{children}</div>
          <div className="bg-white">
            <SocialMedia />
            <Footer />
          </div>
        </AppContext>
      </body>
    </html>
  );
}
