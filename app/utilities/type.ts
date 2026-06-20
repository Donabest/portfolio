import { IconType } from "@icons-pack/react-simple-icons";
import { StaticImageData } from "next/image";

export interface navLinks {
  nav: string;
  link: string;
}

export interface tools {
  tool: string;
  icon: IconType;
}

export interface project {
  image: StaticImageData;
  title: string;
  description: string;
  stack: Array<string>;
  demo: string;
  github: string;
}

export interface socialContact {
  link: string;
  social: string;
  socialUsername?: string;
}
