import Link from "next/link";

const Navigation = () => {
  return (
    <div>
    <Link href="/mercury">Mercury</Link>
    <Link href="/venus">Venus</Link>
    <Link href="/earth">Earth</Link>
    <Link href="/mars">Mars</Link>
    <Link href="/jupiter">Jupiter</Link>
    <Link href="/saturn">Saturn</Link>
    <Link href="/uranus">Uranus</Link>
    <Link href="/neptune">Neptune</Link>
    </div>
  );
};

export default Navigation;
