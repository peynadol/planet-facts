import React from "react";

const PlanetImage = ({ src, geologyImage }) => {
  return (
    <div className="relative w-[290px] h-[290px]">
      <img src={src} alt="Planet" className="w-full h-full object-contain" />

      {geologyImage && (
        <img
          src={geologyImage}
          alt="Geology"
          className="absolute w-[163px] h-[199px] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%]"
        />
      )}
    </div>
  );
};

export default PlanetImage;
