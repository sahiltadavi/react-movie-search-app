import React from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'

const Home = ({ search, 
    setSearch, 
    loadMovies, 
    loading, 
    Loader, 
    error, 
    movies }) => {

    return (
        <>
            <Navbar />

            <SearchBar
                search={search}
                setSearch={setSearch}
                loadMovies={loadMovies}
            />

            {loading && <Loader />}

            {!loading && error && (
                <h2 style={{ color: "red", textAlign: "center" }}>
                    {error}
                </h2>
            )}

            <div className="container">
                {!loading &&
                    !error &&
                    movies.map((movie) => (
                        <MovieCard
                            id={movie.imdbID}
                            key={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                        />
                    ))}
            </div>

        </>
    )
}

export default Home