"use client";

import PlanetImage from "./planet-image";
import PlanetInfo from "./planet-info";
import PlanetButtons from "./planet-buttons";
import { useState } from "react";
import { Planet } from "../../types/planet";

type PlanetClientProps = {
  planet: Planet;
  planetName: string;
};

type PlanetView = "overview" | "structure" | "geology";

export default function PlanetClient({
  planet,
  planetName,
}: PlanetClientProps) {
  const [currentView, setCurrentView] = useState<PlanetView>("overview");

  const currentContent = planet[currentView];
  const imageSrc =
    currentView === "structure"
      ? `/images/planet-${planetName}-internal.svg`
      : `/images/planet-${planetName}.svg`;

  const geologyImageSrc = `/images/geology-${planetName}.png`;

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
      <div className="flex justify-center items-center w-full md:flex-2/3">
        <PlanetImage
          src={imageSrc}
          geologyImage={currentView === "geology" ? geologyImageSrc : null}
        />
      </div>
      <div className="w-full md:flex-1/3 flex flex-col justify-between">
        <PlanetInfo
          name={planet.name}
          content={currentContent.content}
          source={currentContent.source}
        />
        <PlanetButtons planetName={planetName} onViewChange={setCurrentView} />
      </div>
    </div>
  );
}
