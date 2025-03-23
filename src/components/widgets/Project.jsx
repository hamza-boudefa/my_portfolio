import { ChevronsLeftRightEllipsis, ExternalLinkIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <dev
      
          // target="_blank"
          // rel="noreferrer"
          // href="/projects"
          className="group relative flex items-center overflow-hidden rounded-xl border border-[#434155]/20 backdrop-blur-[7px] bg-transparent[border-image-source:linear-gradient(to right, #00ccfb, #ffffff, #568ee8);border-image-slice:1]  p-6 font-bold w-full h-[384px] cursor-pointer "
        >
        <Link to="/projects" >
          
          <div>
          {/* <ChevronsLeftRightEllipsis size={24} /> */}
            <ChevronsLeftRightEllipsis
              className="absolute right-8 top-0 h-96 w-96 text-gray-200/5 transition-all group-hover:top-8 group-hover:h-20 group-hover:w-20 group-hover:text-gray-200/20"
            />
             
            <p className="mb-2 flex items-center gap-2 text-xl text-[#FF512F]">
              MY WORK <ExternalLinkIcon size={24} />
            </p>
            <p className="text-3xl ">Visit this Portfolio Template</p>
            <p className="text-md mt-3 font-normal text-gray-200/50">
              We have Updates of this Portfolio Design in Figma Community
            </p>
          </div>
          </Link>

        </dev>
  )
}

export default Project