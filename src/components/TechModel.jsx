'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import {
    FaJs,
    FaNodeJs,
    FaLock,
    FaReact,
    FaStripe,
    FaAngular,
    FaGit,
    FaGithub,
    FaGitlab,
    FaFigma,
    FaMoon,
  } from 'react-icons/fa';
  import {
    SiTypescript,
    SiExpress,
    SiMysql,
    SiSequelize,
    SiMongodb,
    SiMongoose,
    SiJsonwebtokens,
    SiRedux,
    SiTailwindcss,
    SiAntdesign,
    SiFramer,
    SiVite,
    SiSocketdotio,
    SiCapacitor,
    SiPostman,
    SiReact,
  } from 'react-icons/si';
import { X } from 'lucide-react';

export default function TechModal({ open, handleModal }) {
  const [isVisible, setIsVisible] = useState(open);
  const [scaled, setScaled] = useState(false);
  const [activeTab, setActiveTab] = useState('Frontend');

  const tools = [
    { name: 'JavaScript', description: 'Core language for web development', link: '#', icon: <i className="ci ci-js ci-2x"></i>, category: 'Frontend' },
    { name: 'TypeScript', description: 'Strongly typed JavaScript', link: '#', icon: <i className="ci ci-ts ci-2x"></i>, category: 'Frontend' },
    { name: 'Node.js', description: 'Backend runtime', link: '#', icon: <i className="ci ci-nodejs-vertical-dark ci-3x"></i>, category: 'Backend' },
    { name: 'Express.js', description: 'Web application framework for Node.js', link: '#', icon:<i className="ci ci-expressjs-wordmark ci-5x"></i>, category: 'Backend' },
    { name: 'MySQL', description: 'Relational database', link: '#', icon: <i className="ci ci-mysql-vertical ci-3x"></i>, category: 'Database' },
    { name: 'Sequelize', description: 'Node.js ORM for SQL databases', link: '#', icon: <SiSequelize className="w-6 h-6 text-white" />, category: 'Database' },
    { name: 'MongoDB', description: 'NoSQL database', link: '#', icon: <i className="ci ci-mongodb2-horizontal ci-5x"></i>, category: 'Database' },
    { name: 'Mongoose', description: 'ODM library for MongoDB', link: '#', icon: <SiMongoose className="w-6 h-6 text-red-950" />, category: 'Database' },
    { name: 'OAuth2', description: 'Authorization framework', link: '#', icon: <FaLock className="w-6 h-6 text-white" />, category: 'Security & APIs' },
    { name: 'JWT', description: 'JSON Web Tokens for authentication', link: '#', icon: <SiJsonwebtokens className="w-6 h-6 text-white" />, category: 'Security & APIs' },
    { name: 'React', description: 'Frontend library', link: '#', icon: <i className="ci ci-reactjs ci-2x"></i>, category: 'Frontend' },
    { name: 'Redux', description: 'State management library', link: '#', icon: <i className="ci ci-redux ci-2x"></i>, category: 'Frontend' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework', link: '#', icon: <i className="ci ci-tailwind ci-2x"></i>, category: 'Frontend' },
    { name: 'Ant Design', description: 'UI design system', link: '#', icon: <SiAntdesign className="w-6 h-6 text-white" />, category: 'Frontend' },
    { name: 'Moon UI', description: 'Lightweight UI components', link: '#', icon: <FaMoon className="w-6 h-6 text-white" />, category: 'Frontend' },
    // { name: 'ChadCN UI', description: 'React-based UI components', link: '#', icon: <SiReact className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Framer Motion', description: 'Animations library', link: '#', icon: <i className="ci ci-framer-motion ci-2x"></i>, category: 'Frontend' },
    { name: 'Stripe', description: 'Payment gateway', link: '#', icon: <i className="ci ci-stripe ci-2x"></i>, category: 'Tools & Platforms' },
    { name: 'Vite', description: 'Frontend build tool', link: '#', icon: <SiVite className="w-6 h-6 text-white" />, category: 'Tools & Platforms' },
    { name: 'Angular', description: 'Frontend framework', link: '#', icon: <i className="ci ci-angular ci-2x"></i>, category: 'Frontend' },
    { name: 'Socket.io', description: 'Real-time communication library', link: '#', icon: <SiSocketdotio className="w-6 h-6 text-white" />, category: 'Tools & Platforms' },
    { name: 'Capacitor', description: 'Cross-platform app runtime', link: '#', icon: <SiCapacitor className="w-6 h-6 text-white" />, category: 'Tools & Platforms' },
    { name: 'Git', description: 'Version control system', link: '#', icon: <i className="ci ci-git ci-2x"></i>, category: 'Tools & Platforms' },
    { name: 'GitHub', description: 'Git repository hosting service', link: '#', icon: <i className="ci ci-github ci-2x"></i>, category: 'Tools & Platforms' },
    { name: 'GitLab', description: 'Git-based DevOps platform', link: '#', icon: <i className="ci ci-gitlab ci-2x"></i>, category: 'Tools & Platforms' },
    { name: 'Figma', description: 'Design tool', link: '#', icon: <i className="ci ci-figma ci-2x"></i>, category: 'Design' },
    { name: 'Postman', description: 'API testing tool', link: '#', icon: <i className="ci ci-postman ci-2x"></i>, category: 'Security & APIs' },
  ];

  // Simplified categories
  const categories = [ 'Frontend', 'Backend', 'Database', 'Security & APIs', 'Tools & Platforms', 'Design'];

  const filteredTools =  tools.filter(tool => tool.category === activeTab);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setTimeout(() => setScaled(true), 10); // Delay to ensure DOM is updated before scaling up
    } else {
      setScaled(false);
      setTimeout(() => setIsVisible(false), 500); // Wait for the scale-down animation to complete
    }
  }, [open]);

  return (
    <>
      {isVisible && (
        <Dialog
          open={isVisible}
          onClose={() => handleModal()}
          className="fixed inset-0 z-20 flex items-center justify-center backdrop-blur-sm"
        >
          {/* Smooth Backdrop Animation */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out ${
              scaled ? 'bg-opacity-75' : 'bg-opacity-0'
            }`}
          />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              {/* Smooth Panel Animation */}
              <DialogPanel
                className={`w-full h-[640px]  max-w-4xl transform overflow-hidden rounded-lg bg-black p-6 text-left shadow-xl transition-all duration-500 ease-in-out ${
                  scaled ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="flex flex-col">
                  <DialogTitle as="h3" className="text-lg font-medium text-white flex justify-between">
                    <span>Technologies</span>
                    <X color='white' className='cursor-pointer'                       onClick={() => handleModal()}
                    />
                  </DialogTitle>
              
                  <div className="flex space-x-2 mt-4">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg ${
                          activeTab === category
                            ? 'bg-white text-black '
                            : ' text-white border border-white hover:bg-white hover:text-black transition-all'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3">
                    {filteredTools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-[#434155] p-4 shadow "
                      >
                        <div>
                          {tool.icon}
                          <h4 className="text-sm font-semibold text-white">{tool.name}</h4>
                          <p className="mt-1 text-xs text-gray-400">{tool.description}</p>
                        </div>
                        {/* <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-400 hover:underline"
                        >
                          🔗
                        </a> */}
                      </div>
                    ))}
                  </div>
                  
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}