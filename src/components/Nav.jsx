"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavArray = [
  { title: "Onboarding", href: "/onboarding" },
  { title: "Courses", href: "/courses" },
  { title: "New Proposals", href: "/new-proposals" },
];
const Nav = () => {
  const pathName = usePathname();
  return (
    <div className="flex justify-center py-3">
      <nav className="container  flex max-w-[1500px] justify-center w-full">
        <div className="w-full max-w-[1300px] items-center flex justify-between">
          <Link href="/">
            <Image src="/icon.png" alt="icon" width={160} height={100} />
          </Link>
          <ul className="flex space-x-6">
            <a
              className="font-bold hover:text-lightblue"
              href="https://hella.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              News
            </a>
            {NavArray.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={clsx("font-bold hover:text-lightblue", {
                    "text-[#0000d3]": item.href === pathName,
                  })}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div>X</div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
