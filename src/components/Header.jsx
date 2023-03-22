import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../Images/Logo.png";
import "../Styles/header.css";

function Header({ toggle }) {
  const [scrollNav, SetScrollNav] = useState(false);

  const triggerNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true);
    } else {
      SetScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", triggerNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [showLinks, setShowLinks] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const toggleNavBar = () => {
    showLinks === "nav-menu"
      ? setShowLinks("nav-menu nav-active")
      : setShowLinks("nav-menu");
    //TogglerIcon
    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  return (
    <nav className="nav" scrollNav={scrollNav}>
      <LinkR to="/">
        <img src={Logo} onClick={toggleHome} alt="" className="brand" />
      </LinkR>
      <ul className={showLinks}>
        <li className="nav-item">
          <Link to="/"> Home </Link>
        </li>
        <li to="about" className="nav-item">
          <Link to="about"> About </Link>
        </li>
        <li className="nav-item">
          <Link to="portfolio"> Portfolio </Link>
        </li>
        <li className="nav-item">
          <Link to="contact"> Contact </Link>
        </li>
      </ul>
      <div onClick={toggleNavBar} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
