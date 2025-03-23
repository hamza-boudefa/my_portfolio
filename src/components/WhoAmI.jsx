import React from 'react';

const WhoAmI = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 text-white mt-32">
      {/* Quote */}
      <h3   data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="250"
     data-aos-offset="0" className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        "To teach is to learn twice."
      </h3>

      {/* Title */}
      <h4 className="text-xl font-bold">Who am I?</h4>

      {/* Description */}
      <h4
        data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"

       className="max-w-[62rem]  text-muted-foreground sm:text-xl sm:leading-10 tracking-wider">
        I’m a passionate <span className="font-bold">Full-Stack Web Developer</span> and aspiring <span className="font-bold">Web Instructor</span>. With 3+ years of hands-on experience, I’m still learning every day and excited to share my journey. I love building <span className="cursor-pointer rounded-sm border px-1 font-bold">web apps</span>, exploring <span className="cursor-pointer rounded-sm border px-1 font-bold">UI/UX</span>, and diving deeper into the world of <span className="cursor-pointer rounded-sm border px-1 font-bold">web development</span>.
        <br />
        Teaching others is a privilege, and I’m grateful for the opportunity to grow alongside my students.
      </h4>
    </div>
  );
};

export default WhoAmI;
