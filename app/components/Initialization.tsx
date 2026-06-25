import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import TypeWriter from "@/helper/Typewriter";
import wait from "@/helper/wait";

const steps = [
  "✔ rabiu-abdulazeez............done",
  "✔ user-experience.............done",
  "✔ clean-interfaces............done",
  "✔ responsive layout.............done",
  "✔ compiling projects.............done",
  "✔ problem solving.............done",
  "✔ optimizing performance.............done",
  "✔ status: ready.............done",
];

function Initialization({ handler }: { handler: () => void }) {
  const [command, setCommand] = useState<string>("");
  const [moduleInstalling, setModuleInstalling] = useState("");
  const [start, setStart] = useState("");
  const [welcome, setWelcome] = useState("");
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [visible, setVisible] = useState<number[]>([]);
  const [phase, setPhase] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    async function phaseAnimation(phase: number) {
      await wait(50);
      setVisible((prev) => [...prev, phase]);
    }
    async function run() {
      await TypeWriter("npm install @don/portfolio", setCommand);
      await wait(100);

      setPhase(1);
      await phaseAnimation(1);
      await wait(110);

      setPhase(2);
      await TypeWriter("installing modules...", setModuleInstalling);
      await wait(120);

      setPhase(3);
      await phaseAnimation(3);
      for (let i = 0; i <= steps.length; i++) {
        await wait(80);
        setVisibleSteps((prev) => [...prev, i]);
      }
      await TypeWriter(" @don/portfolio@2026.1.0 start", setStart, 10);
      await wait(130);

      setPhase(4);
      await phaseAnimation(4);
      await wait(60);

      await TypeWriter(" Welcome", setWelcome, 30);
      await wait(300);

      setFinished(true);
      handler();
    }
    run();
  }, [handler]);

  return (
    <>
      {!finished && (
        <div
          className={cn(
            "flex flex-col justify-center items-center h-screen tracking-wider max-sm:h-auto max-sm:min-h-dvh max-sm:px-4 max-sm:py-6",
          )}
        >
          <div className="flex flex-col space-y-4 italic text-sm max-sm:w-full max-sm:space-y-3 max-sm:text-xs">
            <div className="italic text-gray-200 text-sm max-sm:text-xs">
              <h3 className="text-[#eeab54]">DON/OS [Build 0.0.0.0.26100]</h3>
              <p className="font-intrumental">
                &copy; Rabiu Abdulazeez Corporation. All rights reserved.
              </p>
            </div>

            <div className="px-6 py-4 space-y-3 bg-secondary-200 border border-secondary-400 shadow-lg rounded-lg max-sm:max-h-[78dvh] max-sm:w-full max-sm:overflow-y-auto max-sm:overflow-x-hidden max-sm:px-3 max-sm:py-3">
              <div className="max-sm:wrap-break-word">
                <span>C:\Users\Visitor\&gt; {command}</span>
                {phase === 0 && <span className="animate-pulse">|</span>}
              </div>

              {phase >= 1 && (
                <>
                  <div
                    className={cn(
                      visible.includes(1)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2",
                      "duration-150 transition-all space-y-3 max-sm:wrap-break-word",
                    )}
                  >
                    <div>
                      <p>
                        npm warn deprecated feelings@1.0.0 use empathy instead
                      </p>
                      <p>npm warn deprecated coffee@∞ no substitute found</p>
                    </div>

                    <div>
                      <p>added 6 packages in 3s</p>
                    </div>

                    <div>
                      <p>@don/portfolio@2026.1.0 installed</p>
                    </div>
                  </div>
                </>
              )}

              <div className="max-sm:wrap-break-word">
                <span>{moduleInstalling}</span>
                {phase === 2 && <span className="animate-pulse">|</span>}
              </div>

              {phase >= 3 && (
                <div className="tracking-widest max-sm:tracking-normal">
                  <ul>
                    {steps.map((step, i) => (
                      <li
                        key={i}
                        className={cn(
                          "transition-opacity duration-300 max-sm:wrap-break-word",
                          visibleSteps.includes(i)
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="max-sm:wrap-break-word">
                {start && (
                  <p>
                    <span className=" text-[#F2A33D]">&gt; </span>
                    {start}
                  </p>
                )}

                {phase >= 4 && (
                  <p
                    className={cn(
                      "transition-all duration-200",
                      visible.includes(4)
                        ? "opacity-100,translate-y-0"
                        : "opacity-0,translate-y-2",
                    )}
                  >
                    <span className=" text-[#F2A33D]">&gt;</span> launching...
                  </p>
                )}
              </div>

              {welcome && (
                <div className="text-white/80 max-sm:wrap-break-word">
                  <p>C:\Users\Visitor\&gt; {welcome}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Initialization;

// useEffect(() => {
//   let current = 0;
//   const timer = setInterval(() => {
//     if (current < text.length) {
//       setcommand((prev) => prev + text.charAt(current));
//       current++;
//     } else {
//       clearInterval(timer);
//       setIsDone(true);
//     }
//   }, 50);

//   return () => clearInterval(timer);
// }, []);
// useEffect(() => {
//   if (!isDone) return;
//   let current = 0;
//   const timer = setInterval(() => {
//     if (current < moduleInstall.length && isDone) {
//       setModuleInstalling((prev) => prev + moduleInstall.charAt(current));
//       current++;
//     } else {
//       clearInterval(timer);
//       setIsModule(true);
//     }
//   }, 70);

//   return () => clearInterval(timer);
// }, [isDone]);

// useEffect(() => {
//   if (phase >= 3) {
//     steps.forEach((_, i) => {
//       setTimeout(() => {
//         setVisibleSteps((prev) => [...prev, i]);
//       }, i * 120);
//     });
//   }
// }, [phase]);

// useEffect(() => {
//   if (isDone) {
//     setTimeout(() => setPhase(1), 50);
//   }
//   if (isDone && isModule) {
//     setTimeout(() => setPhase(3), 300);
//     setTimeout(() => setPhase(4), 300 + steps.length * 100);
//     setTimeout(() => setPhase(5), 300 + steps.length * 100 + 800);
//   }
// }, [isModule, isDone]);
