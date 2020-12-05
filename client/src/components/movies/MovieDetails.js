import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardDetails from '../CardDetails';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const movie_id = match.params.movieId; //get movie id from the url params
    fetchMovie(movie_id);
  }, [match]);

  const fetchMovie = async (movie_id) => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/movie/${movie_id}`
    );

    setMovie(response.data);
  };

  return (
    <div>
      <CardDetails data={movie} />
    </div>
  );
};

export default MovieDetails;
