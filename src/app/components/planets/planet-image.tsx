import React from "react";

const PlanetImage = ({src}) => {
  return (
    <img
      src={src}
      alt="Planet"
      className="w-[290px] h-[290px]"
    />
  );
};

export default PlanetImage;
