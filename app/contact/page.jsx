import React from "react";

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="container mx-auto py-10 flex">
        {/* Left Section */}
        <div className="w-1/2 px-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 mb-8">We&apos;d love to hear from you!</p>
          <div className="mb-4">
      
            
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="mb-2">
              <p>Your Address Here</p>
            </div>
            <div>
              <p>Your Phone Number Here</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 px-6">
          <section className="bg-black bg-opacity-50 rounded-lg p-8">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="block w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:bg-green-600 text-lg font-semibold rounded-lg focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
