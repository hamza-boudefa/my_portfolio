"use client"
import { Link } from "react-router-dom"

const ProjectDetails = ({ project }) => {
  const { publishDate, title, author, mainImage, memoryInputPlaceholder, sections, seeAllPostsLink } = project

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white pb-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 pt-12">
        <div className="mb-6">
          <Link to="/projects" className="flex items-center text-gray-400 hover:text-white transition-colors">
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

        <div className="mb-2 text-gray-400 text-sm">Published on {publishDate}</div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        {author && (
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden mr-3">
              <img src={author.avatar || "/placeholder.svg"} alt={author.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm">{author.name}</span>
          </div>
        )}

        {/* Main Screenshot */}
        <div className="rounded-lg overflow-hidden mb-6">
          <img
            src={typeof mainImage === "string" ? mainImage : mainImage?.src || "/placeholder.svg"}
            alt={typeof mainImage === "string" ? title : mainImage?.alt || title}
            className="w-full"
          />
        </div>

        {/* Memory Input */}
        {memoryInputPlaceholder && (
          <div className="mb-8">
            <input
              type="text"
              placeholder={memoryInputPlaceholder}
              className="w-full p-3 rounded-md bg-white text-black"
            />
          </div>
        )}

        {/* Project Sections */}
        <div className="mb-10">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              {section.title && <h2 className="text-xl font-semibold mb-3">{section.title}</h2>}

              {section.paragraphs &&
                section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-300 mb-6">
                    {paragraph}
                  </p>
                ))}

              {section.images &&
                section.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="rounded-lg overflow-hidden mb-8">
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full" />
                  </div>
                ))}

              {section.links &&
                section.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.url} className="inline-block text-blue-400 hover:text-blue-300 mb-4">
                    {link.text}
                  </a>
                ))}
            </div>
          ))}

          {/* See All Posts */}
          {seeAllPostsLink && (
            <div className="flex justify-center">
              <Link to="/projects" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {seeAllPostsLink.text}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 flex flex-col items-center justify-center">
        {/* <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div> */}

        <div className="text-center text-gray-500 text-sm">
          {/* <p>Created with love in ❤️ 🌎 🔥</p> */}
          <p className="mt-2">© Hamza Boudefa - 2024</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

