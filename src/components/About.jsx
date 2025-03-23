import React from "react";
import CvWidget from "./widgets/CvWidget";
import TechWidget from "./widgets/TechWidget";
import Project from "./widgets/Project";
import GetInTouchWidget from "./widgets/getInTouchWidget";

const About = () => {
  return (
    <>
              <div className="backdrop"></div>
              <h1 className="text-6xl font-extrabold mb-8 text-[#ffffff42] relative bottom-28 text-center">Discover the Magic Behind the Code</h1>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0 grid-rows-4 md:grid-rows-3 lg:grid-rows-2">
              <div className="col-span-2 row-span-1 md:col-span-1 bg-gradient-to-r from-gray-200 via-orange-300 to-blue-300 bg-clip-text text-transparent font-bold text-8xl  hidden lg:flex flex-col  ">
      
      ABOUT ME
      </div>
    <div className="col-span-1 row-span-1">
      <CvWidget />
    </div>

    <div className="col-span-2 row-span-1 md:col-span-1">
      
      <GetInTouchWidget />
    </div>
    {/* <div className="col-span-2 row-span-1 md:col-span-1 text-white font-bold text-8xl  hidden lg:flex flex-col  ">
      
     ABOUT <span className="bg-gradient-to-r from-gray-200 via-orange-300 to-blue-300 bg-clip-text text-transparent " >ME</span>
    </div> */}


    <div className="col-span-2 row-span-1">
      <Project />
    </div>

    <div className="col-span-1 row-span-2">
    <TechWidget />
    </div>
  </div>
    </>
   
  );
};

export default About;
