"use client";
import Index from "./components/Index";
import Hero from "./components/Hero";
import Tape from "./components/Tape";
import About from "./components/About";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Initialization from "./components/Initialization";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";
import Navbar from "./components/Navbar";
import FloatQuickContact from "./components/FloatQuickContact";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";

function Page() {
  const [ready, setReady] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("initialized") === "true";
  });

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handler = useCallback(() => {
    sessionStorage.setItem("initialized", "true");
    setReady(true);
  }, []);

  if (!hydrated) return null;

  return (
    <>
      {!ready && <Initialization handler={handler} />}
      {ready && (
        <AnimatePresence mode="wait">
          <Navbar />
          <motion.div
            className={cn("w-full transition-opacity duration-200")}
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 100, y: 0 }}
          >
            <div className="px-4 sm:px-6 max-w-7xl mx-auto">
              <Hero />
            </div>
            <Tape />
            <div className="px-4 sm:px-6 max-w-7xl mx-auto">
              <Index />
              <About />
              <Stacks />
              <Projects />
              <Contact />
            </div>
          </motion.div>
          <FloatQuickContact />
          <Footer />
        </AnimatePresence>
      )}
    </>
  );
}

export default Page;
