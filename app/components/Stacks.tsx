import { Data, Frameworks, Language, Others, Styling } from "../data/data";
import Section from "./Section";

function Stacks() {
  return (
    <section id="Stack" className="border-t border-t-neutral-900 py-4 md:py-15">
      <Section num="02" section="Stacks" />

      <div className="flexItems pt-6 pb-4 border-b border-b-neutral-900  md:pt-18  md:pb-10">
        <h1 className="font-instrumental text-3xl  text-primary-300 md:text-[6vh]">
          Tools i reach for most often.
          <span className="italic text-gray-200  tracking-tight md:text-[5vh]">
            Teachnology evolves. Problem solving doesn&apos;t.
          </span>
        </h1>
      </div>

      <div>
        <div className="flex flex-col py-8 border-b border-b-neutral-900 space-y-4 text-sm md:gap-80 md:flex-row md:items-center md:spce-y-0 md:text-lg md:py-8">
          <span>01 Languages.</span>
          <ul className="flex items-center gap-9 font-instrumental text-gray-50 text-[17px] md:text-[22px] tracking-wide ">
            {Language.map((lang) => (
              <li key={lang.tool} className="flexItems gap-1.5">
                <span>{<lang.icon color={lang.color} size={16} />}</span>
                <span>{lang.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col py-4 border-b border-b-neutral-900 space-y-4 text-sm md:flex-row md:gap-88 md:items-center md:spce-y-0 md:text-lg md:py-8">
          <span>02 Styling.</span>
          <ul className="flex items-center  gap-9 font-instrumental text-gray-50 text-[18px] tracking-wide md:justify-center md:text-[22px]">
            {Styling.map((style) => (
              <li key={style.tool} className="flexItems gap-1.5">
                <span>{<style.icon color={style.color} size={16} />}</span>
                <span>{style.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col py-4 border-b border-b-neutral-900  space-y-4 text-sm md:flex-row md:gap-60 md:items-center md:spce-y-0 md:text-lg md:py-8">
          <span>03 Frameworks & libary.</span>
          <ul className="flex items-center  gap-9 font-instrumental text-gray-50 text-[18px] tracking-wide md:justify-center md:text-[22px] ">
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
        <div className="flex flex-col py-4 border-b border-b-neutral-900 space-y-4 text-sm md:flex-row md:gap-80 md:items-center md:spce-y-0 md:text-lg md:py-8">
          <span>04 Database.</span>
          <ul className="flex items-center gap-9 font-instrumental text-gray-50 text-[20px] tracking-wide md:justify-center md:text-[22px] ">
            {Data.map((data) => (
              <li key={data.tool} className="flexItems gap-1.5">
                <span>{<data.icon color={data.color} size={16} />}</span>
                <span>{data.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col py-4 border-b border-b-neutral-900  space-y-4 text-sm md:flex-row md:gap-85 md:items-center md:spce-y-0 md:text-lg md:py-8">
          <span>05 Others.</span>
          <ul className="flex items-center gap-7 font-instrumental text-gray-50 text-[18px] flex-wrap tracking-wide md:justify-center md:text-[22px]  ">
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
