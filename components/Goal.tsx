import React from "react";
import Image from "next/image";
import emptyLibrary from "../public/emptyLibrary.png";

const Goal = () => {
  return (
    <main className="bg-neutral-200/60 w-full py-16 h-[100vh] sm:py-24 flex flex-col  items-center justify-center ">
      <div className="w-[80%] mb-5 flex flex-col justify-center items-center medium:mb-16">
        <h2 className="text-4xl  tablet:text-5xl largesceen:text-[4rem] font-semibold text-gray-800 text-center  ">
          Contribute to the Future of Reading
        </h2>
        <p className="text-center w-full lg:w-[70%] text-gray-800 text-lg lg:text-sm tablet:text-base desktop:text-[1.3rem] largesceen:text-2xl py-5">
          Discover a reading goal that keeps you engaged. Set personalized
          milestones, track your progress, and explore new books—all designed to
          keep you turning pages.
        </p>

        <h2 className=" text-4xl">Join Our Communities</h2>
      </div>

      <Image
        src={emptyLibrary}
        alt="library page"
        placeholder="blur"
        quality={100}
        priority
        className="w-[75%]  lg:w-[60%] rounded-lg medium:rounded-2xl"
      />
    </main>
  );
};

export default Goal;
