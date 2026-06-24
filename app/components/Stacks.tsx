import { Data, Frameworks, Language, Others, Styling } from "../data/data";
import Section from "./Section";

function Stacks() {
  return (
    <section id="Stack" className="border-t border-t-neutral-900 py-4 md:py-15">
      <Section num="02" section="Stacks" />

      <div className="flexItems pt-6 pb-4 border-b border-b-neutral-900 md:pt-18 md:pb-10">
        <h1 className="font-instrumental text-3xl text-primary-300 md:text-5xl lg:text-[6vh]">
          Tools i reach for most often.
          <span className="italic text-gray-200 tracking-tight md:text-4xl lg:text-[5vh]">
            Teachnology evolves. Problem solving doesn&apos;t.
          </span>
        </h1>
      </div>

      <div>
        <div className="flex flex-col py-8 border-b border-b-neutral-900 gap-4 text-sm md:grid md:grid-cols-[minmax(10rem,18rem)_1fr] md:items-center md:text-lg">
          <span className="shrink-0">01 Languages.</span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 font-instrumental text-gray-50 text-[17px] md:text-[22px] tracking-wide">
            {Language.map((lang) => (
              <li key={lang.tool} className="flexItems gap-1.5">
                <span>{<lang.icon color={lang.color} size={16} />}</span>
                <span>{lang.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col py-4 border-b border-b-neutral-900 gap-4 text-sm md:grid md:grid-cols-[minmax(10rem,18rem)_1fr] md:items-center md:text-lg md:py-8">
          <span className="shrink-0">02 Styling.</span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 font-instrumental text-gray-50 text-[18px] tracking-wide md:text-[22px]">
            {Styling.map((style) => (
              <li key={style.tool} className="flexItems gap-1.5">
                <span>{<style.icon color={style.color} size={16} />}</span>
                <span>{style.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col py-4 border-b border-b-neutral-900 gap-4 text-sm md:grid md:grid-cols-[minmax(10rem,18rem)_1fr] md:items-center md:text-lg md:py-8">
          <span className="shrink-0">03 Frameworks & libary.</span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 font-instrumental text-gray-50 text-[18px] tracking-wide md:text-[22px]">
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
        <div className="flex flex-col py-4 border-b border-b-neutral-900 gap-4 text-sm md:grid md:grid-cols-[minmax(10rem,18rem)_1fr] md:items-center md:text-lg md:py-8">
          <span className="shrink-0">04 Database.</span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 font-instrumental text-gray-50 text-[20px] tracking-wide md:text-[22px]">
            {Data.map((data) => (
              <li key={data.tool} className="flexItems gap-1.5">
                <span>{<data.icon color={data.color} size={16} />}</span>
                <span>{data.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col py-4 border-b border-b-neutral-900 gap-4 text-sm md:grid md:grid-cols-[minmax(10rem,18rem)_1fr] md:items-center md:text-lg md:py-8">
          <span className="shrink-0">05 Others.</span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 font-instrumental text-gray-50 text-[18px] tracking-wide md:text-[22px]">
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
