import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import robotIcon from "../images/robottwo.png";

const ContactUs = () => (
  <section className=" bg-[#0f574e] py-16">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start text-white">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>
            Plot No. 12, ABC Pocket, Sector-08, Uttam Nagar, New Delhi - 110058
          </p>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <p>(+91) 9876543210</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <p>contactedu@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <FaFacebook className="text-white" />
            <FaTwitter className="text-white" />
          </div>
        </div>
        <div className="relative">
          <img src={robotIcon} alt="Robot Icon" className="w-32 h-32" />
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
