import React, { Fragment, useState } from "react";
import MovieList from "./MoviesList";

const Movies = () => {
  const [endpoint, setEndpoint] = useState("popular");

  const handleChange = (e) => {
    setEndpoint(e.target.value);
  };

  console.log(endpoint);
  return (
    <Fragment>
      <div className="page-header">
        <h2>{endpoint} Movies</h2>
        <div>
          <select value={endpoint} onChange={handleChange}>
            <option value="popular">Popular</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
            <option value="top_rated">Top Rated</option>
          </select>
        </div>
      </div>
      <MovieList endpoint={endpoint} />
    </Fragment>
  );
};

export default Movies;
