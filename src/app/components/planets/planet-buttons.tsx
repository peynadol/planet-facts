"use client";
import { useState } from "react";
import clsx from "clsx";

type PlanetView = "overview" | "structure" | "geology";

type PlanetButtonProps = {
  planetName: string;
  onViewChange: (view: PlanetView) => void;
};

const views: { id: PlanetView; label: string }[] = [
  { id: "overview", label: "overview" },
  { id: "structure", label: "internal structure" },
  { id: "geology", label: "surface geology" },
];

const planetColors: Record<string, string> = {
  mercury: "#419EBB",
  venus: "#EDA249",
  earth: "#6D2ED5",
  mars: "#D14C32",
  jupiter: "#D83A34",
  saturn: "#CD5120",
  uranus: "#1EC1A2",
  neptune: "#2D68F0",
};

export default function PlanetButtons({
  planetName,
  onViewChange,
}: PlanetButtonProps) {
  const [activeButton, setActiveButton] = useState<PlanetView>("overview");
  const activeColor = planetColors[planetName.toLowerCase()] ?? "#FFF";

  const handleClick = (view: PlanetView) => {
    setActiveButton(view);
    onViewChange(view);
  };

  return (
    <div className="flex flex-col gap-4">
      {views.map((view, index) => (
        <button
          key={view.id}
          onClick={() => handleClick(view.id)}
          className={clsx(
            "uppercase font-spartan font-bold text-[12px] flex items-center gap-4 border p-4 transition-colors",
            activeButton === view.id
              ? "text-white bg-opacity-100"
              : "text-white/50 hover:text-white bg-opacity-0 hover:bg-opacity-20"
          )}
          style={{
            backgroundColor:
              activeButton === view.id ? activeColor : "transparent",
            borderColor: activeColor,
          }}
        >
          <span>{`0${index + 1}`}</span>
          <span>{view.label}</span>
        </button>
      ))}
    </div>
  );
}
