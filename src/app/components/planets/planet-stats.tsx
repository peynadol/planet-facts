const PlanetStats = ({ rotation, revolution, radius, temperature }) => {
  return (
    <div className="flex uppercase gap-[30px]">
      <div className="border border-gray-400/50 px-6 py-5 text-left w-full">
        <p className="font-spartan text-[11px] opacity-60 mb-1">
          Rotation Time
        </p>
        <p className="text-[40px] font-antonio tracking-tighter">{rotation}</p>
      </div>
      <div className="border border-gray-400/50 px-6 py-5 text-left w-full">
        <p className="font-spartan text-[11px] opacity-60 mb-1">
          Revolution Time
        </p>
        <p className="text-[40px] font-antonio tracking-tighter">
          {revolution}
        </p>
      </div>
      <div className="border border-gray-400/50 px-6 py-5 text-left w-full">
        <p className="font-spartan text-[11px] opacity-60 mb-1">Radius</p>
        <p className="text-[40px] font-antonio tracking-tighter">{radius}</p>
      </div>
      <div className="border border-gray-400/50 px-6 py-5 text-left w-full">
        <p className="font-spartan text-[11px] opacity-60 mb-1">
          Average Temp.
        </p>
        <p className="text-[40px] font-antonio tracking-tighter">
          {temperature}
        </p>
      </div>
    </div>
  );
};

export default PlanetStats;
