import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailMovie from "../components/movies/DetailMovie";

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
