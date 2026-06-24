"use client";

import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section
      id="Home"
      className="relative flex flex-col items-start gap-4 mt-24 sm:mt-28 md:mt-40 md:max-w-7xl md:flex-row md:items-end md:justify-center"
    >
      <div className="flex flex-col text-xs font-sans italic uppercase opacity-70 md:text-sm">
        <span>Portfolio /{new Date().getFullYear()}, </span>
        <span>Web Developer,</span>
        <span>Shopify Dev,</span>
        <span>Designer,</span>
        <span>Artist.</span>
      </div>
      <div className="flexItems ">
        <div className="flex flex-col items-start text-start gap-4">
          <span className="uppercase text-xs text-gray-100 md:text-sm tracking-widest">
            <Typewriter
              options={{
                strings: ["Frontend Engineer  .", "Shopify developer  ."],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>

          <h1 className="flex flex-col font-instrumental  text-primary-100 text-[11vw] leading-15 md:leading-35 md:text-[9.5vw]">
            Rabiu
            <span className="inline-block italic text-gray-100">
              Abdulazeez.&nbsp;
              <span className="text-[clamp(1.25rem,5vw,2rem)] md:text-[2vw] text-gray-50">
                ( Don )
              </span>
            </span>
          </h1>
        </div>
      </div>

      <div className="hidden absolute top-20 left-0 text-xs opacity-60 italic md:block">
        {/* <p>Building products that feel simple,fast and imposible to ignore</p> */}
        <p>I turn your ideas into creative impact,</p>
        <p>role frontend engineer,</p>
        <p>code is just typed thinking.</p>
      </div>

      <div className="absolute top-10 right-0 max-w-[65vw] text-right text-[10px] opacity-40 italic sm:max-w-none sm:text-left sm:text-[11px] md:right-10 md:top-20 md:opacity-60 md:text-xs">
        <p>const [shipping, setShipping] = useState(true),</p>
        <p>6.5244° N, 3.3792° E — Lagos,</p>
        <p>designed in the browser, built for the world,</p>
      </div>
    </section>
  );
}

export default Hero;
