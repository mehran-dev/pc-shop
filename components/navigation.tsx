import Link from "next/link";
import React from "react";

type Props = {};

export default function Navigation({}: Props) {
  const navItems = [
    { href: "/basket", label: "basket" },
    { href: "/products", label: "products" },
  ];

  return (
    <nav className="bg-sky-700 py-5">
      <ul className="flex ">
        {navItems.map((item) => {
          return (
            <li className="mx-3 text-white px-3" key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
