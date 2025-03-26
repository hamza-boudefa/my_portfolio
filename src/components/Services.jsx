import React from 'react';
import uiIcon from "../images/uiIcon.svg";
import mobile from "../images/mobile.svg";
import uiux from "../images/uiux.svg";
import web from "../images/web.svg";
import system from "../images/system.svg";

const Services = () => {
  return (
    <div className="py-16 text-white text-center">
      {/* Heading */}
      <div className="backdrop"></div>
      <h1 className="text-6xl font-extrabold mb-8 text-[#ffffff42] relative bottom-28">What I Offer to Elevate You</h1>

      {/* Filter Buttons */}
      <div className="flex  justify-center items-center  mb-12 gap-9 md:gap-2 flex-col md:flex-row">
        {['Modern Websites', 'Personalized Design', 'Mobile Apps', 'Custom Solutions', 'Real-Time Features'].map((category, index) => (
          <button
            key={index}
            className="px-6 py-2  bg-black border border-[#434155]/20  rounded-full text-sm font-medium text-white flex items-center space-x-2 hover-txt md:justify-normal justify-center w-full max-w-screen md:max-w-fit m-0">
            <span>✓</span>
            <span>{category}</span>
          </button>
        ))}
      </div>

      {/* Subheading */}
      <p className="text-lg font-light mb-16 max-w-2xl mx-auto">
        Need a sleek website, a custom app, or secure online tools? I've got you covered! Let's build something amazing together!
      </p>

      {/* Service Cards */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 px-8 mx-4 md:mx-24">
        {[
          { title: 'Design System Expert', description: 'Create, edit, or audit your design system for a seamless, consistent user experience.', icon: system },
          { title: 'UX & UI Design', description: 'Craft intuitive, user-friendly designs that enhance user engagement and satisfaction.', icon: uiux },
          { title: 'Web App Development', description: 'Develop dynamic, scalable web applications tailored to your business needs.', icon: web },
          { title: 'Custom Web Solutions', description: 'Build tailored web applications and platforms that meet your specific business needs.', icon: mobile },
        ].map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 shadow-lg flex flex-col items-center space-x-4 w-full h-[119px] bg-[#1f293733] rounded-lg border border-[#434155]/20 backdrop-blur-[7px] bg-transparent h-full">
            <img className="w-16 h-16 rounded-lg" src={service.icon} alt={service.title} />
            <div className="flex flex-col items-center text-center mt-4">
              <h3 className="text-[#e0e0e0]/80 text-[13px] font-semibold font-['Inter']">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 md:h-auto md:px-8 mx-4 md:mx-24 ">
        {[
            { title: 'Design System Expert', description: 'Create, edit, or audit your design system for a seamless, consistent user experience.', icon: system },
            { title: 'UX & UI Design', description: 'Craft intuitive, user-friendly designs that enhance user engagement and satisfaction.', icon: uiux },
            { title: 'Web App Development', description: 'Develop dynamic, scalable web applications tailored to your business needs.', icon: web },
            { title: 'Custom Web Solutions', description: 'Build tailored web applications and platforms that meet your specific business needs.', icon: mobile },
        ].map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 shadow-lg flex items-center space-x-4 w-full  h-[119px] bg-[#1f293733] rounded-lg border border-[#434155]/20 backdrop-blur-[7px] bg-transparent">
            <img className="rounded-lg" src={service.icon} alt={service.title} />
            <div className="flex flex-col items-start">
              <h3 className="text-center text-[#e0e0e0]/80 text-[13px] font-semibold font-['Inter']">{service.title}</h3>
              <p className="text-sm text-gray-400 text-start">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
