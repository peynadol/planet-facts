"use client";

import PlanetImage from "@/app/components/planets/planet-image";
import PlanetCard from "@/app/components/planets/planet-card";
import PlanetInfo from "@/app/components/planets/planet-info";
import PlanetButtons from "@/app/components/planets/planet-buttons";
import { useState } from "react";

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
    <PlanetCard>
      <PlanetImage
        src={imageSrc}
        geologyImage={currentView === "geology" ? geologyImageSrc : null}
      />
      <PlanetInfo
        name={planet.name}
        content={currentContent.content}
        source={currentContent.source}
      />
      <PlanetButtons planetName={planetName} onViewChange={setCurrentView} />
    </PlanetCard>
  );
}
