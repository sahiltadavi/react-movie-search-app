import React from 'react'

const SearchBar = ({search , setSearch , loadMovies}) => {

  return (
    <div className='searchBar'>
        <input 
        type="text" 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder='Search Movie....'        
        />

      <button onClick={loadMovies}>
        Search
      </button>
       
    </div>
  )
}

export default SearchBar