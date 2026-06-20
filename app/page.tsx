"use client";
import Index from "./components/Index";
import Hero from "./components/Hero";
import Tape from "./components/Tape";
import About from "./components/About";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function page() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Hero />
      </div>
      <Tape />
      <div className="max-w-7xl mx-auto">
        <Index />
        <About />
        <Stacks />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default page;
