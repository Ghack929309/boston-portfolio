import Experience from "@/components/experiences/Experience";
import Articles from "@/components/articles/Articles";
import { Project } from "@/components/project/Project";
import { About } from "@/components/about/About";

export default function Home() {
  return (
    <div className="flex  flex-col min-w-full px-4 ">
      <About />
      <Project />
      <Experience />
      {/* <Articles /> */}
    </div>
  );
}
