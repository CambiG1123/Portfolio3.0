import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiAlignCenter } from "react-icons/fi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleClose = () => {
    setShowNav(false);
  };

  return (
    <div>
      <FiAlignCenter
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden "
      />
      {showNav ? (
        <div
          onClick={handleClose}
          className="fixed w-full h-screen bg-gray-500/90 flex flex-col justify-center items-center z-20"
        >
          <Link
            to="home"
            spy={true}
            onClick={handleClose}
            smooth={true}
            duration={2000}
            className="w-{75%} flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={25} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            to="about"
            onClick={handleClose}
            spy={true}
            smooth={true}
            duration={1000}
            className="w-{75%} flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FiUser size={25} />
            <span className="pl-4">About</span>
          </Link>
          <Link
            onClick={handleClose}
            to="port"
            spy={true}
            smooth={true}
            duration={1000}
            className="w-{75%} flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FiBriefcase size={25} />
            <span className="pl-4">Projects</span>
          </Link>
          <Link
            onClick={handleClose}
            to="contact"
            spy={true}
            smooth={true}
            duration={2000}
            className="w-{75%} flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={25} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10 ">
          <div className="flex flex-col">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={2000}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome size={25} />
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <FiUser size={25} />
            </Link>
            <Link
              to="port"
              spy={true}
              smooth={true}
              duration={1000}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <FiBriefcase size={25} />
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={2000}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineMail size={25} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
