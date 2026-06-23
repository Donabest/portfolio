"use clients";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../utilities/type";

type props = {
  navLinks: navLinks[];
  open: boolean;
  close: () => void;
};
function MobileNavigation({ open, navLinks, close }: props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.ul
          className="divide-y divide-neutral-800 space-y-2 pt-6 md:hidden"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          {navLinks.map((navlink, i) => (
            <motion.li
              key={i}
              className="text-[12px] hover:text-primary-100 transition-color py-2"
              whileHover={{
                y: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 3,
                ease: "easeInOut",
              }}
              onClick={close}
            >
              <Link href={navlink.link}>{navlink.nav}</Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default MobileNavigation;
