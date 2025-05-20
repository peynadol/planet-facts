import { notFound } from "next/navigation";
import data from "../../data/data.json";
import PlanetClient from "../../components/planets/planet-client";

export default async function PlanetPage({ params }) {
  const awaitedParams = await params;
  const planetName = awaitedParams.planet.toLowerCase();
  const planet = data.find((p) => p.name.toLowerCase() === planetName);

  if (!planet) {
    return notFound();
  }

  return <PlanetClient planet={planet} planetName={planetName} />;
}
