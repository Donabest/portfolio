import OculaProject from "@/public/TaskManagement.png";
import Aurelle from "@/public/Aurelle.png";
import MovieSearch from "@/public/moviesearch.png";
import VideoGraphy from "@/public/Videography.png";
import Ocula from "@/public/Ocula.png";
import WeatherApp from "@/public/Forecast-weatherapp.png";

export const projects = [
  {
    image: OculaProject,
    title: "Ocula Dashboard",
    description:
      " A fullstack task management dashboard. Manage tasks across kanban, list and calendar views, get AI suggestions, track progress,notification,authentication,profile setting, with live analytics, and let the AI create or edit tasks from plain text",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Tailwind",
      "Framer Motion",
    ],
    demo: "https://aitaskmanagementdashboard.vercel.app/",
    github: "https://github.com/Donabest/Ocula-Dashboard",
  },
  {
    image: Aurelle,
    title: "Aurelle-Atelier",
    description:
      "A fullstack fashion ecommerce concept for a premium clothing brand. it includes a shop with category filtering, product detail pages, cart flow, editorial lookbook, styling room, and email capture for weekly drops. Designed to feel like a real luxury brand, not a template.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Unsplash"],
    demo: "https://aurelle-atelier.vercel.app",
    github: "https://github.com/Donabest/Aurelle-Atelier",
  },
  {
    image: MovieSearch,
    title: "Movie Search",
    description:
      "A TMDB-powered entertainment discovery app movies, series, and kids content with search, trending sections, detailed info pages, and a personal bookmark list. One of my early JavaScript projects that taught me API integration and DOM manipulation.",
    stack: ["JavaScript", "Scss", "Html", "MVC Structure"],
    demo: "https://moviesearchapp-pro.netlify.app",
    github: "https://github.com/Donabest/movieSearch",
  },
  {
    image: Ocula,
    title: "Ocula Website",
    description:
      "A React landing page project built to practice real-world UI patterns ,hero sections, feature grids, pricing tables and CTAs. Designed around a fictional AI productivity tool to make it feel production-ready, not just a coding exercise.",
    stack: ["React", "JavaScript", "TailwindCss", "Framer Motion", "particles"],
    demo: "https://ocula-ai-website.vercel.app",
    github: "https://github.com/Donabest/OculaAiWebsite",
  },
  {
    image: VideoGraphy,
    title: "Video Website",
    description:
      "A agency website for a professional videography and video editing company. Features a services section, photo gallery, blog, and contact ,built to practice real-world layout, responsive design, and multi-section page structure.",
    stack: ["Html", "TailwindCss", "Javascript"],
    demo: "https://videography-web-three.vercel.app",
    github: "https://github.com/Donabest/videography-web",
  },
  {
    image: WeatherApp,
    title: "Weather foreCast",
    description:
      "A real-time weather forecasting app powered by the OpenWeatherAPI. Search any city to get current conditions ,temperature, humidity, wind speed, precipitation,background Image based on the weather situation plus a 5-day forecast. Includes saved locations and a clean, minimal UI built with vanilla JavaScript.",
    stack: ["JavaScript", "Scss", "Html", "MVC Structure"],
    demo: "https://weatherpro-kappa.vercel.app",
    github: "https://github.com/Donabest/WeatherPro",
  },
];
