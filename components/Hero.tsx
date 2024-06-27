import React from "react";
import Image from "next/image";
import iconBook from "../public/icon_books_large.png";
import library1 from "../public/library.png";
import library from "../public/libraryfront.png";

const Hero = () => {
  return (
    <main className="bg-gray-200 flex flex-col justify-center items-center pt-24 relative">
      <Image src={iconBook} alt="book icon" quality={100} />
      <p className="text-black  leading-relaxed text-2xl font-semibold">Axiom Books</p>
      <h1 className="sm:text-[3.5rem] sm:leading-[65px] navsize:text-6xl text-center largescreen:w-[40vw]  font-bold navsize:leading-[70px] pt-1">
        Read, discover, set goals. <span className="font-semibold block">All in one place.</span>
      </h1>
      <p className="text-xl lg:text-2xl text-center text-gray-600 font-normal leading-normal max-lg:w-[70%] lg:w-[55vw] mt-10">
        Axiom Books is the single destination for all the books you love — and all the ones you’ll love next. Browse the Book Store to find the perfect book to read. Track what you’ve read and want to
        read, and set your own Reading Goals — all in one app and across all your Apple devices.
      </p>
      <Image src={library} alt="library page review" placeholder="blur" quality={100} priority className="w-[60%]  rounded-t-3xl" />
    </main>
  );
};

export default Hero;
