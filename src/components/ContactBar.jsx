import { Github, Linkedin } from "lucide-react";
import React from "react";

const ContactBar = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/boudefa-hamza",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      link: "https://github.com/",
      icon: <Github className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="social-links"
      className="container mx-auto pt-20 lg:pt-16 text-white rounded-lg border border-[#434155]/20"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 rounded-xl px-8 py-10 text-center">
        <h2 className="font-heading text-4xl font-bold uppercase">
          Learn more about me 🔥
        </h2>
        <p className="text-lg font-medium uppercase">
          Let’s connect and collaborate! Check out my social profiles.
        </p>
        <p className="text-md text-gray-600">
          Keep in touch, follow my journey, and let’s grow together. 🚀
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105"
            >
              {social.icon}
              <span className="text-sm font-semibold">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
