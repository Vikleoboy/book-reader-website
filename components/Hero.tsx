import React from "react";
import Image from "next/image";
import iconBook from "../public/lam.png";
import library1 from "../public/library.png";
import { AiFillApple } from "react-icons/ai";
import { FaWindows } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { MdOutlineGetApp } from "react-icons/md";

const Hero = () => {
  return (
    <main className=" bg-neutral-200/80 flex flex-col justify-center items-center pt-16 sm:pt-24 relative">
      <Image src={iconBook} alt="book icon" quality={100} className="max-small:w-[35px] w-[100px] rounded-lg" />
      <p className="text-black  leading-relaxed text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 lg:mt-4">Axiom Books</p>
      <h1 className="max-xs:text-[1.7rem] text-[2rem] small:text-[2rem] sm:text-[3.5rem] navsize:text-6xl  lg:text-7xl desktop:text-[80px] text-center   font-bold leading-tight sm:leading-[1.275] navsize:leading-[80px] lg:leading-[95px] pt-1">
        Explore, discover
        <span className="block font-bold">— all in one read.</span>
      </h1>
      <div className="hero-reverse flex flex-col justify-center items-center ">
        <p className="text-lg small:text-xl sm:text-2xl largesceen:text-3xl text-center text-gray-800 font-normal leading-normal w-[85%] sm:w-[70%] lg:w-[60%] largesceen:w-[38vw] mt-5 sm:mt-10">
          Axiom Books offers a comprehensive library of your favorite reads and exciting new discoveries—all in one convenient platform. Browse our curated selection to find your next favorite book,
          track your reading journey, and set personal reading goals effortlessly.
        </p>

        <div className="flex max-xs:flex-col items-center justify-center  small:text-base text-xs desktop:text-lg">
          <a
            href="#download"
            className="group relative inline-flex items-center overflow-hidden button-bg rounded-xl focus:outline-none focus:ring  px-5 sm:px-10 py-2 xs:py-3 hover:scale-[1.02] focus:scale-[1.02] transition-all duration-300 max-sm:mt-2 text-white  bg-blue-600 hover:bg-blue-700 xs:mt-8">
            <span className="absolute -start-full transition-all group-hover:start-4">
              <MdOutlineGetApp size={20} className="-rotate-90 group-hover:text-white" />
            </span>

            <button className="group-hover:ms-4">
              <span className="button-text">Download Now!</span>
            </button>
          </a>
        </div>

        <Image src={library1} alt="library page review" placeholder="blur" quality={100} className="w-[80%] md:mt-14 desktop:mt-20 rounded-t-xl" />
      </div>
    </main>
  );
};
20;

export default Hero;
