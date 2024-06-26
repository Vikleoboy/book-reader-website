"use client";
import React from "react";
import { navItems } from "@/data";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import SearchArea from "./ui/SearchArea";

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    // Navbar
    <nav className="h-[80vh] relative">
      <section className="flex justify-center items-center gap-40 pt-2 bg-white w-full relative max-navsize:hidden">
        {/* logo */}
        <div>
          <p>
            <a href="/" className="text-left text-xl  text-yellow">
              Axiom
            </a>
          </p>
        </div>

        {/* Navlinks */}
        <div className="flex gap-x-10">
          {navItems.map((items, idx: number) => (
            <ul key={`link=${idx}`}>
              <li className=" flex">
                <a href={items.link} className="text-black text-sm leading-none font-normal tracking-[-0.12px] hover:font-semibold  transition-all">
                  {items.name}
                </a>
              </li>
            </ul>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-x-10">
          <a href="/Shop">
            <BsBag />
          </a>
          <SearchArea />
        </div>
      </section>

      <div className="pl-[10rem] py-2  sticky top-0 max-navsize:hidden">
        <p className="text-2xl text-left w-fit">BookRead</p>
      </div>

      {/* Mobile Nav */}

      <section className="navsize:hidden flex  justify-between items-baseline pt-4 px-4 w-full  z-50">
        <div>
          <p>
            <a href="/" className="text-left text-xl  text-yellow">
              Axiom
            </a>
          </p>
        </div>

        <div className="gap-6  flex">
          <div className="flex gap-6 items-baseline h-fit">
            <a href="/Shop" className="leading-none">
              <BsBag />
            </a>
            <SearchArea />
          </div>

          {toggleMenu ? (
            <IoClose size={30} color="#000000" onClick={() => settoggleMenu(false)} className="z-[999] absolute top-4 right-3" />
          ) : (
            <AiOutlineAlignLeft size={17} color="#000000" onClick={() => settoggleMenu(true)} />
          )}

          {toggleMenu && (
            <div className="flex w-full ">
              <div className="absolute overflow-hidden  w-full h-screen left-0 right-0 top-0 z-[100] bg-white scale-up-ver-top transition-all pt-16 pl-12">
                {navItems.map((items, idx: number) => (
                  <ul key={`link=${idx}`}>
                    <li className="flex  px-4 py-1 last:mb-4">
                      <a href={items.link} className="text-[1.5rem] transition-all text-left leading-none text-black font-medium">
                        {items.name}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="pl-4 py-2  sticky top-0 navsize:hidden -z-0">
        <p className="text-2xl text-left w-fit">BookRead</p>
      </div>
    </nav>
  );
};

export default Navbar;
