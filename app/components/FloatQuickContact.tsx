"use client";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { AnimatePresence, motion } from "framer-motion";
import { House, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const QuickContact = [
  {
    icon: House,
    to: "/",
    preview: "Home",
    external: false,
  },
  {
    icon: SiX,
    to: "https://x.com/donfttp",
    preview: "twitter",
    external: true,
  },
  {
    icon: SiGithub,
    to: "https://github.com/Donabest",
    preview: "github",
    external: true,
  },
  {
    icon: Mail,
    to: "mailto:rabiuazeez3@gmail.com",
    preview: "Email",
    external: true,
  },
];

function FloatQuickContact() {
  const [showQuickContact, setShowQuickContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5;
      const ContactSction = document.getElementById("Contact");

      let isOverSection = false;
      if (ContactSction) {
        const rect = ContactSction.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isOverSection = true;
        }
      }
      if (window.scrollY > heroHeight && !isOverSection) {
        setShowQuickContact(true);
      } else {
        setShowQuickContact(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {showQuickContact && (
        <motion.div
          className="fixed bottom-10 left-0 right-0 flexItems space-x-3 max-w-fit mx-auto bg-black/20 px-6 py-2.5 border border-secondary-400 backdrop-blur-3xl rounded-3xl "
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <ul className="flexItems space-x-3">
            {QuickContact.map((contact, i) => (
              <>
                <motion.li
                  key={i}
                  className="relative group px-3.5 py-2.5 rounded-xl hover:bg-gray-50/10"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 900, duration: 0.5 }}
                >
                  <Link
                    href={contact.to}
                    rel={contact.external ? "noopener noreferer" : undefined}
                    target={contact.external ? "_blank" : undefined}
                  >
                    <contact.icon size={20} />
                    <span className="absolute -top-10 left-0 text-white text-sm bg-black px-2 opacity-0 border border-gray-200 rounded-xl group-hover:opacity-100 group-hover:-translate-y-0.5 transition-transform duration-150">
                      {contact.preview}
                    </span>
                  </Link>
                </motion.li>
                <div className="border-l border-l-secondary-400 py-3"></div>
              </>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatQuickContact;
