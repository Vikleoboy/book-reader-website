import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-200/60 pt-20 pb-4 max-sm:px-4">
      <div>
        <h3 className="text-4xl desktop:text-5xl font-bold text-gray-800 text-center mb-2">Download BookRead</h3>
        <p className="text-gray-600 text-lg desktop:text-3xl desktop:leading-normal mb-6 text-center">Available on iOS and Android. Start your seamless reading journey today!</p>
      </div>
      <div className="flex justify-center items-center gap-5 sm:space-x-4 flex-col sm:flex-row">
        <a
          href="#"
          className="bg-blue-500 text-white desktop:text-2xl
 px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Download for iOS
        </a>
        <a href="#" className="bg-green-500 text-white desktop:text-2xl px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Download for Android
        </a>
      </div>
      <div className="desktop:mt-2 text-center text-gray-600 pt-4 desktop:text-xl">
        <p>&copy; 2024 BookRead. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
