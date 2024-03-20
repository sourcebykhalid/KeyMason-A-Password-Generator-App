import React, { useState } from "react";
import Logo from "../img/KeyMason1.png";
import { Link } from "react-scroll";
import { Menu, X } from "@mui/icons-material";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full mb-24 fixed  mx-auto  md:h-28 md:px-10 md:py-3   top-0 z-10 sm:bg-slate-100">
      <nav className="container flex justify-between flex-row items-center">
        <img
          src={Logo}
          alt="KeyMason Logo"
          className="w-16 rounded-lg shadow-md shadow-orange-600 hover:scale-75"
        />
        <div className="hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
              >
                Contact us
              </Link>
            </li>
          </ul>
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Log in
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none cursor-pointer  shadow-md shadow-black"
          >
            Get started
          </Link>
        </div>

        {isOpen && (
          <div className=" mb-56 h-full flex flex-col items-center lg:flex-row lg:items-center lg:order-2 py-12 px-4 fixed top-0 bg-gray-200 ">
            <div className="lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:order-2 lg:ml-4 flex flex-col mt-4 py-2 ">
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none cursor-pointer  shadow-md shadow-black"
              >
                Get started
              </Link>
            </div>
          </div>
        )}
        <div className="md:hidden flex justify-end items-center  ">
          <button onClick={toggleNavbar} className="p-8 focus:outline-none ">
            {isOpen ? (
              <X className="text-gray-800" />
            ) : (
              <Menu className="text-gray-800" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
