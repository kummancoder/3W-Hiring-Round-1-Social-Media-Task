import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl h-[60px] mx-auto flex items-center px-6 justify-between bg-white ">
        {/* Left Section: Logo and Features */}
        <div className="nLeft flex items-center gap-12">
          {/* Logo */}
          <img
            src="https://media.licdn.com/dms/image/v2/C4E0BAQE1kc6jRFNKBw/company-logo_200_200/company-logo_200_200/0/1645964480832/triple_w_solutions_logo?e=1745452800&v=beta&t=b2UKiPf6ltyubshFif87CSfFbRf5gYFRjp1Th2bpab0"
            alt="Plantix Logo"
            className="h-[40px]"
          />
          {/* Features */}
        </div>

        {/* Right Section: Buttons */}
        <div className="nRight flex items-center gap-4">
          <Link to="/upload">
            <button className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Upload Images
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="text-base font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
