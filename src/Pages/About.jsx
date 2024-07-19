import React from "react";
import pp from "../assets/pp.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function About({ title, setProgress }) {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);
  useEffect(() => {
    document.title = `${title}`;
  });
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8 md:p-12 lg:p-16 rounded-lg shadow-xl">
      <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start lg:ml-8 md:ml-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 ">
          About Me
        </h1>
        <div className="mb-4">
          <span className="text-blue-600 font-semibold text-lg">
            Video Editor
          </span>
        </div>
        <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
          Hi, I am a passionate freelance video editor dedicated to bringing
          stories to life through the art of editing. With a keen eye for detail
          and a love for visual storytelling, I specialize in crafting
          compelling content that captures your audience’s attention and leaves
          a lasting impression. Whether you're looking for polished promotional
          videos, captivating social media content, or cinematic project edits,
          I’m here to transform your vision into reality. Let's create something
          amazing together!
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <NavLink to="/contact">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Me
            </button>
          </NavLink>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
            Download CV
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          className="rounded-full w-60 md:w-96 object-cover border-8 border-[#254d8a] shadow-lg"
          src={pp}
          alt="Profile picture"
        />
      </div>
    </div>
  );
}

export default About;
