import { notFound } from "next/navigation";
import data from "../../data/data.json";
import PlanetCard from "../../components/planets/planet-card";
import PlanetStats from "../../components/planets/planet-stats";
import PlanetClient from "../../components/planets/planet-client";

export default function PlanetPage({ params }) {
  const planetName = params.planet.toLowerCase();
  const planet = data.find((p) => p.name.toLowerCase() === planetName);

  if (!planet) {
    notFound();
  }

  return (
    <div className="h-[calc(100dvh - 76px)] flex flex-col justify-between mx-[165px] pt-[104px] pb-[56px]">
      <PlanetCard>
        <PlanetClient planet={planet} planetName={planetName} />
        <PlanetStats
          rotation={planet.rotation}
          revolution={planet.revolution}
          radius={planet.radius}
          temperature={planet.temperature}
        />
      </PlanetCard>
    </div>
  );
}
