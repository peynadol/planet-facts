"use client";

import PlanetImage from "./planet-image";
import PlanetInfo from "./planet-info";
import PlanetButtons from "./planet-buttons";
import { useState } from "react";

export default function PlanetClient({ planet, planetName }) {
  const [currentView, setCurrentView] = useState("overview");

  const currentContent = planet[currentView];
  const imageSrc =
    currentView === "structure"
      ? `/images/planet-${planetName}-internal.svg`
      : `/images/planet-${planetName}.svg`;

  const geologyImageSrc = `/images/geology-${planetName}.png`;

  return (
    <div className="flex h-[600px]">
      <div className="flex justify-center items-center flex-2/3">
        <PlanetImage
          src={imageSrc}
          geologyImage={currentView === "geology" ? geologyImageSrc : null}
        />
      </div>
      <div className="flex-1/3 flex flex-col justify-between">
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
