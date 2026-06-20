import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { type project } from "../utilities/type";

type projectProp = { project: project };

function ProjectCard({ project }: projectProp) {
  return (
    <div className="group rounded-xl border border-neutral-800 overflow-hidden bg-neutral-950 hover:border-neutral-700 transition-colors duration-150">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
        />
      </div>

      <div className="p-5 space-y-4">
        <h3 className="font-instrumental text-xl text-white">
          {project.title}
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-jetbrains px-2.5 py-1 rounded-md border border-neutral-800 text-neutral-400 bg-neutral-900"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="border-t border-neutral-800" />

        <div className="flex items-center gap-3 pt-1">
          <a
            href={project.demo}
            className="flex items-center gap-1.5 text-sm font-medium bg-white text-black px-4 py-1.5 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Live demo <ArrowUpRight size={14} />
          </a>
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-sm font-medium border border-neutral-700 text-neutral-300 px-4 py-1.5 rounded-lg hover:border-neutral-500 hover:text-white transition-colors"
          >
            GitHub <SiGithub size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
