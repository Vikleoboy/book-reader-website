import React from "react";
import Image from "next/image";
import iconBook from "../public/icon_books_large.png";
import library1 from "../public/library.png";
import { AiFillApple } from "react-icons/ai";
import { FaWindows } from "react-icons/fa";

const Hero = () => {
  return (
    <main className=" bg-neutral-200/60 flex flex-col justify-center items-center pt-16 sm:pt-24 relative">
      <Image src={iconBook} alt="book icon" quality={100} className="max-small:w-[35px]" />
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

        <div className="flex max-xs:flex-col items-center justify-center gap-6 xs:gap-2 md:gap-8 small:text-base text-xs desktop:text-lg">
          <button className="flex items-center px-5 sm:px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300 focus:outline-none  mt-8 hover:scale-[1.02] focus:scale-[1.02] hover:blur-[0.3px] outline-none">
            <AiFillApple className="mr-2" size={24} />
            <span className="button-text">Download for iOS</span>
          </button>

          <button className="flex items-center px-5 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 focus:outline-none  xs:mt-8 hover:scale-[1.02] focus:scale-[1.02] hover:blur-[0.3px] outline-none">
            <FaWindows className="mr-2" size={24} />
            <span className="button-text">Download for Windows</span>
          </button>
        </div>

        <Image src={library1} alt="library page review" placeholder="blur" quality={100} className="w-[80%] md:mt-14 desktop:mt-20 rounded-t-3xl" />
      </div>
    </main>
  );
};
20;

export default Hero;
