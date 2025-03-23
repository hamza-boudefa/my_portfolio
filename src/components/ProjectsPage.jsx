"use client"
import { Link } from "react-router-dom"

const ProjectCard = ({ project }) => {
  const { id, title, shortDescription, thumbnail, logo, tags, date } = project

  return (
    <Link to={`/projects/${id}`} className="block mb-8">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        {logo && (
          <div className="absolute top-4 right-4 bg-black/50 p-1 rounded-lg">
            <img src={logo || "/placeholder.svg"} alt={`${title} logo`} className="w-8 h-8" />
          </div>
        )}
      </div>

      <h3 className="text-white text-lg font-medium mt-3">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{shortDescription}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-md uppercase font-medium ${
                tag === "MVP"
                  ? "bg-green-900 text-green-400"
                  : tag === "LIVE"
                    ? "bg-green-900 text-green-400"
                    : tag === "IN PROGRESS"
                      ? "bg-blue-900 text-blue-400"
                      : tag === "REDESIGN"
                        ? "bg-purple-900 text-purple-400"
                        : "bg-red-900 text-red-400"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-gray-500 text-xs">{date}</span>
      </div>
    </Link>
  )
}

const ProjectsPage = ({ projects }) => {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-1">Projects</h1>
        <div className="mb-6">
          <Link to="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go back
          </Link>
        </div>
        {/* <p className="text-gray-400 mb-12">Under construction</p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* <div className="mt-20 flex justify-center">
          <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </div> */}

        <div className="mt-10 text-center text-gray-500 text-sm">
          {/* <p>Created with love in ❤️ 🌎 🔥</p> */}
          <p className="mt-2">© Hamza Boudefa - 2024</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

