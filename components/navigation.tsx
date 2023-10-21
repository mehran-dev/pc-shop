import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {};

export default function Navigation({}: Props) {
  const { data: session } = useSession();

  const navItems = [
    { href: "/basket", label: "basket" },
    { href: "/products", label: "products" },
  ];

  return (
    <nav className="bg-sky-700 py-5">
      <ul className="flex ">
        {session ? (
          <>
            <li className="mx-3 text-white px-3" key={"profile"}>
              <Link href={"/profile"}>Profile</Link>
            </li>
            <li className="mx-3 text-white px-3" key={"logout"}>
              <Link href={"#"} onClick={() => signOut()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li className="mx-3 text-white px-3" key={"Login"}>
            <Link href={"/api/auth/signin"}>{"Login"}</Link>
          </li>
        )}

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
