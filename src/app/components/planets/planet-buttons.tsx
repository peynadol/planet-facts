"use client";
import { useState } from "react";

type PlanetButtonProps = {
  planetName: string;
  onViewChange: (view: "overview" | "structure" | "geology") => void;
};

export default function PlanetButtons({
  planetName,
  onViewChange,
}: PlanetButtonProps) {
  const [activeButton, setActiveButton] = useState<
    "overview" | "structure" | "geology"
  >("overview");

  const handleButtonClick = (view: "overview" | "structure" | "geology") => {
    setActiveButton(view);
    onViewChange(view);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick("overview")}>
        01 - overview
      </button>
      <button onClick={() => handleButtonClick("structure")}>
        02 - internal structure
      </button>
      <button onClick={() => handleButtonClick("geology")}>
        03 - surface geology
      </button>
    </div>
  );
}
