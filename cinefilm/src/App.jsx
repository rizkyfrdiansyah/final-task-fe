import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ListMovie from "./components/movies/ListMovie";
import DetailMovie from "./components/movies/DetailMovie";
import Footer from "./components/Footer";
import Notfound from "./components/Notfound";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div>
        <Navbar onSearchQueryChange={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="not-found" element={<Notfound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Footer />
      </div>
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
