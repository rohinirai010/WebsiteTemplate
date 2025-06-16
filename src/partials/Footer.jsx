import React from "react";
import mainLogo from "../images/mainWebsiteLogo.png";
import instaIcon from "../images/instaIcon.svg"
import facebookIcon from "../images/facebookIcon.svg"
import linkedinIcon from "../images/linkedinIcon.svg"
import appleIcon from "../images/appleIcon.svg"
import playStoreIcon from "../images/playStoreIcon.svg"

import { PrimaryButton } from "../components/ButtonsComponent";

const Footer = () => {
  return (
    <>
      <div
        className="px-6 sm:px-8 md:px-10 lg:px-20 xl:px-30  pt-10 pb-6"
        style={{ background: "var(--color-accent)" }}
      >
        {/* Top section with logo and social icons */}
        <div className="flex flex-row items-center justify-between mb-12">
          <img
            src={mainLogo}
            alt="Main Logo"
            className="w-[7rem] sm:w-[10rem] md:w-[10rem] h-5 md:h-8"
          />

          {/* social media section */}
          <div className="flex flex-row gap-3">
            <div className="bg-gray-400 p-2 rounded-full">
              <img src={instaIcon} alt="" className="w-4 h-4" />
            </div>
            <div className="bg-gray-400 p-2 rounded-full">
              <img src={facebookIcon} alt="" className="w-4 h-4" />
            </div>
            <div className="bg-gray-400 p-2 rounded-full">
              <img src={linkedinIcon} alt="" className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
          
          {/* Menu Section */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4 tracking-wider">MENU</h3>
            <div className="w-full h-[0.5px] " style={{ background: "var(--color-white)" }}></div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-6">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">HOME</a>
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">ABOUT</a>
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">PRICING</a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">TOKENS</a>
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">BLOG</a>
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">CONTACT US</a>
              </div>
            </div>
          </div>

          {/* Download App Section */}
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-4xl p-8 max-w-md">
            <h3 className="text-white text-lg font-semibold mb-3">DOWNLOAD OUR APPLICATION</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className=" px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2" style={{ background: "var(--color-primary)" }}>
                <img src={appleIcon} alt="Apple Icon" className="w-5 h-5 flex-shrink-0" /> 
                APP STORE
              </button>
              <button className=" px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2" style={{ background: "var(--color-primary)" }}>
                <img src={playStoreIcon} alt="Play Store Icon" className="w-5 h-5 flex-shrink-0" /> 
                PLAY STORE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-gray-600">
          <p className="text-gray-400 text-sm">All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;