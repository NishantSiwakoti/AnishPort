import React from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import Tools from "../Pages/Tools";
import Services from "../Pages/Services";

const AllRoutes = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <LoadingBar
        color="#FFFF00"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route
          path="/"
          element={<Home title="Home" setProgress={setProgress} />}
        />
        <Route
          path="/about"
          element={<About title="About" setProgress={setProgress} />}
        />
        <Route
          path="/contact"
          element={<Contact title="Contact" setProgress={setProgress} />}
        />
        <Route
          path="/projects"
          element={<Projects title="Projects" setProgress={setProgress} />}
        />
        <Route
          path="/tools"
          element={<Tools title="Softwares" setProgress={setProgress} />}
        />
        <Route
          path="/services"
          element={<Services title="Services" setProgress={setProgress} />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
