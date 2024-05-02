import "react-loading-skeleton/dist/skeleton.css";
import "@/app/css/globals.css";
import { AppContext } from "@/context/AppContext";
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/footer/Footer";
import Theme from "./theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 tracking-tight`}
      >
        <Theme>
          <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
            <div className="max-w-[728px] mx-auto">
              <div className="w-full bg-white dark:bg-gray-900 border-x border-gray-100 dark:border-gray-800 box-content">
                <div className="px-3 md:px-16">
                  <div className="flex flex-col min-h-screen">
                    <AppContext>
                      <Header />
                      <main className="grow py-12 space-y-12">{children}</main>
                      <Footer />
                    </AppContext>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
