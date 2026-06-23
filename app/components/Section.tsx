type propType = {
  num: string;
  section: string;
};

function Section({ num, section }: propType) {
  return (
    <p className="tracking-widest uppercase font-Nunito text-lg md:text-[1.5vw]">
      <span className="text-gray-100 border-b">{num}</span> {section}
    </p>
  );
}

export default Section;
