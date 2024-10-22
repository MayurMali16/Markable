import React from 'react';
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          
       
          <div className="mb-8 md:mb-0 mx-2">
            <h4 className="font-bold text-lg">Makerble</h4>
            <ul className="mt-4 space-y-2">
              <li>About us</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Cookies</li>
            </ul>
          </div>

         
          <div className="flex flex-wrap justify-between w-full md:w-2/3">
            <div className="mb-8">
              <h4 className="font-bold text-lg">ORGANISATIONS</h4>
              <ul className="mt-4 space-y-2">
                <li>Control Panel</li>
                <li>Discover the Marketplace</li>
                <li>Create Organisation Account</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-lg">YOUR ACCOUNT</h4>
              <ul className="mt-4 space-y-2">
                <li>Library</li>
                <li>Profile</li>
                <li>Projects</li>
                <li>Help</li>
              </ul>
            </div>

            <div className="mb-8 my-2">
              <h4 className="font-bold text-lg">EXPLORE</h4>
              <ul className="mt-4 space-y-2">
                <li>Metrics</li>
                <li>Networks</li>
                <li>Strategies</li>
                <li>Projects</li>
                <li>Studies</li>
              </ul>
            </div>
          </div>

        </div>

      
        <div className="flex justify-center space-x-6 mb-4">
          <FaLinkedin size={24} className="text-blue-600 cursor-pointer" />
          <FaYoutube size={24} className="text-red-600 cursor-pointer" />
          <FaInstagram size={24} className="text-pink-500 cursor-pointer" />
          <FaTwitter size={24} className="text-blue-400 cursor-pointer" />
          <FaFacebook size={24} className="text-blue-800 cursor-pointer" />
        </div>

      
        <div className="text-center">
          <p>&copy; 2024 My Application. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
