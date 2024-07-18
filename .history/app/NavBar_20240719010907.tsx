import Link from "next/link";
import React from "react";
import { IoBugOutline } from "react-icons/io5";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Products", href: "/products" },
  ];
};

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBugOutline />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={links.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={links.href}
          >
            {links.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
