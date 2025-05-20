import React from "react";

const PlanetInfo = ({ name, content, source }) => {
  return (
    <>
      <h1 className="text-[80px]">{name}</h1>
      <p className="font-spartan text-[14px] leading-[25px]">{content}</p>
      <p className="font-spartan text-[14px] leading-[25px] opacity-60 ">
        {"Source : "}
        <a href={source} className="inline-flex items-center gap-1">
          <span className="font-bold">Wikipedia</span>
          <img src="/images/icon-source.svg" alt="Icon" />
        </a>
      </p>
    </>
  );
};

export default PlanetInfo;
