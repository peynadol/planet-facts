"use client";

import PlanetImage from "@/app/components/planets/planet-image";
import PlanetCard from "@/app/components/planets/planet-card";
import PlanetInfo from "@/app/components/planets/planet-info";
import PlanetButtons from "@/app/components/planets/planet-buttons";
import { useState } from "react";
import PlanetStats from "./planet-stats";

// Removed TypeScript types

export default function PlanetClient({ planet, planetName }) {
  const [currentView, setCurrentView] = useState("overview");

  const currentContent = planet[currentView];
  const imageSrc =
    currentView === "structure"
      ? `/images/planet-${planetName}-internal.svg`
      : `/images/planet-${planetName}.svg`;

  const geologyImageSrc = `/images/geology-${planetName}.png`;

  return (
    <div className="mx-[165px] mt-[104px] mb-[56px] outline-1">
      <PlanetCard>
        <div className="flex justify-between">
          <div className=" flex justify-center items-center flex-2/3 outline-amber-400 outline-2">
            <PlanetImage
              src={imageSrc}
              geologyImage={currentView === "geology" ? geologyImageSrc : null}
            />
          </div>
          <div className="flex-1/3 flex-col outline-green-500 outline-2">
            <PlanetInfo
              name={planet.name}
              content={currentContent.content}
              source={currentContent.source}
            />
            <PlanetButtons
              planetName={planetName}
              onViewChange={setCurrentView}
            />
          </div>
        </div>
        <PlanetStats
          rotation={planet.rotation}
          revolution={planet.rotation}
          radius={planet.radius}
          temperature={planet.temperature}
        />
      </PlanetCard>
    </div>
  );
}
