import React from 'react';
import { BrainCircuit, Laptop, MapPin } from 'lucide-react';
import map from '../assets/map.png'

const UserProfileCard = () => {
  return (
    <div className="relative top-44 mb-10 flex w-full max-w-3xl items-center gap-4 overflow-hidden rounded-xl border border-[#434155]/20 backdrop-blur-[7px] bg-transparent px-8 py-6 bg-[#171616] ">
      {/* Profile Image */}
      {/* <img
        alt="Richard B. Vinueza"
        loading="lazy"
        width="96"
        height="96"
        decoding="async"
        className="h-12 w-12 rounded-full bg-white md:h-[80px] md:w-[80px]"
        src={map}
      />
       */}
      {/* User Info */}
      <div className="flex flex-col items-start justify-center">
        {/* <div className="flex items-center gap-2">
          <p className="font-bold md:text-xl">Hamza Boudefa</p>
        
        </div> */}
        
        {/* Additional Details */}
        <div className="mt-2 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-1">
            <BrainCircuit size={16} /> Hamza Boudefa
          </div>
          {/* Profession */}
          <div className="flex items-center gap-1">
            <Laptop size={16} /> Web Developer
          </div>
          
          {/* Location */}
          <div className="flex items-center gap-1">
            <MapPin size={16} /> Everywhere
          </div>
          
          {/* Availability */}
          <div className="flex items-center gap-1 text-green-500">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/30">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            Available
          </div>
        </div>
      </div>
      
      {/* Background Image */}
      <img
        alt="Background"
        loading="lazy"
        width="240"
        height="96"
        decoding="async"
        className="inset-y-0 absolute right-0 -top-11"
        src={map}
      />
    </div>
    
  );
};

export default UserProfileCard;
