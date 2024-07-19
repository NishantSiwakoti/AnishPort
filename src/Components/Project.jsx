import React from "react";
import youtubeIcon from "../assets/youtube.png";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) {
  return (
    <div className="flex justify-center w-full">
      <article className="rounded-xl bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 max-w-lg w-full">
        <img src={image} alt="" loading="lazy" className="w-full" />
        <div className="dark:bg-dark-card p-4">
          <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
            {title}
          </h1>
          <p className="text-content pt-4 font-light">{description}</p>
          <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4"></h3>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center justify-center w-full">
              <img
                src={youtubeIcon}
                alt="YouTube Icon"
                className="inline-block"
                width="20"
                height="20"
              />
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer noopener"
                className="pl-2 font-light dark:text-white"
              >
                Youtube Link
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Project;
