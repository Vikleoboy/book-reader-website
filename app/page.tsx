"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Goal from "@/components/Goal";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import { useEffect } from "react";
// import { useAuth } from "./contexts/AuthProvider";
// import { useUser } from "./contexts/UserProvider";
// import { UserData } from "@/data/user";
// import axios, { AxiosResponse } from "axios";


export default function Home() {
  // Auto authentication (auto login)
  // dont't touch this !!!
  // unless you know what are you doing

  // const serverBase = process.env.NEXT_PUBLIC_DB_HOST;  
  // const { token, logout } = useAuth();
  // const { setUser, setLoadingUser } = useUser();

  // useEffect(() => {
  //   // if user isnt loged in
  //   // set his data to null
  //   if (!token) {
  //     setUser(null);
  //     setLoadingUser(false);
  //     return;
  //   }

  //   // if user is loged in
  //   // try to get user data
  //   axios
  //     .get(`${serverBase}/user`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     // if user data is got successfully
  //     // add it to the setUser
  //     .then((res: AxiosResponse) => res.data)
  //     .then((data: { data: UserData }) => setUser(data.data))
  //     // if fetching failed
  //     // log user out
  //     // (Token is either false or expired)
  //     .catch(() => {
  //       logout();
  //     })
  //     .finally(() => setLoadingUser(false));
      
  // }, [token]);

  return (
    <main className="relative h-full">
      <Navbar />
      {/* <div className="pl-[10rem] py-2  sticky top-0  max-navsize:hidden mx-[15%] z-[999]  bg-opacity-70 backdrop-blur-3xl">
        <p className="text-2xl text-left w-fit">Axiom Books</p>
      </div>
      <div className="pl-4 py-2  sticky top-0 navsize:hidden -z-0  backdrop-blur-3xl ">
        <p className="text-2xl text-left w-fit">Axiom Books</p>
      </div> */}
      <Hero />
      <Features />
      <Goal />
      <Download />
      <Footer />
    </main>
  );
}