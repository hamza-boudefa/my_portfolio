import React from 'react';
import resume from '../../assets/resume.png'; // Import your image file
import checkcv from '../../assets/checkcv.svg'; // Import your checkcv image

const CvWidget = () => {
  // URL of your Google Drive PDF, make sure it's publicly accessible
  const resumePDF = 'https://drive.google.com/file/d/1mLcmnqSBhTCzWvuMa5RyhmZ353X1VmLZ/view?usp=sharing';

  return (
    <div className='bg-white w-fit h-fit rounded-3xl relative group'>
      <div
        className="relative bg-cover bg-center w-80 max-w-80 h-96 p-4 rounded-3xl shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 hover:blur-sm"
        style={{
          backgroundImage: `url(${resume})`, // Use the imported resume image as background
        }}
      >
        {/* Overlay to darken the background image for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

        {/* The image that will appear on hover */}
     
      </div>

      <div className='absolute top-0 p-4 rounded-2xl flex flex-col justify-between h-full overflow-hidden transition-all duration-300 hover:backdrop-blur-sm hover:bg-[#00000057]'>
        {/* Title and Description */}
        <div className="z-10 mb-4 text-white">
          <p className="text-md text-gray-300 font-extrabold">RESUME</p>
          <p className="text-xl font-bold">View or Download Resume in PDF</p>
        </div>

        {/* Google Drive Link Section */}
      
      <div className='flex justify-end'>
      <button
         onClick={()=>open(resumePDF)}
         className=" z-10 cursor-pointer border border-white/90 bg-black text-white rounded-2xl w-fit px-4 text-sm py-1  ">
        Visit
      </button>
      </div>
        <img
          src={checkcv}
          alt="Check CV"
          className="absolute -right-[270px] h-full w-full rotate-45 object-cover opacity-0 transition-all duration-300 ease-out group-hover:right-0 group-hover:rotate-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default CvWidget;
