import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

function page() {
  return (
    <section className="py-24 max-w-6xl mx-auto">
      <Link
        href="/"
        className="flex gap-2 items-center transition-colors hover:text-primary-400"
      >
        <ArrowLeft /> Go Back
      </Link>

      <div className="mt-12 space-y-3">
        <h1 className="text-7xl text-primary-300 font-instrumental">
          All Projects.
        </h1>
        <p className="text-gray-200">
          All of my projects archive of experiments,application and systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default page;
