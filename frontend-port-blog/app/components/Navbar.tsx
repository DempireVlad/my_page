import { useState } from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const base = "transition hover:text-blue-400";
  const active = "text-blue-500 font-semibold";

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-gray-200"
        >
          <FaLaptopCode className="text-xl sm:text-2xl md:text-3xl" />
          <span>
            VLadyslav<span className="text-blue-400">Menchynskyi</span>
          </span>
        </NavLink>
        <div className="md:flex items-center gap-6 hidden">
          <div className="space-x-4 text-sm text-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Main
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? active : base)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col absolute top-16 left-0 w-full bg-gray-800 px-6 py-4 space-y-4 text-sm text-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Main
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? active : base)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
