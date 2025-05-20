import { notFound } from "next/navigation";
import data from "../../data/data.json";
import PlanetImage from "@/app/components/planets/planet-image";
import PlanetCard from "@/app/components/planets/planet-card";
import PlanetInfo from "@/app/components/planets/planet-info";

type Params = {
  params: {
    planet: string;
  };
};

export default async function PlanetPage({ params }: Params) {
  // params is now async so we need to await it
  const awaitedParams = await params;
  const planetName = awaitedParams.planet.toLowerCase();

  const planet = data.find((p) => p.name.toLowerCase() === planetName);

  const src = `/images/planet-${planetName}.svg`;

  if (!planet) {
    return notFound();
  }

  return (
    <PlanetCard>
      <PlanetImage src={src} />
      <PlanetInfo
        name={planet.name}
        content={planet.overview.content}
        source={planet.overview.source}
      />
    </PlanetCard>
  );
}
