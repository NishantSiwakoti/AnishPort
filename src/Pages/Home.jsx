import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../assets/hero.png";
import { NavLink } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <main className=" bg-gradient-to-r min-h-screen from-blue-100 via-purple-100 to-pink-100 px-32 mx-auto flex flex-col md:flex-row items-center">
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
              to="#contact" // Change this to the actual link or section ID where you want to redirect
              className="inline-block px-6 py-3 mt-4 text-white bg-[#2358aa] hover:bg-blue-700 rounded-lg shadow-lg transition duration-300"
            >
              Hire Me
            </NavLink>
          </div>
        </div>
        <div className="mt-10 md:mt-0 flex-1 flex justify-center md:justify-end">
          <img
            className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded"
            src={hero}
            alt="Hero Illustration"
          />
        </div>
      </main>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
