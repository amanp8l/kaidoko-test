import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iotImage from "../images/iot.jpg";
import evImage from "../images/ev.jpg";
import webDevImage from "../images/webdev.jpg";
import { FaArrowRight } from "react-icons/fa";

const CarouselSection = () => {
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
      image: iotImage,
      title: "Internet of Things and its Applications - Self Paced",
      rating: "4.0 by 615 students",
      teacher: "Mrs. Anbumalar Pandian",
      price: "₹399",
    },
    {
      image: evImage,
      title: "Certificate course in Electric Vehicle Design",
      rating: "4.0 by 615 students",
      teacher: "Mrs. Anbumalar Pandian",
      price: "₹699",
    },
    {
      image: webDevImage,
      title: "Web Development (Self Paced)",
      rating: "4.5 by 725 students",
      teacher: "Mr. John Doe",
      price: "₹499",
    },
  ];

  return (
    <section className="py-16 bg-[#fdf0e4]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Top Selling in Technology
        </h2>
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-1/3 object-cover"
                />
                <div className="p-4 w-2/3">
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

export default CarouselSection;
