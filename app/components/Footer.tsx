"use client";

import { MoveUpRight } from "lucide-react";
import { socialContact } from "../data/data";
import Link from "next/link";
import { motion } from "framer-motion";
function Footer() {
  return (
    <footer className="border-t border-t-neutral-900">
      <div className="max-w-7xl mx-auto py-10 space-y-3">
        <h1 className="text-5xl font-instrumental italic">Don.</h1>
        <div className="flex justify-between items-center pb-3">
          <div className="flexItems space-x-4 uppercase font-mono tracking-wider text-neutral-700 text-sm">
            <p>Software Engineer</p>
            <span> &bull;</span>
            <p>Shopify Dev</p>
          </div>
          <div className="flexItems space-x-2">
            {socialContact.map((contact) => (
              <Link href={contact.link} key={contact.link} className="group ">
                <motion.span
                  className="flexItems gap-2 font-mono text-gray-200 transition-colors group-hover:text-primary-100"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 700 }}
                >
                  {contact.social}
                  <MoveUpRight
                    size={13}
                    className="text-gray-200 group-hover:text-primary-100 group-hover:scale-120"
                  />
                  &nbsp;
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 text-neutral-700 text-sm border-t border-t-neutral-900 ">
          <p>
            &copy; {new Date().getFullYear()} &bull; Rabiu Abdulazeez &bull; Don
            &bull; All Right Reserved.
          </p>
          <p>Hire Me Today.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
