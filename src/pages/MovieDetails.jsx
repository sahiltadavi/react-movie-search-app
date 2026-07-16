import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import MoviesShows from './MoviesShows';

const MovieDetails = () => {

  const {id} = useParams();
  const [movie , setMovie] = useState({});
  

  const loadMovie = async () =>{
    const data = await getMovieById(id);

    setMovie(data);
  }

  useEffect(()=>{
    loadMovie();
  },[id]);
  
  return (
    <>
    <h1 className='MovieDetails'>MovieDetails</h1>

    
      <MoviesShows

      poster={movie.Poster}
      title={movie.Title}
      year={movie.Year}
      genre={movie.Genre}
      director={movie.Director}
      actors={movie.Actors}
      plot={movie.Plot}
      imdbRating={movie.imdbRating}
      />
  
    </>
  )
}

export default MovieDetails
