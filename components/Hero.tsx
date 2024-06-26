import React from "react";
import Image from "next/image";
import iconBook from "../public/icon_books_large.png";
import library1 from "../public/library.png";

const Hero = () => {
  return (
    <main className="bg-gray-300 flex flex-col justify-center items-center pt-24 relative">
      <Image src={iconBook} alt="book icon" quality={100} className="shadow-current"/>
      <p className="text-black  leading-relaxed text-lg font-semibold">Axiom Books</p>
      <h1 className="text-7xl lg:w-[60vw] text-center font-bold lg:leading-[80px] pt-1">
        Read, discover, set goals. <span className="block"> All in one place.</span>
      </h1>
      <p className="text-3xl text-black font-normal leading-normal lg:w-[70vw] mt-10">
        Axiom Books is the single destination for all the books you love — and all the ones you’ll love next. Browse the Book Store to find the perfect book to read. Track what you’ve read and want to
        read, and set your own Reading Goals — all in one app and across all your Apple devices.
      </p>
      <Image src={library1} alt="library page review" placeholder="blur" quality={100} className="w-[60%] mt-20 rounded-t-3xl" />
    </main>
  );
};

export default Hero;
