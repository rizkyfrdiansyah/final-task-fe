import React from "react";
import Container from "./Container";
import Logo from "../assets/img/logo.png";
import GooglePlay from "../assets/img/googleplay.png";
import AppStore from "../assets/img/appstore.png";
import { faFacebook, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <Container>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          <div className="lg:-mt-16 lg:mb-0">
            <img src={Logo} alt="Logo" className="hidden lg:flex w-14 h-10 mb-4" />
            <div className="hidden lg:flex ">
              <p className="text-left text-gray-200">
                CineFilm, juga dikenal sebagai film sinematik, adalah medium yang digunakan untuk merekam gambar bergerak dan suara dalam produksi film. CineFilm adalah format tradisional untuk produksi film sebelum era digital.
              </p>
            </div>
          </div>

          {/* Layout Desktop */}
          <div className="hidden lg:-mt-24 lg:flex flex-col lg:ml-6">
            <a href="https://www.themoviedb.org/about?language=id-ID" className="mb-2 text-white hover:text-gray-300">
              Tentang Kami
            </a>
            <a href="https://blog.themoviedb.org/" className="mb-2 text-white hover:text-gray-300">
              Blog
            </a>
            <a href="https://www.themoviedb.org/talk?language=id-ID" className="mb-2 text-white hover:text-gray-300">
              Layanan
            </a>
            <a href="https://www.themoviedb.org/discuss?language=id-ID" className="mb-2 text-white hover:text-gray-300">
              Karir
            </a>
            <a href="https://www.themoviedb.org/login?to=read_me&redirect_uri=/docs" className="text-white hover:text-gray-300">
              Pusat Media
            </a>
          </div>

          <div className="hidden lg:flex flex-col items-center lg:ml-6">
            <div className="mb-6">
              <h1 className="text-lg font-bold text-white mb-3 lg:ml-5">Download</h1>
              <a href="https://play.google.com/store/apps/details?id=com.anch.tmdb_anch_movies_database&hl=en_US">
                <img src={GooglePlay} alt="googleplay" className="w-36" />
              </a>
              <a href="https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525">
                <img src={AppStore} alt="appstore" className="w-36" />
              </a>
            </div>
            <div className="flex">
              <div className="mb-6">
                <h1 className="text-lg font-bold text-white mb-3">Social Media</h1>
                <a href="https://www.facebook.com/themoviedb/?locale=id_ID" className="mr-2">
                  <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white" style={{ color: "#3b5998" }} />
                </a>
                <a href="https://id.pinterest.com/pin/391602130096238493/" className="mr-2">
                  <FontAwesomeIcon icon={faPinterest} size="2x" className="text-white" style={{ color: "#fa0505" }} />
                </a>
                <a href="https://www.instagram.com/tmdbmovies/?hl=id">
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" style={{ color: "#f56040" }} />
                </a>
              </div>
            </div>
          </div>

          {/* Layout Mobile */}
          <img src={Logo} alt="Logo" className="lg:hidden w-14 h-10 mb-4" />
          <p className="lg:hidden text-center text-gray-200 mb-4">
            CineFilm, juga dikenal sebagai film sinematik, adalah medium yang digunakan untuk merekam gambar bergerak dan suara dalam produksi film. Cinefilm adalah format tradisional untuk produksi film sebelum era digital.
          </p>
          <div className="lg:hidden items-center mt-6 text-center">
            <a href="https://www.themoviedb.org/about?language=id-ID" className="mb-2 text-white hover:text-gray-300 mr-3">
              Tentang Kami
            </a>
            <a href="https://blog.themoviedb.org/" className="mb-2 text-white hover:text-gray-300 mr-3">
              Blog
            </a>
            <a href="https://www.themoviedb.org/talk?language=id-ID" className="mb-2 text-white hover:text-gray-300 mr-3">
              Layanan
            </a>
            <a href="https://www.themoviedb.org/discuss?language=id-ID" className="mb-2 text-white hover:text-gray-300 mr-3">
              Karir
            </a>
            <a href="https://www.themoviedb.org/login?to=read_me&redirect_uri=/docs" className="text-white hover:text-gray-300 mr-3">
              Pusat Media
            </a>
          </div>

          <div className="lg:hidden items-center mt-6">
            <h1 className="text-lg font-bold text-white mb-2 ml-6">Download</h1>
            <a href="https://play.google.com/store/apps/details?id=com.anch.tmdb_anch_movies_database&hl=en_US">
              <img src={GooglePlay} alt="googleplay" className="w-36 md:w-44 pr-2" />
            </a>
            <a href="https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525">
              <img src={AppStore} alt="appstore" className="w-36 md:w-44 pr-2" />
            </a>
          </div>

          <div className="lg:hidden items-center mt-6">
            <h1 className="text-lg font-bold text-white mb-2">Social Media</h1>
            <a href="https://www.facebook.com/themoviedb/?locale=id_ID" className="mr-2">
              <FontAwesomeIcon icon={faFacebook} size="2xl" className="text-white md:text-2xl" style={{ color: "#3b5998" }} />
            </a>
            <a href="https://id.pinterest.com/pin/391602130096238493/" className="mr-2">
              <FontAwesomeIcon icon={faPinterest} size="2xl" className="text-white md:text-2xl" style={{ color: "#fa0505" }} />
            </a>
            <a href="https://www.instagram.com/tmdbmovies/?hl=id">
              <FontAwesomeIcon icon={faInstagram} size="2xl" className="text-white md:text-2xl" style={{ color: "#f56040" }} />
            </a>
          </div>
        </div>
        <hr className="border-t border-blueGray-400 my-4" />
        <div className="container mx-auto text-center text-white text-sm">&copy; {new Date().getFullYear()} CineFilm. All rights reserved.</div>
      </Container>
    </footer>
  );
};

export default Footer;
