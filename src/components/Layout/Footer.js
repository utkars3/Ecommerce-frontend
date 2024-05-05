import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram,FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
      <p className="text-center mt-3">
        <a href="https://www.instagram.com/bhotiamarket/" target="_blank"><FaInstagram/></a>|
        <a href="https://www.youtube.com/watch?v=pLi-0PVey-E" target="_blank"><FaYoutube/></a>  
      </p>
      <h1 className="text-center">All Right Reserved &copy; BHOTIA MARKET</h1>
    </div>
  );
};

export default Footer;
