import { Data, Frameworks, Language, Others, Styling } from "../data/data";
import Section from "./Section";

function Stacks() {
  return (
    <section id="Stack" className="border-t border-t-neutral-900 py-15">
      <Section num="02" section="Stacks" />

      <div className="flexItems pt-18 pb-10 border-b border-b-neutral-900">
        <h1 className="font-instrumental text-[6vh] text-primary-300">
          Tools i reach for most often.
          <span className="italic text-gray-200 text-[5vh] tracking-tight">
            Teachnology evolves. Problem solving doesn&apos;t.
          </span>
        </h1>
      </div>

      <div>
        <div className="flex items-center gap-80 py-8 border-b border-b-neutral-900">
          <span>01 Languages.</span>
          <ul className="flexItems gap-9 font-instrumental text-gray-50 text-[22px] tracking-wide ">
            {Language.map((lang) => (
              <li key={lang.tool} className="flexItems gap-1.5">
                <span>{<lang.icon color={lang.color} size={16} />}</span>
                <span>{lang.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-88 py-8 border-b border-b-neutral-900">
          <span>02 Styling.</span>
          <ul className="flexItems gap-9 font-instrumental text-gray-50 text-[22px] tracking-wide ">
            {Styling.map((style) => (
              <li key={style.tool} className="flexItems gap-1.5">
                <span>{<style.icon color={style.color} size={16} />}</span>
                <span>{style.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-60 py-8 border-b border-b-neutral-900">
          <span>03 Frameworks & libary.</span>
          <ul className="flexItems gap-9 font-instrumental text-gray-50 text-[22px] tracking-wide ">
            {Frameworks.map((framework) => (
              <li key={framework.tool} className="flexItems gap-1.5">
                <span>
                  {<framework.icon color={framework.color} size={16} />}
                </span>
                <span>{framework.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-80 py-8 border-b border-b-neutral-900">
          <span>04 Database.</span>
          <ul className="flexItems gap-9 font-instrumental text-gray-50 text-[22px] tracking-wide ">
            {Data.map((data) => (
              <li key={data.tool} className="flexItems gap-1.5">
                <span>{<data.icon color={data.color} size={16} />}</span>
                <span>{data.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-85 py-8 border-b border-b-neutral-900">
          <span>05 Others.</span>
          <ul className="flexItems gap-9 font-instrumental text-gray-50 text-[22px] tracking-wide ">
            {Others.map((other) => (
              <li key={other.tool} className="flexItems gap-1.5">
                <span>{<other.icon color={other.color} size={16} />}</span>
                <span>{other.tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Stacks;
