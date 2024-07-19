import React from "react";
import { NavLink } from "react-router-dom";
import pr from "../assets/pr.png";
import fc from "../assets/fc.png";
import w from "../assets/w.jpg";
import Cards from "../Components/Cards";
const Tools = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <h1 className="text-center font-bold text-[#2358aa] text-4xl p-5">
        Softwares
      </h1>
      <div className="flex justify-center items-center flex-wrap pt-5">
        <div>
          {" "}
          <Cards img={pr} title="Premiere Pro" />
        </div>
        <div>
          {" "}
          <Cards img={fc} title="Final Cut Pro" />
        </div>
        <div>
          {" "}
          <Cards img={w} title="Wondershare Filmora" />
        </div>
      </div>
    </section>
  );
};

export default Tools;
