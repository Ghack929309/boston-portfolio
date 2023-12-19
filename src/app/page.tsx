import { Presentation } from "../components/presentation/Presentation";
import { portfolioData } from "../../utils/constant";
import { Project } from "@/components/project/Project";
import { Skills } from "../components/skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-w-full min-h-screen px-4">
      <Skills />
      <Presentation
        title={portfolioData.header.title}
        description={portfolioData.header.description}
      />
      <Project />
    </div>
  );
}
