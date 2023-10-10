"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp, FaBars } from "react-icons/fa";
import { MdClose, MdLogoDev } from "react-icons/md";
import Link from "next/link";
import "./menu.css";
import Image from "next/image";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [Scrollposition, setScrollposition] = useState();

  const toggleMenu = async () => {
    console.log(isOpen);
    if (!isOpen) {
      setScrollposition(window.scrollY); // Get the current scroll position
      console.log(Scrollposition);
      // Scroll to the top of the page
      window.scrollTo(0, 0);
      console.log(isOpen);
    } else {
      window.scrollTo(0, Scrollposition + 750);
    }

    setIsOpen(!isOpen);

    document.body.style.overflow = isOpen ? "auto" : "hidden";
    console.log(isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const iconColor = isScrolled ? "black" : "white";

  return (
    <>
      <nav
        className={`z-50 fixed top-0 flex w-full flex-wrap items-center justify-between py-10 lg:py-10 ${
          isScrolled ? "bg-gray-100" : "bg-transparent"
        }`}
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2">
            <Link href="/">
              <Image
                style={{
                  filter: isScrolled ? "invert(1)" : "invert(0)",
                }}
                className="menu-logo"
                src="/logo-light.png"
                width={200}
                height={100}
                alt="logo"
              />
            </Link>

            <button
              className={`menu-button ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <div className="flex flex-row justify-center items-center">
                  <p className="text-sm">Close</p>
                  <MdClose className="hover:" color="white" />
                </div>
              ) : (
                <FaBars color={iconColor} />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="w-screen h-screen bg-transparent ">
          <div className="bg-black/95 w-screen h-screen flex justify-center items-center ">
            <ul>
              <li className="text-6xl text-white  hover:text-white/80 pb-2">
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>

              <li className="text-6xl text-white  hover:text-white/80 pb-2">
                <Link href="/legacy" onClick={toggleMenu}>
                  Legacy
                </Link>
              </li>
              <li className="text-6xl text-white  hover:text-white/80 pb-2">
                <Link href="/collections" onClick={toggleMenu}>
                  Collections
                </Link>
              </li>

              <li className="text-6xl text-white">
                <a href="#" onClick={toggleDropdown}></a>
              </li>
              <li className="text-6xl text-white  hover:text-white/80 pb-2">
                <Link href="/#" onClick={toggleMenu}>
                  Stories
                </Link>
              </li>

              <li className="text-6xl text-white  hover:text-white/80 pb-2">
                <Link href="/sustainability" onClick={toggleMenu}>
                  Sustainability
                </Link>
              </li>
              <li className="text-6xl text-white hover:text-white/80">
                <Link href="/contact" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
