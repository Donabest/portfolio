import { SetStateAction } from "react";

function TypeWriter(
  text: string,
  setter: React.Dispatch<SetStateAction<string>>,
  speed: number = 40,
) {
  return new Promise<void>((resolve) => {
    let current = 0;
    setter("");
    const timer = setInterval(() => {
      if (current < text.length) {
        current++;
        setter(text.slice(0, current));
      } else {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

export default TypeWriter;
