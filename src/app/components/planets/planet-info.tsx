type PlanetInfoProps = {
  name: string;
  content: string;
  source: string;
};
const PlanetInfo = ({ name, content, source }: PlanetInfoProps) => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-[80px]">{name}</h1>
      <p className="font-spartan text-[18px] leading-[25px] mb-4">{content}</p>
      <p className="font-spartan text-[16px] leading-[25px] opacity-60 mt-auto mb-4">
        {"Source : "}
        <a href={source} className="inline-flex items-center gap-1">
          <span className="font-bold">Wikipedia</span>
          <img src="/images/icon-source.svg" alt="Icon" />
        </a>
      </p>
    </div>
  );
};
export default PlanetInfo;
