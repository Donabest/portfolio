"use client";

import { Sun, Search } from "lucide-react";
import { motion } from "framer-motion";
import { type navLinks } from "../utilities/type";
import Link from "next/link";
const navLinks: navLinks[] = [
  {
    nav: "[01 About]",
    link: "/#About",
  },
  {
    nav: "[02 Stack]",
    link: "/#Stack",
  },
  {
    nav: "[03 Projects]",
    link: "/#Projects",
  },
  {
    nav: "[04 Contact]",
    link: "/#Contact",
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-4 text-smtext-gray-100 backdrop-blur-2xl border-b border-b-gray-900 uppercase tracking-widest z-99">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="group">
          <Link href="/" className="flexItems group-hover:text-primary-100">
            <span className="group-hover:text-amber-500 text-4xl ">&bull;</span>
            Don
          </Link>
        </h1>
        <ul className="flexItems gap-6">
          {navLinks.map((navlink, i) => (
            <motion.li
              key={i}
              className="text-[12px] hover:text-primary-100 transition-color"
              whileHover={{
                y: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 3,
                ease: "easeInOut",
              }}
            >
              <Link href={navlink.link}>{navlink.nav}</Link>
            </motion.li>
          ))}
        </ul>
        <div className="flexItems gap-3">
          <p className="flexItems gap-1.5 text-[12px]">
            <span className="text-green-500 text-3xl animate-pulse">
              &bull;
            </span>
            available
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="search"
              className="px-3 py-1 text-xs border border-gray-900 outline-0  w-30 rounded-sm focus:border-gray-700"
            />
            <Search size={12} className="absolute top-2 right-2" />
          </div>

          <div className="cursor-pointer">
            <Sun size={15} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
