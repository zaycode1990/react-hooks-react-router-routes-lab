import React from "react";
import { movies } from "../data";

function Movies() {
const shownMovies = movies.map((movie, idx)=>{
  const genres = movie.genres.map((genre,idx)=>{
    return <li key={idx}>{genre}</li>
  })
  return (
    <div key={idx}>
     <p>Title: {movie.title}</p>
     <p>Time: {movie.time}</p>
     <ul>{genres}</ul>
    </div>
  )
})
  return <>
    <h1>Movies Page</h1>
    {shownMovies}
  </>;
}

export default Movies;
