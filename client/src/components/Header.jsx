import React from "react";

import { CiSearch } from "react-icons/ci";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 gap-2">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-3xl flex flex-wrap">
            <span className="text-slate-500">Seiwa </span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex flex-row gap-2 items-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-20 sm:w-56"
            placeholder="Search..."
          />
          <CiSearch size={25} className="text-slate-600" />
        </form>
        <ul className="flex flex-row gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-slate-700 hover:underline hover:cursor-pointer">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
