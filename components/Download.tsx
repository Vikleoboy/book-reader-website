import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaWindows } from "react-icons/fa6";
import ClickPopupForm from "./ui/ClickPopupForm";

const Download = () => {
  return (
    <div id="download" className="pt-20 pb-36">
      <div>
        <h3 className="text-4xl desktop:text-5xl font-bold text-gray-800 text-center mb-4">Download Axiom Book Reader</h3>
        <p className="text-gray-600 text-lg desktop:text-3xl desktop:leading-normal mb-4 text-center w-[55vw] block mx-auto">
          Step into a world of limitless stories with the Axiom Book Reader. Download now to access a vast library of books, track your reading journey, and set personalized goals—all in one seamless
          app.
        </p>
      </div>
      <div className="flex max-xs:flex-col items-center justify-center gap-6 xs:gap-2 md:gap-8 small:text-base text-xs desktop:text-lg w-full relative">
        <ClickPopupForm />
      </div>
    </div>
  );
};

export default Download;
