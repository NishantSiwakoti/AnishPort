import React from "react";
import pr from "../assets/pr.png";
import fc from "../assets/fc.png";
import w from "../assets/w.jpg";
import di from "../assets/di.png";
import cap from "../assets/cap.png";
import Cards from "../Components/Cards";
import { useEffect } from "react";
const Tools = ({ setProgress, title }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, []);
  useEffect(() => {
    document.title = `${title} | Eanish`;
  });
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
        <div>
          {" "}
          <Cards img={cap} title="CapCut" />
        </div>
        <div>
          {" "}
          <Cards img={di} title="DiVinci Resolver" />
        </div>
      </div>
    </section>
  );
};

export default Tools;
