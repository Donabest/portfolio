function Tape() {
  const Arr = Array.from({ length: 23 }, (_, i) => i);
  return (
    <div className="w-full overflow-hidden bg-accent text-secondary-100 py-1 rotate-[-0.5deg] mt-2 md:mt-0">
      <div className="flex whitespace-nowrap marquee font-sans mx-4 text-xs ">
        {Arr.map((_, i) => (
          <span key={i}>
            Because Life&apos;s Too short for boring design ~{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tape;
