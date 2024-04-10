import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between items-center shadow-md py-6 px-8">
      <h1 className="text-black font-bold text-xl">✨Ibrahim Ozkan</h1>
      <ul className="flex space-x-5">
        <li className="transition duration-200 font-bold text-md hover:text-primary">
          <a href="#home">Home</a>
        </li>
        <li className="transition duration-200 font-bold text-md hover:text-primary">
          <a href="#home">About Me</a>
        </li>
        <li className="transition duration-200 font-bold text-md hover:text-primary">
          <a href="#home">Projects</a>
        </li>
        <li className="transition duration-200 font-bold text-md hover:text-primary">
          <a href="#home">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
