import React, { useEffect, useState } from "react";
import { getAllMovies } from "../services/MovieServices"; // Import only the required service

const MovieListOnly = () => {
  const [movies, setMovies] = useState([]);

  // Fetch the movies from the backend when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  // Function to fetch movies using the service
  const fetchMovies = async () => {
    const data = await getAllMovies();
    setMovies(data);
  };

  return (
    <div>
      <h2>Movie List</h2>

      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.title}>
              <strong>Title:</strong> {movie.title} <br />
              <strong>Genre:</strong> {movie.genre} <br />
              <strong>Duration:</strong> {movie.duration} min <br />
              <strong>Release Date:</strong> {movie.releaseDate} <br />
              <strong>Language:</strong> {movie.language} <br />
              <strong>Description:</strong> {movie.description} <br />
              <strong>Rating:</strong> {movie.rating} <br />
              <strong>Price:</strong> ₹{movie.price} <br />
              <strong>Showtimes:</strong> {movie.showtimes.join(", ")} <br />
              <hr />
            </li>
          ))
        ) : (
          <li>No movies available.</li>
        )}
      </ul>
    </div>
  );
};

export default MovieListOnly;
