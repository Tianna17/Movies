import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
      />
      <div className="card-body px-0">
        <h2 className="card-title h3">{movie.title}</h2>
        <p className="card-text">
          Released {moment(movie.release_date).format('ll')}
        </p>
      </div>
    </Link>
  );
};

export default MovieItem;
