"use client";

import Typewriter from "typewriter-effect";

function page() {
  return (
    <div className="flex justify-center items-center text-2xl h-screen  ">
      <Typewriter
        options={{
          strings: ["  Comming Soon"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default page;
