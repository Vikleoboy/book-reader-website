import React from "react";
import Image from "next/image";
import iconBook from "../public/icon_books_large.png";
import library1 from "../public/im.png";

const Publish = () => {
  return (
    <main className="py-16">
      <div className="flex flex-col items-center">
        <Image src={iconBook} alt="book icon" quality={100} className="max-small:w-[35px]" />
        <p className="text-black font-medium  leading-relaxed text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 lg:mt-4">Publish to Axiom Books.</p>
        <p className="text-lg small:text-xl sm:text-2xl largesceen:text-3xl text-left text-gray-800 font-normal leading-normal w-[85%] sm:w-[70%] lg:w-[60%]  mt-5 sm:mt-10">
          Stories are important. Axiom Books for Authors helps you tell yours. Axiom Books for Authors guides you through every step of your journey as an author, from structuring your story to
          packaging your digital book and selling it on our store. Even established authors will find valuable resources on how to grow sales and track performance.
        </p>
      </div>
    </main>
  );
};

export default Publish;
