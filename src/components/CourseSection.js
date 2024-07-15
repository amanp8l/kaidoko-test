import React from "react";
import { FaStar } from "react-icons/fa";
import notebookIcon from "../images/notebook.jpg";
import certificateIcon from "../images/certification.jpg";
import bitcoinIcon from "../images/bitcoin.jpg";
import computerIcon from "../images/computer.jpg";
import dataAnalyticsIcon from "../images/python.jpg";

const CoursesSection = () => (
  <section className="bg-green-900 py-16 text-white rounded-xl" style={{    margin: "3rem", transform: "translate(0, -5.2rem)"}}>
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Top Selling Courses</h2>
          <ul>
            <li className="mb-4 flex items-center">
              <img
                src={bitcoinIcon}
                alt="Bitcoin Technology"
                className="w-10 h-10 mr-4"
              />
              <h3 className="font-semibold">
                Bitcoin Technology and Application
              </h3>
            </li>
            <hr className="border-t border-gray-500 mb-4" />
            <li className="bg-green-800 p-4 rounded-lg mb-4 flex items-center">
              <img
                src={computerIcon}
                alt="Course on Computer Concepts"
                className="w-10 h-10 mr-4"
              />
              <h3 className="font-semibold">Course on Computer Concepts</h3>
            </li>
            <li className="mb-4 flex items-center">
              <img
                src={dataAnalyticsIcon}
                alt="Data Analytics & Machine Learning"
                className="w-10 h-10 mr-4"
              />
              <h3 className="font-semibold">
                Data Analytics & Machine Learning (Python)
              </h3>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-green-800 p-6 rounded-lg shadow-lg mb-8">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">View All Courses</h2>
                {/* <img
                  src={certificateIcon}
                  alt="Certificate"
                  className="w-12 h-12"
                /> */}
              </div>
              <p className="mb-4 text-left">
                Discover the essentials of computing with our 'Course on
                Computer Concepts'. From hardware to programming languages,
                delve into the fundamentals and unlock the keys to navigating
                the digital world confidently.
              </p>
              <p className="font-semibold text-left">Teacher: Mrs. Bhawna</p>
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <span className="ml-2">4.5 by 1,724 students</span>
              </div>
              <p className="font-bold text-xl mb-4 text-left">
                ₹599 <span className="text-sm">(inclusive of taxes)</span>
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-yellow-500 hover:underline">
                  View Details
                </a>
                <a href="#" className="text-yellow-500 hover:underline">
                  Wishlist Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 text-green-900 p-6 rounded-lg shadow-lg flex items-center justify-between mt-8">
        <div className="flex items-center">
          {/* <img src={notebookIcon} alt="Notebook" className="w-12 h-12 mr-4" /> */}
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-lg font-bold">
            Take a practice Quiz designed to sharpen your skills
          </h3>
        </div>
        <div className="ml-4">
          <a
            href="#"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-600"
          >
            Take Quiz
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CoursesSection;
