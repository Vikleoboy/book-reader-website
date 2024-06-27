import React from "react";
import Image from "next/image";
import iconBook from "../public/icon_books_large.png";
import library1 from "../public/im.png";

const Hero = () => {
  return (
    <main className=" bg-neutral-200/60 flex flex-col justify-center items-center pt-16 sm:pt-24 relative">
      <Image src={iconBook} alt="book icon" quality={100} className="max-small:w-[35px]"/>
      <p className="text-black  leading-relaxed text-lg sm:text-2xl lg:text-3xl mt-2 sm:mt-3 lg:mt-4">Axiom Books</p>
      <h1 className="max-xs:text-[1.600rem] text-3xl small:text-[2rem] sm:text-5xl navsize:text-6xl  lg:text-7xl desktop:text-[80px] text-center   font-bold leading-tight sm:leading-[1.275] navsize:leading-[80px] lg:leading-[95px] pt-1">
        Read, discover, set goals. <span className="block font-bold">All in one place.</span>
      </h1>
      <p className="text-lg small:text-xl sm:text-2xl text-center text-gray-800 font-normal leading-normal w-[85%] sm:w-[70%] lg:w-[60%] largesceen:w-[38vw] mt-5 sm:mt-10">
        Axiom Books is the single destination for all the books you love — and all the ones you’ll love next. Browse the Book Store to find the perfect book to read. Track what you’ve read and want to
        read, and set your own Reading Goals — all in one app and across all your Apple devices.
      </p>
      <Image src={library1} alt="library page review" placeholder="blur" quality={100} className="w-[80%] as mt-20 rounded-t-3xl" />
    </main>
  );
};

export default Hero;
