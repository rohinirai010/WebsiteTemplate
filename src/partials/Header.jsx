import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainLogo from "../images/mainWebsiteLogo.png";
import { PrimaryButton } from "../components/ButtonsComponent";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Map nav links to their routes
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" }
  ];

  // Determine active link based on current path
  const getActiveLink = () => {
    const currentLink = navLinks.find(link => link.path === location.pathname);
    return currentLink ? currentLink.name : "HOME";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-6 sm:px-8 md:px-10 lg:px-20 xl:px-30 pt-7 sm:pt-6 pb-3 sm:pb-4">
        <div className="flex flex-row items-center  md:gap-6 lg:gap-12">
          <Link to="/">
            <img
              src={mainLogo}
              alt="Main Logo"
              className="w-[10rem] h-8"
            />
          </Link>

          <div className="h-14 w-[1px] bg-gray-800 hidden md:block"></div>
          <nav className="hidden md:flex flex-row gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white font-medium text-sm tracking-wide transition-all duration-200 ${
                  getActiveLink() === link.name
                    ? "border-b-2 border-white pb-1"
                    : "hover:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Download Button */}
          <div className="hidden md:block">
            <PrimaryButton onClick={() => alert("Primary action!")}>
              DOWNLOAD APP
            </PrimaryButton>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full space-y-[5px]"
            style={{ background: "var(--color-primary)" }}
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className=" px-4 py-6 space-y-4" style={{background: 'var(--color-accent)'}}>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white font-medium text-sm tracking-wide transition-all duration-200 text-left py-2 ${
                  getActiveLink() === link.name
                    ? "border-l-4 border-white pl-4 bg-blue-800"
                    : "hover:text-gray-300 hover:bg-blue-900 pl-4"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Download Button */}
          <div className="pt-4 border-t border-gray-700">
            <PrimaryButton 
              onClick={() => {
                alert("Primary action!");
                setIsMobileMenuOpen(false);
              }}
            >
              DOWNLOAD APP
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;