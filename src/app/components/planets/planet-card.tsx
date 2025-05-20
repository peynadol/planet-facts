import React from "react";

const PlanetCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col">{children}</div>;
};

export default PlanetCard;
