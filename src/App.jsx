import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { searchMovies } from "./services/movieService";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Batman");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await searchMovies(search);
      if (data.Response === "False") {
        setMovies([]);
        setError(data.Error);
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={
        <Home
       search={search}
      setSearch={setSearch}
      loadMovies={loadMovies}
      loading={loading}
      error={error}
      movies={movies}
      Loader={Loader}
      />}
      />
      <Route path="/movie/:id" element={<MovieDetails/>}/>
    </Routes>

    
    </>
  );
};

export default App;