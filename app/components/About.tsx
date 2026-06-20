import Section from "./Section";
import dynamic from "next/dynamic";

const GithubActivity = dynamic(
  () => import("@/app/components/GithubActivity"),
  {
    ssr: false,
    loading: () => <Spinner />,
  },
);

function About() {
  return (
    <section id="About" className="border-t border-t-neutral-900 py-18">
      <Section num="01" section="About" />
      <div className="grid grid-cols-2 gap-18 pt-18">
        <div className="font-Nunito font-normal text-neutral-300 ">
          <p>
            Hello, I&apos;m Rabiu Abdulazeez,also known as Don. A Frontend
            Engineer with a thing for clean interfaces and thoughtful
            experiences. I get a genuine kick out of taking an idea and turning
            it into something people can actually open in a browser, click
            through, and enjoy using. Design and engineering aren&apos;t
            opposites to me ,they&apos;re the same conversation, and I try to
            stay fluent in both. My path into tech began with a simple question:
            how does any of this actually work? That question never really went
            away, it just turned into a career. Outside of the editor, I&apos;m
            probably midway through an anime, adding another album to a playlist
            that&apos;s already too long, or buried in a book I told myself
            I&apos;d finish last week.
            <span className="block pt-2 text-gray-100">
              If you need a product person who can own the full journey, brand
              identity, user experience, scalable architecture,we should talk.
            </span>
          </p>
        </div>

        <div className="font-sans font-medium">
          <div className=" px-8 py-3 border border-neutral-900 shadow-secondary-200 shadow-2xl rounded-2xl">
            <h1 className="flex gap-1 pt-2 text-[17px] font-semibold font-mono uppercase">
              <span className="text-emerald-400 animate-pulse ">&bull;</span>
              system_status
            </h1>
            <div className="flex justify-between items-center py-3 border-b border-b-neutral-900">
              <p className="text-gray-200">Operator</p>
              <span className="text-[#00FFFF]">Don</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-b-neutral-900">
              <p className="text-gray-200">Role</p>
              <span>Fronted Engineer</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-b-neutral-900">
              <p className="text-gray-200">Focus</p>
              <span>performance</span>
            </div>
            <div className="flex justify-between items-center py-3 ">
              <p className="text-gray-200">Availability</p>
              <span className="text-green-400">Open for opportunities</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 max-w-4xl mx-auto px-6 py-3 border border-neutral-900 shadow-secondary-200 shadow-2xl  rounded-2xl">
          {/* <h1 className="flex gap-1 pt-2 text-[17px] font-semibold font-mono uppercase">
              <span className="text-gray-50">&bull;</span>
              Spotify_Status
            </h1>
            <div className="pt-3">
              <p className="text-gray-100 font-serif italic">Not playing</p>
              <span className="text-sm font-light text-gray-200">
                come back later for tune
              </span>
            </div> */}
          <GithubActivity />
          {/* <GitHubCalendar username="Donabest" /> */}
        </div>
      </div>
    </section>
  );
}

export default About;

function Spinner() {
  return <div className="spinner"></div>;
}
