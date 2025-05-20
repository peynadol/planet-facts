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
    <div className="h-[calc(100dvh - 76px)] flex flex-col justify-between mx-[165px] pt-[104px] pb-[56px] ">
      <PlanetCard>
        <div className="flex flex-grow h-[600px] ">
          <div className=" flex justify-center items-center flex-2/3">
            <PlanetImage
              src={imageSrc}
              geologyImage={currentView === "geology" ? geologyImageSrc : null}
            />
          </div>
          <div className="flex-1/3 flex-col  flex justify-between  ">
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
        <div>
          <PlanetStats
            rotation={planet.rotation}
            revolution={planet.rotation}
            radius={planet.radius}
            temperature={planet.temperature}
          />
        </div>
      </PlanetCard>
    </div>
  );
}
