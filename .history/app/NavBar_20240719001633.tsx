import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">Logo</Link>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <link href="/products">Products</link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
