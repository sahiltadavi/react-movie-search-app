import React from 'react'
import { Link } from 'react-router-dom'
const MovieCard = ({title , year , poster ,id}) => {
    
  return (
    <Link to={`/movie/${id}`} className='movie-card'>
        <img src={poster} alt={title}/>
        <h3>{title}</h3>
        <p>{year}</p>
    </Link>
  )
}

export default MovieCard