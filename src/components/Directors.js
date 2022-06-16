import React from "react";
import { directors } from "../data";

function Directors() {
  const totalDirectors = directors.map((director, idx) => {
    const films = director.movies.map((movie, idx) => (
      <li key={idx}>{movie}</li>
    ));
    return (
      <div key={idx}>
        <h1>{director.name}</h1>
        <ul>{films}</ul>
      </div>
    );
  });

  return (
    <>
      <h1>Directors Page</h1>
      {totalDirectors}
    </>
  );
}

export default Directors;
