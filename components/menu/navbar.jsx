"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import "./menu.css";
import Image from "next/image";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
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
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2">
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
              <li className="text-6xl text-white">
                <a href="#" onClick={toggleDropdown}>
                  <div className="flex flex-row items-center  hover:text-white/80 pb-2">
                    <span>Products</span>
                    <FaAngleDown
                      className={`dropdown-icon ${
                        isDropdownOpen ? "hidden" : ""
                      }`}
                    />
                    <FaAngleUp
                      className={`dropdown-icon ${
                        isDropdownOpen ? "" : "hidden"
                      }`}
                    />
                  </div>
                </a>
                {isDropdownOpen && (
                  <ul className="submenu-list">
                    <li className="submenu-item">
                      <Link href="/products/category1" onClick={toggleMenu}>
                        Category 1
                      </Link>
                    </li>
                    <li className="submenu-item">
                      <Link href="/products/category2" onClick={toggleMenu}>
                        Category 2
                      </Link>
                    </li>
                    <li className="submenu-item text-white  hover:text-white/80">
                      <Link href="/products/category3" onClick={toggleMenu}>
                        Category 3
                      </Link>
                    </li>
                  </ul>
                )}
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