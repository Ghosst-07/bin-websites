import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black py-8 ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">NEWSLETTER</h2>
            <p className="text-gray-400 mb-2">
              Subscribe to our newsletter for updates:
            </p>
            <div className="flex border border-gray-400  rounded-full justify-evenly">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full px-4 py-2 mr-2 w-2/3 bg-black  text-gray-300 focus:outline-none "
              />
              <button className="">
                <FaArrowRight color="gray" size={20}></FaArrowRight>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">ABOUT US</h2>
            <Link href="#">
              <p className="text-gray-400 hover:underline">Contact Us</p>
            </Link>
            <Link href="/legacy">
              <p className="text-gray-400 hover:underline">Legacy</p>
            </Link>
            <Link href="/legacy">
              <p className="text-gray-400 hover:underline">Stories</p>
            </Link>
            <Link href="/legacy">
              <p className="text-gray-400 hover:underline">Sustainibility</p>
            </Link>
          </div>
          <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">COLLECTION</h2>
            <Link href="/legacy">
              <p className="text-gray-400 hover:underline">Cotton Weaves</p>
            </Link>
            <Link href="/legacy">
              <p className="text-gray-400 hover:underline">Wool Wonders</p>
            </Link>
            <Link href="/legacy">
              <p className="text-gray-400 hover:underline">
                Sustainable Comfort
              </p>
            </Link>
            <Link href="/legacy">
              <p className="text-gray-400 hover:underline">Bath Bliss</p>
            </Link>
            <Link href="/legacy">
              <p className="text-gray-400 hover:underline">Cushion & Beyond</p>
            </Link>
          </div>
          <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">Follow Us</h2>
            <div className="flex">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/6 mb-4 md:mb-0 justify-center items-center">
            <Image
              src="/footerimage.png"
              alt="footer"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">© Copyright - Binarah.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
