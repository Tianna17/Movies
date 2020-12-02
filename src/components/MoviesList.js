import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieItem from "./MovieItem";

const MoviesList = ({ endpoint }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [endpoint]);

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${endpoint}`,
      {
        params: {
          language: "en-US",
          page: 1,
          api_key: process.env.REACT_APP_API_KEY,
        },
      }
    );
    setMovies(response.data.results);
  };

  const renderedMovies = movies.map((movie, index) => {
    return (
      <div className="col-md-3 mb-4" key={index}>
        <MovieItem movie={movie} />
      </div>
    );
  });

  return <div className="row">{renderedMovies}</div>;
};

export default MoviesList;
