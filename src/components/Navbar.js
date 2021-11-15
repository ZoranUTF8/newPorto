import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  //* app states
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  //* use height of the links to adjust the links container dinamically
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  //* main return
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="zoran logo" className="logo" />
            <button
              className="nav-toggle"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
              <li>
                <Link to="/contact">Contact me</Link>
              </li>
            </ul>
          </div>

          <ul className="social-icons">
            <li>
              <a href="https://github.com/ZoranUTF8" arget="_blank">
                <FaGithub size="30px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zoran-janjic-819093153/"
                target="_blank"
              >
                <FaLinkedin size="30px" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
