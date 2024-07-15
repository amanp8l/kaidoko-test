import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import simranImage from "../images/simran.png";
import suhaniImage from "../images/suhani.png";
import pencilIcon from "../images/pencil.png";

const Testimonials = () => (
  <section className="bg-[#ECF8DF] py-16 relative">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Testimonials
            </h2>
            {/* <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div> */}
            <p className="text-gray-700 mt-2">4.5 by 1,724 users</p>
          </div>
        </div>
        <div className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-green-500 text-3xl mb-4" />
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="flex items-center">
              <img
                src={simranImage}
                alt="Simran Kalra"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-800">Simran Kalra</p>
                <p className="text-gray-600 text-sm">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-green-500 text-3xl mb-4" />
            <p className="text-gray-700 mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex items-center">
              <img
                src={suhaniImage}
                alt="Suhani Jain"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-800">Suhani Jain</p>
                <p className="text-gray-600 text-sm">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={pencilIcon}
        alt="Pencil Icon"
        className="absolute top-0 right-0 w-16 h-16"
      />
    </div>
  </section>
);

export default Testimonials;
