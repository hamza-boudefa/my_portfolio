import React from "react";
import { motion } from "framer-motion";
import shield from '../assets/icons/shield.svg'; // Example of shield icon

const Tech = () => {
  const techStack = [
    {
      icon: <i className="ci ci-reactjs ci-2x"></i>,
      title: "React.js",
      description: "Building dynamic UIs with hooks, context, and React Router.",
      hoverColor: "rgba(97, 218, 251, 0.1)", // React blue
    },
    {
      icon: <i className="ci ci-tailwind ci-2x"></i>,
      title: "Tailwind CSS",
      description: "Styling with utility-first CSS and custom themes for consistency.",
      hoverColor: "rgba(6, 182, 212, 0.1)", // Tailwind cyan
    },
    {
      icon: "https://socket.io/images/logo-dark.svg",
      title: "Database",
      description: "MySQL, MongoDB for NoSQL needs.",
      hoverColor: "rgba(59, 130, 246, 0.1)", // Database blue
    },
    {
      icon: <i className="ci ci-stripe ci-2x"></i>,
      title: "Stripe",
      description: "Handling payments and subscriptions seamlessly.",
      hoverColor: "rgba(99, 102, 241, 0.1)", // Stripe purple
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/900px-Socket-io.svg.png?20200308235956",
      title: "Socket.IO",
      description: "Real-time updates with WebSocket and Socket.IO integration.",
      hoverColor: "rgba(255, 107, 107, 0.1)", // Socket.IO red
    },
    {
      icon: <img src="https://cdn.pixabay.com/photo/2014/04/03/00/38/shield-308943_1280.png" alt="Authentication" className="w-12 h-12" />, // Shield icon for Authentication
      title: "Authentication",
      description: "JWT and OAuth for secure user management.",
      hoverColor: "rgba(16, 185, 129, 0.1)", // Authentication green
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Frameworks & Tech</h1>
        <p className="text-lg text-gray-400 mb-12">
          As a full-stack developer, I work with these tools and technologies regularly.
          My primary stack includes the following, though I'm always open to exploring more:
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group p-6 shadow-lg flex flex-col items-center space-x-4 w-full h-52 rounded-lg border border-[#434155]/20 overflow-hidden bg-black"
              variants={itemVariants}
            >
              {/* Default black background */}
              <div className="absolute inset-0 bg-black"></div>

              {/* Hover background with unique color and blur */}
              <div
                className="absolute w-full !m-0 inset-0 backdrop-blur-3xl opacity-0 group-hover:opacity-55 transition-opacity duration-300"
                style={{ backgroundColor: tech.hoverColor }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex justify-center mb-4 text-white text-3xl">
                  {typeof tech.icon === "string" ? (
                    <img src={tech.icon} alt={tech.title} className="w-12 h-12" />
                  ) : (
                    tech.icon
                  )}
                </div>
                <h2 className="text-xl font-semibold">{tech.title}</h2>
                <p className="text-gray-400 mt-2 text-center">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
