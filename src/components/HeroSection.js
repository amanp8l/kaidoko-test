import React from "react";
import peoplesImage from "../images/peoples.png";
import Briefcase from "../images/Briefcase 2.jpg";
import Cap from "../images/Cap.jpg";

const HeroSection = () => (
  <section className="bg-[FFFFFF] py-16" style={{padding: "3rem 5rem", backgroundColor: "#fff9ef", margin: "3rem", transform: "translate(0rem, -3rem)"}}>
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="text-center lg:text-left">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Skyrocket your career towards excellence */}
        <h1 className="text-5xl text-gray-800 mb-4">
          Skyrocket your <br />
          <span className="text-5xl text-black font-bold">
            career towards
            <br />
            excellence
          </span>{" "}
        </h1>
        <ul className="list-none pl-0">
          <li className="flex items-center text-lg text-gray-700 mb-2">
            <span className="mr-2 inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
            Flexible Learning
          </li>
          <li className="flex items-center text-lg text-gray-700 mb-2">
            <span className="mr-2 inline-block w-4 h-4 bg-green-500 rounded-full"></span>
            Interactive Learning Experience
          </li>
          <li className="flex items-center text-lg text-gray-700 mb-2">
            <span className="mr-2 inline-block w-4 h-4 bg-orange-500 rounded-full"></span>
            Career Opportunities
          </li>
        </ul>
      </div>
      <div className="relative mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center items-center">
        <img src={peoplesImage} alt="Hero" className="w-full h-auto" style={{width: "90%", transform: "translate(0, 6rem)"}} />
        <img
          src={Briefcase}
          alt="Briefcase"
          className="absolute bottom-0 -left-40 w-16 h-16 lg:w-32 lg:h-32"
        />
        <img
          src={Cap}
          alt="Cap"
          className="absolute top-0 right-0 w-16 h-16 lg:w-32 lg:h-32"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
