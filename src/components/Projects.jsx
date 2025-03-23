const Projects = () => {
    const projects = [
      {
        name: "ArabPsyc Teleconsulting Platform",
        description: "A teleconsulting platform with scheduling, real-time chat, and blog sections.",
        technologies: ["React.js", "Socket.IO", "Node.js", "Tailwind CSS"],
      },
      {
        name: "MicroCred Fortune Wheel Game",
        description: "Interactive roulette game integrated with Facebook's Meta API.",
        technologies: ["React.js", "Node.js", "MySQL"],
      },
    ];
  
    return (
      <section id="projects" className="py-16 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <ul className="flex flex-wrap mt-4 space-x-2 text-sm text-yellow-500">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="px-2 py-1 bg-gray-700 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  