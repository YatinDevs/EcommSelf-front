import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevisionSimple } from "react-icons/pi";
import logo from "../../assets/logo/iMac3.svg";
import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow("top");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate(`/`)}>
          <img src={logo} alt="logo" />
        </div>
        <div className="desksearchBar">
          <div className="desksearchInput">
            <input
              type="text"
              placeholder="Find mock tests,video courses..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        {mobileMenu ? (
          <ul className="menuItems">
            <li className="menuItemmob" onClick={() => navigate(`/`)}>
              Home
            </li>
            <li
              className="menuItemmob"
              onClick={() => navigationHandler("movie")}
            >
              Movie
            </li>
            <li className="menuItemmob" onClick={() => navigationHandler("tv")}>
              TV Shows
            </li>

            <li className="menuItemmob">My Space</li>
          </ul>
        ) : (
          <ul className="menuItems">
            <li className="menuItemdesk">
              <RxAvatar />
            </li>
          </ul>
        )}

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movies or tv series..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <VscChromeClose
              onClick={() => {
                setShowSearch(false);
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
