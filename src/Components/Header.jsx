import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mx-auto md:flex justify-between items-center py-4 max-width bg-[#2358aa] shadow-lg">
      <div className="flex justify-between items-center w-full md:w-auto py-2 md:py-0">
        <NavLink to="/">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-500 to-red-500">
            Eanish
          </h1>{" "}
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer md:hidden">
          <svg
            className="stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex text-center w-full md:w-auto transition-all duration-300 ease-in-out`}
      >
        <ul className="dark:text-light-content text-white font-semibold md:flex items-center md:space-x-5 md:mr-10">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to} className="pb-1 md:pb-0">
              <NavLink
                exact
                to={item.to}
                onClick={toggleClass}
                className="block py-2 px-4 rounded hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
                activeClassName="bg-white bg-opacity-30"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
