import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaWindows } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-neutral-200/60  pt-20 pb-36 flex flex-col justify-center items-center h-[100vh] max-sm:px-4"
      id="footer"
    >
      <div>
        <h3 className="text-4xl desktop:text-5xl font-bold text-gray-800 text-center mb-4">
          Download Axiom Book Reader
        </h3>
        <p className="text-gray-600 text-lg desktop:text-3xl desktop:leading-normal mb-4 text-center w-[55vw] block mx-auto">
          Step into a world of limitless stories with the Axiom Book Reader.
          Download now to access a vast library of books, track your reading
          journey, and set personalized goals—all in one seamless app.
        </p>
      </div>
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
      <div className="desktop:mt-2 text-center text-gray-600 pt-4 desktop:text-xl">
        <p>&copy; 2024 Axiom Books. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
