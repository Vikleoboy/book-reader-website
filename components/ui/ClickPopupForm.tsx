"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiFillApple } from "react-icons/ai";
import { FaWindows } from "react-icons/fa6";
import Swal from "sweetalert2";

const ClickPopupForm: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsPopupVisible(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    Swal.fire({
      title: "Form Submitted!",
      text: "Your form has been successfully submitted.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      setIsPopupVisible(false);
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <div className="relative inline-block w-full ">
      <div className="flex max-xs:flex-col  items-center justify-center gap-6 xs:gap-2 md:gap-8 small:text-base text-xs desktop:text-lg w-full">
        <button
          className="flex items-center px-5 sm:px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 focus:outline-none mt-8 hover:scale-[1.02] focus:scale-[1.02] hover:blur-[0.3px] outline-none"
          onClick={togglePopup}>
          <AiFillApple className="mr-2" size={24} />
          <span className="button-text">Download for iOS</span>
        </button>

        <button
          className="flex items-center px-5 sm:px-6 py-2 text-white rounded-lg   shadow-md bg-blue-500 hover:bg-blue-600 transition-all duration-300 focus:outline-none xs:mt-8 hover:scale-[1.02] focus:scale-[1.02] hover:blur-[0.3px] outline-none"
          onClick={togglePopup}>
          <FaWindows className="mr-2" size={24} />
          <span className="button-text">Download for Windows</span>
        </button>
      </div>



      {isPopupVisible && (
        <div className=" absolute top-0 left-[50%]">
          <div ref={popupRef} className="relative top-0 left-[-55%]  flex flex-col items-start w-full bg-white border p-10 border-macWindowBorder rounded-lg shadow-md ">
            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className=" text-4xl">
                <p>Get Early Acess </p>
              </div>

              <div className="flex justify-center items-center gap-4 w-full ">
                <div className="flex items-center">
                  <input type="radio" id="testers" name="role" className="mr-2" required />
                  <label htmlFor="testers" className="text-gray-700">
                    Testers
                  </label>
                  <input type="radio" id="users" name="role" className="ml-4 mr-2" required />
                  <label htmlFor="users" className="text-gray-700">
                    Users
                  </label>
                </div>
              </div>


              <div className="flex space-y-2 w-full justify-center items-center ">
                <input
                  type="text"
                  className="w-64 px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email"
                />
              </div>

              <div className="flex w-full justify-center items-center ">
                <input
                  type="text"
                  className="w-64 px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-center items-center ">
                <div className="space-x-2">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickPopupForm;
