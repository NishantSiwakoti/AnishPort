import React from "react";

const Cards = (props) => {
  return (
    <div className=" mx-auto max-w-xs md:max-w-sm lg:max-w-md">
      <div className="bg-gradient-to-br from-blue-600 via-blue-800 to-blue-950 max-w-full rounded-lg shadow-lg hover:shadow-2xl p-4 m-5 transition duration-300 transform hover:scale-105">
        <img
          src={props.img}
          alt={props.title}
          className="rounded-lg w-full h-48 object-cover"
        />
        <p className="text-center mt-4 text-lg font-semibold text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default Cards;
