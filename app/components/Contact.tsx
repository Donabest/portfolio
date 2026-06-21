import Link from "next/link";
import Section from "./Section";
import { MoveUpRight } from "lucide-react";
import { socialContact } from "../data/data";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="Contact" className="border-t border-t-neutral-900 py-16">
      <Section num="04" section="Contact" />
      <div className="flex flex-col justify-center items-start py-8  font-instrumental max-w-4xl mx-auto  ">
        <h1 className="text-[3vw] text-primary-200">
          An idea without a developer is just a note.&nbsp;
          <span className="text-gray-50">Let&apos;s fix that.</span>
        </h1>
        <p className="text-[16px] font-sans text-gray-100">
          Open to freelance work, full-time opportunities,Shopify storefronts,
          and collaborations that push me. If you have something worth building,
          I want to hear about it. I reply fast.
        </p>
      </div>
      <div className="flex justify-between items-start border-t border-t-neutral-900 pt-10 pb-10">
        <div className="space-y-6 text-xs">
          <div className="space-y-1.5">
            <h3 className="font-mono text-gray-200 uppercase tracking-widest">
              Direct
            </h3>
            <p className="group text-white space-x-3 cursor-pointer ">
              <span className=" text-[1.6vw] font-instrumental border-b border-b-neutral-400 group-hover:border-b-primary-100 ">
                rabiuazeez3@gmail.com
              </span>
              <span className=" text-gray-100 text-sm group-hover:text-primary-100">
                Copy
              </span>
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-gray-200 uppercase tracking-widest">
              Elsewhere
            </h4>
            <div className="space-y-2">
              {socialContact.map((contact) => (
                <Link
                  href={contact.link}
                  key={contact.link}
                  className="flex items-center space-x-4 group"
                >
                  <span className="font-mono  text-gray-200 uppercase tracking-widest">
                    {contact.social}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-primary-100">
                    {contact.socialUsername}
                    <MoveUpRight
                      size={13}
                      className="text-gray-200 group-hover:text-primary-100 group-hover:scale-120"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
