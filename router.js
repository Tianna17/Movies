const axios = require('axios');
const express = require('express');
const router = express.Router();

// Fetch data from outside API
const params = {
  language: 'en-US',
  page: 1,
  api_key: process.env.API_KEY,
  append_to_response: 'videos'
};

//Get all movies
router.get('/movies/:endpoint', async (request, response) => {
  const endpoint = request.params.endpoint;
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${endpoint}`,
    { params }
  );

  response.json(result.data.results);
});

//Get movie by id
router.get('/movie/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id;

  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    { params }
  );
  return response.json(result.data);
});

module.exports = router;
