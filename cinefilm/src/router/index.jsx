import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailMovie from "../components/movies/DetailMovie";
import ListMovie from "../components/movies/ListMovie";
import Slider from "../components/Slider";

export const SetUpRouters = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <div>
          <Navbar onSearchQueryChange={setSearchQuery} />
          <Router>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/movie/:id" element={<DetailMovie />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Router>
        </div>
      </Routes>
    </BrowserRouter>
  );
};

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
