import Image from "next/image";

type PlanetImageProps = {
  src: string;
  geologyImage?: string | null;
};

const PlanetImage = ({ src, geologyImage }: PlanetImageProps) => {
  return (
    <div className="relative w-[290px] h-[290px]">
      <Image
        src={src}
        alt="Planet"
        width={290}
        height={290}
        style={{ objectFit: "contain" }}
        priority
      />

      {geologyImage && (
        <Image
          src={geologyImage}
          alt="Geology"
          width={163}
          height={199}
          className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%]"
        />
      )}
    </div>
  );
};

export default PlanetImage;
