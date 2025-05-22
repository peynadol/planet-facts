type PlanetStatProps = {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
};

const PlanetStats = ({
  rotation,
  revolution,
  radius,
  temperature,
}: PlanetStatProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-14 sm:grid-cols-2 md:grid-cols-4 md:gap-[30px]">
      <div className="border border-gray-400/50 px-6 py-5 text-left w-full">
        <p className="font-spartan text-[14px] opacity-60 mb-1">
          Rotation Time
        </p>
        <p className="text-[28px] md:text-[40px] font-antonio tracking-tighter">
          {rotation}
        </p>
      </div>
      <div className="border border-gray-400/50 px-6 py-5 text-left w-full">
        <p className="font-spartan text-[14px] opacity-60 mb-1">
          Revolution Time
        </p>
        <p className="text-[28px] md:text-[40px] font-antonio tracking-tighter">
          {revolution}
        </p>
      </div>
      <div className="border border-gray-400/50 px-6 py-5 text-left w-full">
        <p className="font-spartan text-[14px] opacity-60 mb-1">Radius</p>
        <p className="text-[28px] md:text-[40px] font-antonio tracking-tighter">
          {radius}
        </p>
      </div>
      <div className="border border-gray-400/50 px-6 py-5 text-left w-full">
        <p className="font-spartan text-[14px] opacity-60 mb-1">
          Average Temp.
        </p>
        <p className="text-[28px] md:text-[40px] font-antonio tracking-tighter">
          {temperature}
        </p>
      </div>
    </div>
  );
};

export default PlanetStats;
