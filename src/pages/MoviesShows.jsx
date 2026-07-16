import React from 'react'
import { useNavigate } from 'react-router-dom'

const MoviesShows = ({ poster,
    title,
    year,
    genre,
    director,
    actors,
    plot,
    imdbRating
}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="MoviesShow">
                <button className='back-btn' onClick={() => navigate("/")}>
                    ⬅ Back
                </button>
                <img src={poster} alt={title} />

                <div className="movie-info">
                    <h2>{title}</h2>

                    <p><strong>Year:</strong> {year}</p>

                    <p><strong>Genre:</strong> {genre}</p>

                    <p><strong>Director:</strong> {director}</p>

                    <p><strong>Actors:</strong> {actors}</p>

                    <p><strong>IMDb Rating:</strong> ⭐ {imdbRating}</p>

                    <p><strong>Plot:</strong> {plot}</p>
                </div>
            </div>
        </>
    )
}

export default MoviesShows
