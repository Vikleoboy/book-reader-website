import React from "react";
import Image from "next/image";
import emptyLibrary from "../public/emptyLibrary.png";
import { BsDiscord } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineGetApp } from "react-icons/md";

const Goal = () => {
  return (
    <main className="bg-neutral-200/60 w-full py-16 h-[100vh] sm:py-24 flex flex-col  items-center justify-center">
      <div className="w-[80%] mb-5 flex flex-col justify-center items-center medium:mb-16 space-y-3 ">
        <h2 className="max-xs:text-2xl text-4xl tablet:text-5xl largesceen:text-[3rem] font-semibold text-gray-800 text-center  ">
          Contribute to the Future of Reading
        </h2>
        <p className="text-center largesceen:w-[50%]  lg:w-[70%] text-gray-800  lg:text-sm tablet:text-base desktop:text-[1.3rem] largesceen:text-2xl py-5">
          If you like what we&apos;re doing, please give our repo a star
          <span>🌟 </span> on GitHub. Your support helps us grow and continue
          improving the app!
        </p>

        <div className=" flex  flex-col items-center justify-center ">
          <h2 className="max-xs:text-2xl font-semibold text-gray-800 text-3xl text-center">
            Show Some Love! <span>❤️‍🔥</span>
          </h2>
        </div>
        <div className="flex max-xs:flex-col pb-10 items-center justify-center  small:text-base text-xs desktop:text-lg">
          <a
            href="#download"
            className="group relative inline-flex items-center overflow-hidden button-bg rounded-xl focus:outline-none focus:ring  px-5 sm:px-10 py-2 xs:py-3 hover:scale-[1.02] focus:scale-[1.02] transition-all duration-300 max-sm:mt-2 text-white  bg-blue-600 hover:bg-blue-700 xs:mt-8"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <MdOutlineGetApp
                size={20}
                className="-rotate-90 group-hover:text-white"
              />
            </span>

            <a
              target="_blank"
              href="https://github.com/Vikleoboy/Epub-book-Reader/"
            >
              <button className="group-hover:ms-4 flex space-x-3 items-center ">
                <span className="  button-text">Ready to contribute?</span>
                <span className=" text-2xl">
                  <BsGithub />
                </span>
              </button>
            </a>
          </a>
        </div>
        <h2 className="max-xs:text-2xl font-semibold text-gray-800 text-3xl text-center">
          Join Our Communities
        </h2>
        <div className=" pt-4 flex space-x-5">
          <p className=" text-4xl">
            <a target="_blank" href="https://x.com/VikLeo10">
              <BsTwitterX />
            </a>
          </p>
          <p className=" text-4xl text-blue-800">
            <a target="_blank" href="https://discord.gg/fKqkNjYgBb">
              <BsDiscord />
            </a>
          </p>
          <p className=" text-4xl">
            <a
              target="_blank"
              href="https://github.com/Vikleoboy/Epub-book-Reader/"
            >
              <BsGithub />
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Goal;
