import React from "react";
import logo from "../assets/images/e.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRss } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       
          <FaLinkedin />
       
        
          <FaGithub />
      
          <FaSquareXTwitter />
      
          <FaRss />
      
        
      </div>
    </nav>
  );
};

export default Navbar;