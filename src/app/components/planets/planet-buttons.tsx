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
    <div className="flex flex-col gap-4">
      <button
        onClick={() => handleButtonClick("overview")}
        className="uppercase font-spartan font-bold text-[12px] flex items-center gap-4 border-1 p-4"
      >
        <span>01</span>
        <span>overview</span>
      </button>
      <button
        onClick={() => handleButtonClick("structure")}
        className="uppercase font-spartan font-bold text-[12px] flex items-center gap-4 border-1 p-4"
      >
        <span>02</span>
        <span>internal structure</span>
      </button>
      <button
        onClick={() => handleButtonClick("geology")}
        className="uppercase font-spartan font-bold text-[12px] flex items-center gap-4 border-1 p-4"
      >
        <span>03</span>
        <span>surface geology</span>
      </button>
    </div>
  );
}
