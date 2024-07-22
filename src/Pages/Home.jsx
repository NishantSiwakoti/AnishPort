import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../assets/hero.png";
import { NavLink } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Tools from "./Tools";
import {
  VideoCameraIcon,
  SpeakerphoneIcon,
  AdjustmentsIcon,
  SparklesIcon,
  ShareIcon,
} from "@heroicons/react/outline";
const services = [
  { name: "Video Editing", icon: VideoCameraIcon },
  { name: "Special Effects and Motion Graphics", icon: SparklesIcon },
  { name: "Social Media Clips", icon: ShareIcon },
];
import { useEffect } from "react";

function Home({ title, setProgress }) {
  useEffect(() => {
    document.title = `${title} | Eanish`;
  });
  return (
    <>
      <main className="bg-gradient-to-r min-h-screen from-blue-100 via-purple-100 to-pink-100 px-8 md:px-16 lg:px-32 mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left flex-1 lg:ml-10 md:ml-8">
          <h1 className="text-3xl text-gray-800 pt-5 dark:text-gray-100 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Hi,👋
          </h1>
          <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-transparent md:text-4xl xl:text-5xl xl:leading-tight mt-2">
            <TypeAnimation
              sequence={[
                "I am a Video Editor",
                1000,
                "I am a Developer",
                1000,
                "I am a Researcher",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <div className="mt-6">
            <NavLink
              to="/contact"
              className="inline-block px-6 py-3 mt-4 text-white bg-[#2358aa] hover:bg-blue-700 rounded-lg shadow-lg transition duration-300"
            >
              Hire Me
            </NavLink>
          </div>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a
              href="https://www.facebook.com/acdcanish"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x text-blue-700 hover:text-[#2358aa] transition duration-300"></i>
            </a>
            <a
              href="https://www.instagram.com/aannnishhh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x instagram-gradient"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x text-[#0073b1] hover:text-blue-700 transition duration-300"></i>
            </a>
            <a
              href="https://www.youtube.com/@wrap.catroon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-2x text-[#f70000] hover:text-red-700 transition duration-300"></i>
            </a>
          </div>
        </div>
        <div className="mt-2 md:mt-0 flex-1 flex justify-center md:justify-end">
          <img
            className="w-80 h-80 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] xl:w-[500px] xl:h-[500px] rounded object-cover"
            src={hero}
            alt="Hero Illustration"
          />
        </div>
      </main>
      <About setProgress={setProgress} title={title} />
      {/* Services Section */}
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-[#2358aa] mb-8">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col  items-center justify-center p-6 bg-[#2358aa] text-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out m-4 h-64"
            >
              <service.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-center">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <Tools setProgress={setProgress} title={title} />
      <Projects setProgress={setProgress} title={title} />
      <Contact setProgress={setProgress} title={title} />
    </>
  );
}

export default Home;
