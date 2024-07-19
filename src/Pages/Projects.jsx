import React from "react";
import Project from "../Components/Project";
import { useEffect } from "react";
import { projectDetails } from "../Details";

function Projects({ title, setProgress }) {
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
    <main className="bg-gradient-to-r min-h-screen from-blue-100 via-purple-100 to-pink-100 mx-auto max-width pt-4 pb-5 px-4">
      <section>
        <h1 className="text-2xl text-[#2358aa] dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
