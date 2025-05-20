const PlanetStats = ({ rotation, revolution, radius, temperature }) => {
  return (
    <div>
      <p>{rotation}</p>
      <p>{revolution}</p>
      <p>{radius}</p>
      <p>{temperature}</p>
    </div>
  );
};

export default PlanetStats;
