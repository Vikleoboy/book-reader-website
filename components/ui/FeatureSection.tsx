import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
// import featureImg from "../../public/im.png";

const FeatureSection = ({
  img,
  title,
  paragraph,
}: {
  img: StaticImageData;
  title: string;
  paragraph: string;
}) => {
  return (
    <div className="pt-20 h-[100vh] lg:pt-36  px-20 largesceen:px-32 gap-10 flex flex-col lg:flex-row justify-center items-center">
      <div className="flex-1 max-small:w-[90vw] max-lg:w-[80vw]">
        <h2 className="text-4xl tablet:text-5xl largesceen:text-[4rem] lg:w-[70%] font-bold">
          {title}
        </h2>
        <p className="text-lg lg:text-sm tablet:text-base desktop:text-[1.3rem] largesceen:text-2xl pt-5 tablet:pt-10 sm:w-[80%]">
          {paragraph}
        </p>
      </div>
      <div className="flex-1 max-small:w-[90vw] max-lg:w-[80vw] max-sm:mt-2 max-lg:mt-5">
        <Image
          src={img}
          alt="features image"
          quality={100}
          placeholder="blur"
          className="rounded-2xl lg:rounded-3xl "
        />
      </div>
    </div>
  );
};

export default FeatureSection;
