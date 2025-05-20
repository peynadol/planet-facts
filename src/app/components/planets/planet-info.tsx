import React from "react";

const PlanetInfo = ({ name, content, source }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{content}</p>
      <p>{source}</p>
    </>
  );
};

export default PlanetInfo;
