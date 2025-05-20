import Link from "next/link";

const Navigation = () => {
  return (
    <div className="font-spartan opacity-60 font-bold text-[13px] gap-[33px] flex items-center">
      <Link href="/planets/mercury">Mercury</Link>
      <Link href="/planets/venus">Venus</Link>
      <Link href="/planets/earth">Earth</Link>
      <Link href="/planets/mars">Mars</Link>
      <Link href="/planets/jupiter">Jupiter</Link>
      <Link href="/planets/saturn">Saturn</Link>
      <Link href="/planets/uranus">Uranus</Link>
      <Link href="/planets/neptune">Neptune</Link>
    </div>
  );
};

export default Navigation;
