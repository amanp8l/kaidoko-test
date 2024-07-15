import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pgProgramImage from "../images/pg.png";
import awsCourseImage from "../images/aws.png";
import fullStackCourseImage from "../images/full-stack.png";
import { FaArrowRight } from "react-icons/fa";

const BlendedLearningCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const courses = [
    {
      image: pgProgramImage,
      title: "PG Program in Data Engineering",
      rating: "4.5 by 1,724 students",
      teacher: "Mr. Balamurugan N & Harish R",
      price: "₹499",
    },
    {
      image: awsCourseImage,
      title: "Certificate Course in AWS",
      rating: "4.0 by 615 students",
      teacher: "Mr. Yatish Kumar Appu RP (Cloud Computing)",
      price: "₹499",
    },
    {
      image: fullStackCourseImage,
      title: "Certified Full Stack Web Developer Feb 2024 Summary",
      rating: "3.9 by 917 students",
      teacher: "Mahalaskhmi P",
      price: "₹699",
    },
  ];

  return (
    <section className="py-16 bg-[#fdf0e4]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Blended Learning</h2>
          <a href="#" className="text-blue-500 hover:underline">
            View All Courses
          </a>
        </div>
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                  <div className="text-yellow-500 text-sm mb-1">
                    {course.rating}
                  </div>
                  <div className="text-gray-700 text-sm mb-1">
                    {course.teacher}
                  </div>
                  <div className="text-lg font-bold text-green-700 mb-2">
                    {course.price}
                  </div>
                  <div className="text-right">
                    <FaArrowRight className="text-green-700 inline-block" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlendedLearningCarousel;
