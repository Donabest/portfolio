"use client";

import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="relative flex justify-center items-baseline-last align-middle gap-4 mt-40 max-w-7xl ">
      <div className="flex flex-col text-sm font-sans italic uppercase opacity-70 ">
        <span>Portfolio /{new Date().getFullYear()}, </span>
        <span>Web Developer,</span>
        <span>Shopify Dev,</span>
        <span>Designer,</span>
        <span>Artist.</span>
      </div>
      <div className="flexItems ">
        <div className="flex flex-col items-start text-start gap-4">
          <span className="uppercase text-gray-100 text-sm tracking-widest">
            <Typewriter
              options={{
                strings: ["Frontend Engineer  .", "Shopify developer  ."],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>

          <h1 className="flex flex-col font-instrumental text-[9.5vw] leading-35 text-primary-100 ">
            Rabiu <br />
            <span className="inline-block italic  text-gray-100">
              Abdulazeez.&nbsp;
              <span className="text-[2vw] text-gray-50">( Don )</span>
            </span>
          </h1>
        </div>
      </div>

      <div className="absolute top-20 -left-10 text-xs opacity-60 italic">
        {/* <p>Building products that feel simple,fast and imposible to ignore</p> */}
        <p>I turn your ideas into creative impact,</p>
        <p>role frontend engineer,</p>
        <p>code is just typed thinking.</p>
      </div>

      <div className="absolute top-20 right-10 text-xs opacity-60 italic">
        <p>const [shipping, setShipping] = useState(true),</p>
        <p>6.5244° N, 3.3792° E — Lagos,</p>
        <p>designed in the browser, built for the world,</p>
      </div>
    </section>
  );
}

export default Hero;
