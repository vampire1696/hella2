"use client";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const NavArray = [
  { title: "Onboarding", href: "/onboarding" },
  { title: "Courses", href: "/courses" },
  { title: "New Proposals", href: "/new-proposals" },
];
const Nav = () => {
  const pathName = usePathname();
  const [openSearchBar, setopenSearchBar] = useState(false);
  useEffect(() => {
    setopenSearchBar((prev) => {
      if (prev) return false;
      return prev;
    });
  }, [pathName]);
  return (
    <>
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
            <div>
              <Icon
                className="cursor-pointer"
                icon="material-symbols:search"
                width="25"
                height="25"
                onClick={() => {
                  // Open search modal
                  setopenSearchBar(!openSearchBar);
                }}
              />
            </div>
          </div>
        </nav>
      </div>
      {openSearchBar && (
        <div className="flex justify-center ">
          <div className="w-[1300px] flex justify-center pb-3">
            <SearchBar />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
