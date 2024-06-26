import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Goal from "@/components/Goal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative h-full">
      <Navbar />
      <div className="pl-[10rem] py-2  sticky top-0  max-navsize:hidden mx-[15%] z-[999]  bg-opacity-70 backdrop-blur-3xl">
        <p className="text-2xl text-left w-fit">BookRead</p>
      </div>
      <div className="pl-4 py-2  sticky top-0 navsize:hidden -z-0  backdrop-blur-3xl ">
        <p className="text-2xl text-left w-fit">BookRead</p>
      </div>
      <Hero />
      <Features />
      <Goal />
      <Footer/>
    </main>
  );
}
