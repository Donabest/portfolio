"use client";
import Index from "./components/Index";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tape from "./components/Tape";
import About from "./components/About";

function page() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Hero />
      </div>
      <Tape />
      <div className="max-w-7xl mx-auto">
        <Index />
        <About />
      </div>
    </main>
  );
}

export default page;
