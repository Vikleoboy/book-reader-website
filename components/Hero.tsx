import React from "react";
import Image from "next/image";
import iconBook from "../public/icon_books_large.png";
import library1 from "../public/im.png";

const Hero = () => {
  return (
    <main className=" bg-neutral-200/60 flex flex-col justify-center items-center pt-24 relative">
      <Image src={iconBook} alt="book icon" quality={100} />
      <p className="text-black  leading-relaxed text-3xl mt-4">Axiom Books</p>
      <h1 className="lg:text-[80px] sm:text-4xl sm:w-[60vw] text-center lg:w-[48vw] text-center font-bold lg:leading-[80px] pt-1">
        Read, discover, set goals. All in one place.
      </h1>
      <p className="text-2xl text-center text-gray-800 font-normal leading-normal lg:w-[38vw] mt-10">
        Axiom Books is the single destination for all the books you love — and
        all the ones you’ll love next. Browse the Book Store to find the perfect
        book to read. Track what you’ve read and want to read, and set your own
        Reading Goals — all in one app and across all your Apple devices.
      </p>
      <Image
        src={library1}
        alt="library page review"
        placeholder="blur"
        quality={100}
        className="w-[80%] as mt-20 rounded-t-3xl"
      />
    </main>
  );
};

export default Hero;
