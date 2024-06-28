import React from "react";
import Image from "next/image";
import emptyLibrary from "../public/emptyLibrary.png";

const Goal = () => {
  return (
    <main className="bg-neutral-200/60 py-16 sm:py-24 flex flex-col items-center ">
      <div className="w-[80%] mb-5  medium:mb-16">
        <h2 className="text-4xl tablet:text-5xl largesceen:text-[4rem] font-semibold text-gray-800 text-left  ">A Reading Goal you can’t put down.</h2>
        <p className="text-left lg:w-[70%] text-gray-800 text-lg lg:text-sm tablet:text-base desktop:text-[1.3rem] largesceen:text-2xl py-5">
          Setting a Reading Goal helps make reading a priority by tracking the amount of time you’re reading. Build strong reading habits and celebrate your achievements — whether that’s a daily
          reading goal, a new streak length record or how many books you’ve read this year.
        </p>
      </div>

      <Image src={emptyLibrary} alt="library page" placeholder="blur" quality={100} priority className="w-[75%]  lg:w-[60%] rounded-lg medium:rounded-2xl" />
    </main>
  );
};

export default Goal;
