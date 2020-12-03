import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import CardItem from "../CardItem";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [endpoint, setEndpoint] = useState("popular");

  const handleChange = (e) => {
    setEndpoint(e.target.value);
  };

  useEffect(() => {
    fetchMovies(endpoint);
  }, [endpoint]);

  const fetchMovies = async (endpoint) => {
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

  // const pageTitle = () => {
  //   let title;
  //   if (endpoint === "popular") {
  //     title = "Popular";
  //   }
  //   if (endpoint === "now_playing") {
  //     title = "Now Playing";
  //   }
  //   if (endpoint === "upcoming") {
  //     title = "Upcoming";
  //   }
  //   if (endpoint === "top_rated") {
  //     title = "Top Rated";
  //   }
  //   return `Movies: ${title} `;
  // };

  const pageTitle = () => {
    switch (endpoint) {
      case "popular":
        return "Popular";
      case "now_playing":
        return "Now Playing";
      case "upcoming":
        return "Upcoming";
      case "top_rated":
        return "Top Rated";
      default:
        return "";
    }
  };

  const renderedResult = movies.map((movie, index) => {
    return (
      <div className="col-md-3 mb-4" key={index}>
        <CardItem movie={movie} />
      </div>
    );
  });

  return (
    <Fragment>
      <div className="page-header">
        <h2>Movies: {pageTitle()}</h2>
        <div>
          <select value={endpoint} onChange={handleChange}>
            <option value="popular">Popular</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
            <option value="top_rated">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="row">{renderedResult}</div>
    </Fragment>
  );
};

export default Movies;
