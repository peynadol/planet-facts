"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navigation = () => {
  const pathname = usePathname();
  const links = [
    { name: "Mercury", href: "/planets/mercury" },
    { name: "Venus", href: "/planets/venus" },
    { name: "Earth", href: "/planets/earth" },
    { name: "Mars", href: "/planets/mars" },
    { name: "Jupiter", href: "/planets/jupiter" },
    { name: "Saturn", href: "/planets/saturn" },
    { name: "Uranus", href: "/planets/uranus" },
    { name: "Neptune", href: "/planets/neptune" },
  ];

  return (
    <div className="font-spartan  font-bold text-[13px] gap-[33px] flex items-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "hover:underline",
            pathname === link.href ? "text-white" : "text-[#ffffff]/50"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
