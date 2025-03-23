import React, { useState } from "react";
import { Links } from "react-router-dom";
import techicons from "../../assets/IconsTech.svg";
import TechModal from "../TechModel";
const TechWidget = () => {
  const [open, setOpen] = useState(false);

  const handleModal=()=>{
setOpen(!open)
  }
  return (
    // <div>
    //   <div className="border h-[500px] w-fit p-4 rounded-2xl flex flex-col justify-between  overflow-hidden transition-all duration-300 hover:backdrop-blur-sm hover:bg-[#00000057]">
    //     {/* Title and Description */}
    //     <div className="z-10 mb-4 text-white">
    //       <p className="text-md text-gray-300 font-extrabold">TECHNOLOGIES</p>
    //       <p className="text-xl font-bold">Tools and Frameworks</p>
          
    //     </div>
    //     <img
    //       width={800}
    //       height={800}
    //       src={techicons}
    //       alt=""
    //       className="absolute -bottom-8 -right-8 w-full  -rotate-12 scale-125 transition-transform ease-out group-hover:scale-150"
    //     />
       
    //   </div>
    // </div>
    <div
    onClick={handleModal}
    href={"/#stack"}
    className="group relative w-full h-full max-h-[384px] max-w-[320px] cursor-pointer overflow-hidden rounded-xl bg-black sm:h-[800px] md:h-full lg:h-96 md:max-w-full border border-[#434155]/20 backdrop-blur-[7px] bg-transparent "
  >
    <div
      className="p-4 font-bold"
      style={{
        zIndex: 14,
        position: "absolute",
        // background: "linear-gradient(180deg, #23293c, transparent)",
        width: "100%",
      }}
    >
      <p className="text-md text-white/75">TECHNOLOGIES</p>
      <p className="text-3xl text-white ">Tools and Frameworks</p>
    </div>
    <img
      alt=""
      className="absolute -bottom-8 -right-8 w-full  -rotate-12 scale-125 transition-transform ease-out group-hover:scale-150"
      src={techicons}
      width={800}
      height={800}
    />
    <TechModal open={open} handleModal={handleModal}  />
  </div>
  );
};

export default TechWidget;
