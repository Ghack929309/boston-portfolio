import Experience from "@/components/experiences/Experience";
import { Project } from "@/components/project/Project";
import { About } from "@/components/about/About";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="max-w-[728px] mx-auto">
      <div className="w-full bg-white dark:bg-gray-900 border-x border-gray-100 dark:border-gray-800 box-content">
        <div className="px-3 md:px-16">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow py-12 space-y-12">
              <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
                <About />

                <Project />
                <Experience />

                {/* <Articles /> */}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
