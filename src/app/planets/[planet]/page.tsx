import { notFound } from 'next/navigation';
import data from '../../data/data.json';
import PlanetCard from '../../components/planets/planet-card';
import PlanetStats from '../../components/planets/planet-stats';
import PlanetClient from '../../components/planets/planet-client';

interface PlanetPageParams {
  params: Promise<{ planet: string }>;
}

export default async function PlanetPage({ params }: PlanetPageParams) {
  const { planet } = await params;
  const planetName = planet.toLowerCase();

  const planetData = data.find((p) => p.name.toLowerCase() === planetName);

  if (!planetData) {
    notFound();
  }

  return (
    <div className='h-[calc(100dvh-76px)] flex flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-[165px] pt-12 md:pt-[104px] pb-8 md:pb-[56px]'>
      <PlanetCard>
        <PlanetClient planet={planetData} planetName={planetName} />
        <PlanetStats
          rotation={planetData.rotation}
          revolution={planetData.revolution}
          radius={planetData.radius}
          temperature={planetData.temperature}
        />
      </PlanetCard>
    </div>
  );
}
