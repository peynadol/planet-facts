"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

const Navigation = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative z-50">
      <nav className="hidden md:flex font-spartan font-bold text-[13px] gap-[33px] items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "hover:underline transition",
              pathname === link.href ? "text-white" : "text-white/50"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden text-white"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-[76px] bg-black text-white flex flex-col font-spartan font-bold text-[13px] px-6 py-6 gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "hover:underline transition",
                pathname === link.href ? "text-white" : "text-white/50"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
