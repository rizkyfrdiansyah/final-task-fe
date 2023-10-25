import React, { useEffect, useState } from "react";
import Container from "../Container";
import CardMovie from "../movies/CardMovie";
import Pagination from "../Pagination";

const ListMovie = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(12);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPagesToFetch] = useState(3);

  useEffect(() => {
    fetchGenres()
      .then((data) => setGenres(data))
      .catch((error) => console.log("Error fetching genres: ", error));
  }, []);

  useEffect(() => {
    fetchAllMovieData()
      .then((data) => {
        const combinedMovies = [];
        for (let i = 1; i <= totalPagesToFetch; i++) {
          combinedMovies.push(...data[i].results);
        }
        setMovies(combinedMovies);
        setTotalPages(data[totalPagesToFetch].total_pages);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [selectedGenre]);

  useEffect(() => {
    filterMovies();
  }, [searchQuery, movies, selectedGenre]);

  async function fetchGenres() {
    const apiKey = "0d60d57b167db9273c83d0f0ed3221fe";
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    try {
      const response = await axios.get(genreUrl);
      return response.data.genres;
    } catch (error) {
      throw error;
    }
  }

  async function fetchAllMovieData() {
    const apiKey = "0d60d57b167db9273c83d0f0ed3221fe";
    const movieDataPromises = [];

    for (let i = 1; i <= totalPagesToFetch; i++) {
      let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${i}`;

      if (selectedGenre !== "All") {
        apiUrl += `&with_genres=${selectedGenre}`;
      }

      movieDataPromises.push(axios.get(apiUrl).then((response) => response.data));
    }

    return Promise.all(movieDataPromises).then((data) => {
      const result = {};
      for (let i = 0; i < data.length; i++) {
        result[i + 1] = data[i];
      }
      return result;
    });
  }

  const filterMovies = () => {
    const filtered = movies.filter((movie) => movie.title.toLowerCase().include(searchQuery.toLowerCase()));
    setFilteredMovies(filtered);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4 lg:-mt-80 -mt-12">Browse by category</h1>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedGenre("All")}
            className={`genre-button ${selectedGenre === "All" ? "bg-secondary text-white hover:bg-primary transition duration-300 ease-in-out" : "text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out"} py-2 px-4 rounded`}
          >
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setSelectedGenre(genre.id)}
              className={`genre-button ${selectedGenre === genre.id ? "bg-secondary text-white hover:bg-primary transition duration-300 ease-in-out" : "text-gray-400 hover:text-gray-500"} py-2 px-4 rounded`}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      <input type="text" placeholder="Search..." className="py-2 px-3 rounded mb-4 hidden" value={searchQuery} onChange={(e) => filterMovies(e.target.value)} />
      {currentMovies.length === 0 ? (
        <div className="text-lg text-gray-600">No movies found with the current search criteria.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentMovies.map((movie) => (
            <CardMovie key={movie.id} id={movie.id} title={movie.title} image={movie.poster_path} genres={movie.genre_ids.map((genreId) => genres.find((genre) => genre.id === genreId)?.name)} />
          ))}
        </div>
      )}
      <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredMovies.length / moviesPerPage)} onPageChange={handlePageChange} />
    </Container>
  );
};

export default ListMovie;
