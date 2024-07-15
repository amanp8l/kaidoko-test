import React from "react";
import Logo from "../images/logo.png";

const Header = () => (
  <header
    className="bg-white shadow-md"
    style={{ position: "sticky", top: "0", padding: "0px 30px", zIndex: "999" }}
  >
    <nav className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 lg:h-10 mr-2 lg:mr-4" />
        <div className="relative">
          <button className="flex items-center text-gray-700 font-semibold">
            Courses
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
        <input
          type="text"
          placeholder="Search for a course or category"
          className="py-2 px-4 border rounded-full w-48 lg:w-64 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="py-2 px-3 lg:px-4 border rounded-full text-gray-700 hover:bg-gray-100">
          Login
        </button>
        <button className="py-2 px-3 lg:px-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
          Register
        </button>
      </div>
      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
