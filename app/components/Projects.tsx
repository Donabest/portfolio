import Link from "next/link";
import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import { ArrowRight } from "lucide-react";

function Projects() {
  const projectArr = [...projects];
  const FourProjects = projectArr.slice(0, 4);
  return (
    <section id="Projects" className="py-6 md:py-18">
      <Section num="03" section="Projects" />
      <div className="grid grid-cols-1 gap-6 pt-12 md:pt-18 md:grid-cols-2">
        {FourProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <Link
          href="/project"
          className="flexItems gap-1.5 mt-10 px-8 py-1.5 border border-gray-200 transition-colors duration-300 hover:bg-white/80 hover:text-black md:mt-20"
        >
          See All Project <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
