import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ListMovie from "./components/movies/ListMovie";
import DetailMovie from "./components/movies/DetailMovie";
import Footer from "./components/Footer";
import Notfound from "./components/Notfound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div>
        <h1>Hello World</h1>
        <Navbar onSearchQueryChange={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="not-found" element={<Notfound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Footer />
      </div>

      {showScrollButton && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <FontAwesomeIcon icon={faCircleUp} size="xl" />
        </button>
      )}
    </Router>
  );
}

function Home({ searchQuery }) {
  return (
    <>
      <Slider />
      <div className="mt-20 lg:mt-96 mb-10">
        <ListMovie searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default App;
