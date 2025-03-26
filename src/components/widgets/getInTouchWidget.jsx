import React from "react";
// import contactIcons from "../../assets/IconsContact.svg"; // Replace this with a relevant contact icon or image.

const GetInTouchWidget = () => {
  return (
    <div
    className="group relative w-full h-full max-h-[384px] max-w-[300px] md:max-w-full cursor-pointer overflow-hidden rounded-xl bg-black hover:shadow-2xl transition-shadow duration-300 sm:h-[800px] md:h-full lg:h-96 "
    >
      <div
        className="p-4 font-bold text-white"
        style={{
          zIndex: 14,
          position: "absolute",
        //   background: "linear-gradient(180deg, rgba(30, 42, 71, 0.9), transparent)",
          width: "100%",
        }}
      >
        <p className="text-md text-white/75 uppercase tracking-widest">Connect with Us</p>
        <p className="text-3xl leading-tight mt-2">
          Let’s Build <br /> Something Amazing
        </p>
        <p className="text-sm mt-4">
          Have a project in mind? <br />
          We’d love to hear from you. <br />
          Click to get started!
        </p>
      </div>
      <img
        alt="Get in Touch Icons"
        className="absolute -bottom-8 -right-8 w-full -rotate-12 scale-125 transition-transform ease-out group-hover:scale-150"
        src="https://static.wixstatic.com/media/39e7e6_0313ae063edc41c199540f0f225087f2~mv2.gif"
        width={800}
        height={800}
      />
    </div>
  );
};

export default GetInTouchWidget;
