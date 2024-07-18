import Link from "next/link";
import React from "react";
import { IoBugOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBugOutline />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href="/"
          >
            <h1>Dashboard</h1>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <h1>Products</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
