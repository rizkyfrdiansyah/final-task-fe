import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/img/logo.png";
import Container from "./Container";

const Navbar = ({ onSearchQueryChange }) => {
  return (
    <nav className="bg-white p-4 fixed top-0 w-full shadow-md z-50">
      <Container>
        {/* Layout Website */}
        <div className="hidden md:flex items-center justify-between">
          <a href="/" className="cursor-pointer">
            <img src={Logo} alt="Logo" className="h-8 w-13" />
          </a>
          <div className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              className="py-2 pl-12 pr-4 rounded-md focus:outline-none focus:ring focus:border-gray-300 w-full bg-white border border-gray-200"
              placeholder="Mau film apa..."
              onChange={(e) => onSearchQueryChange(e.target.value)}
            />
          </div>
        </div>

        {/* Layout Mobile */}
        <div className="md:hidden flex flex-col items-center">
          <a href="/" className="cursor-pointer">
            <img src={Logo} alt="Logo" className="h-8 w-13 mb-3" />
          </a>
          <div className="w-1/2 mx-auto relative mt-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              className="py-2 pl-12 pr-4 rounded-md focus:outline-none focus:ring focus:border-gray-300 w-full bg-white border border-gray-200"
              placeholder="Mau cari film apa..."
              onChange={(e) => onSearchQueryChange(e.target.value)}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
