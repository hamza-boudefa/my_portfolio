import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Make sure to import AOS styles
import dr4 from "../images/dr4.jpg";
import UserProfileCard from "./UserProfileCard";

const Banner = ({ name }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <section
      className="relative flex justify-center items-center h-[calc(100%-93px)] text-white bg-black bg-[url('/src/images/Daco_25178.png')] bg-bottom bg-no-repeat bg-cover flex flex-col"
    >
      {/* Blurred Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        data-aos="fade" // AOS fade-in effect
        data-aos-delay="200" // Delay for fade-in effect
      ></div>
      
      <div className="flex flex-col items-center text-center space-y-4 z-10" >
        <span
          className=" bg-gradient-to-r from-gray-200 via-orange-300 to-blue-300 bg-clip-text text-transparent text-[50px] md:text-[80px] lg:text-[90px] leading-[82px] font-black w-min "
          data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
        >
          {name}
        </span>
        <div className="text-2xl md:text-3xl">
          <Typewriter
            options={{
              strings: ["Bringing your ideas to life", "Innovating for the future", "Designing your success"],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              pauseFor: 2000,
            }}
          />
        </div>
      </div>

      {/* UserProfileCard with AOS animation */}
      <UserProfileCard data-aos="fade-up" data-aos-delay="800" />
    </section>
  );
};

export default Banner;
