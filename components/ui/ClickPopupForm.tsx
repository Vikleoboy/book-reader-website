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
    <div className="relative inline-block w-full">
      <div className="flex max-xs:flex-col items-center justify-center gap-6 xs:gap-2 md:gap-8 small:text-base text-xs desktop:text-lg w-full">
        <button
          className="flex items-center px-5 sm:px-6 py-2 bg-orange-500 text-white rounded shadow-md hover:bg-orange-600 transition-all duration-300 focus:outline-none mt-8 hover:scale-[1.02] focus:scale-[1.02] hover:blur-[0.3px] outline-none"
          onClick={togglePopup}>
          <AiFillApple className="mr-2" size={24} />
          <span className="button-text">Download for iOS</span>
        </button>

        <button
          className="flex items-center px-5 sm:px-6 py-2 text-white rounded shadow-md bg-blue-500 hover:bg-blue-600 transition-all duration-300 focus:outline-none xs:mt-8 hover:scale-[1.02] focus:scale-[1.02] hover:blur-[0.3px] outline-none"
          onClick={togglePopup}>
          <FaWindows className="mr-2" size={24} />
          <span className="button-text">Download for Windows</span>
        </button>
      </div>

      {isPopupVisible && (
        <div ref={popupRef} className="absolute top-0 left-[30%] mt-12 p-4 w-[40%] h-[60vh] bg-white shadow-lg rounded z-10 mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-4">
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

            <div>
              <label className="block text-gray-700">Name:</label>
              <input type="text" className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input type="email" className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <button type="submit" className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ClickPopupForm;
