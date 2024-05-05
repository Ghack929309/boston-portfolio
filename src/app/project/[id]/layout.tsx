import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/footer/Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-full bg-white dark:bg-gray-900 border-x border-gray-100 dark:border-gray-800 box-content">
        <div className="px-3 md:px-16">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow py-12 space-y-12">
              <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
