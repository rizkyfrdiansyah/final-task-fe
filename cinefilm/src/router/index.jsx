import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailMovie from "../components/movies/DetailMovie";
import ListMovie from "../components/movies/ListMovie";
import Slider from "../components/Slider";

export const SetUpRouters = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Router>
        <div>
          <Navbar onSearchQueryChange={setSearchQuery} />
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/movie/:id" element={<DetailMovie />} />
          </Routes>
        </div>
      </Router>
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
