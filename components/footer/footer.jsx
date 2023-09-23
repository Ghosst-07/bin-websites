import React from "react";

function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">About Us</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              velit, lobortis ut magna varius, blandit rhoncus sem. Morbi
              lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">
              123 Main Street
              <br />
              New York, NY 10001
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">Follow Us</h2>
            <div className="flex">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
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
