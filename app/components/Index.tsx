import { motion } from "framer-motion";
import { type navLinks } from "../utilities/type";
import { MoveRight } from "lucide-react";

const links: navLinks[] = [
  {
    nav: "[ 01 . About ]",
    link: "#About",
  },
  {
    nav: "[ 02 . Projects ]",
    link: "#Projects",
  },
  {
    nav: "[ 03 . Stack ]",
    link: "#Stack",
  },
  {
    nav: "[ 04 . Contact ]",
    link: "#Contact",
  },
];

function Index() {
  return (
    <section className="grid grid-cols-2 py-16 ">
      <div className="col-span-1 ">
        <p className="font-Nunito font-light tracking-wide text-neutral-200">
          I design and build interfaces that people actually use. My work sits
          at the intersection of clean code and intentional design, components
          that scale, UIs that feel inevitable, and products shipped without
          waiting for perfect. Currently deepening my fullstack roots while
          building in public.
        </p>

        <div className="flex gap-6 items-center mt-6 font-mono text-xs">
          <motion.button
            type="button"
            className="bg-primary-100 text-secondary-100 px-10 py-3 uppercase tracking-widest cursor-pointer transition-colors hover:bg-primary-400 "
            whileHover={{ y: -2 }}
          >
            <a href="#Projects"> View_Projects</a>
          </motion.button>
          <motion.button
            type="button"
            className=" px-10 py-3 border border-neutral-800 uppercase tracking-widest cursor-pointer transition-colors hover:border-neutral-400"
            whileHover={{ y: -2 }}
          >
            <a href="#Contact" className="flexItems  gap-2">
              Start a Projects <MoveRight size={15} />
            </a>
          </motion.button>
        </div>
      </div>
      <div className="place-items-end">
        <ul className="flex flex-col gap-2 italic -skew-x-12 text-sm tracking-widest text-gray-200 uppercase">
          <li>Index</li>
          {links.map((list) => (
            <motion.li
              key={list.nav}
              className="hover:text-primary-100"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 800, damping: 6 }}
            >
              <a href={list.link}>{list.nav}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Index;
