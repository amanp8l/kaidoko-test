import React from "react";
import robotIcon from "../images/robot.jpg"; // Update the path as needed

const BrowseCategories = () => (
  <section className="bg-[FFFFFF] py-16" style={{padding: "0rem 5rem", backgroundColor: "#fff9ef", margin: "3rem", transform: "translate(0rem, -3rem)"}}>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800">
            Browse by Categories
          </h2>
          <p className="text-gray-700 mt-4">
            Select the topics below to view corresponding courses.
          </p>
        </div>
        <img src={robotIcon} alt="Robot" className="w-32 h-32" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
          Java Script
        </button>
        <button className="py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
          Web Development
        </button>
        <button className="py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
          Node.Js
        </button>
        <button className="py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
          HTML & CSS
        </button>
        <button className="py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
          Product Design
        </button>
        <button className="py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
          React JS
        </button>
        <button className="py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
          Unreal Engine
        </button>
        <button className="py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
          Design Theory
        </button>
      </div>
    </div>
  </section>
);

export default BrowseCategories;
