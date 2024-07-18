"use client";
import Link from "next/link";
import React from "react";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { IoBugOutline } from "react-icons/io5";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Web Application", href: "/webapp" },
    { label: "Mobile Application", href: "/mobile-app" },
    { label: "Cloud services", href: "/cloud-services" },
    { label: "E-commerce", href: "/ecommerce" },
    { label: "Marketing", href: "/marketing" },
    { label: "Sales", href: "/sales" },
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
    { label: "Logout", href: "/logout" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBugOutline />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== cuurentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
