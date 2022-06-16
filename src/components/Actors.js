import React from "react";
import { actors } from "../data";

function Actors() {
  const totalActors = actors.map((actor, idx) => {
    const movies = actor.movies.map((movie, idx) => {
      return <li key={idx}>{movie}</li>;
    });
    return (
      <div key={idx}>
        <p>{actor.name}</p>
        <ul>{movies}</ul>
      </div>
    );
  });

  return (
    <>
      <h1>Actors Page</h1>
      {totalActors}
    </>
  );
}
export default Actors;
