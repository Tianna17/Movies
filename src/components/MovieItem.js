import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
      />
      <div className="card-body px-0">
        <h2 className="card-title h3">{movie.title}</h2>
        <p className="card-text">Released {movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieItem;
