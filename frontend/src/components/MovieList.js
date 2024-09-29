import React, { useEffect, useState } from "react";
import {
  getAllMovies,
  addMovie,
  deleteByTitle,
  getMovieByTitle,
} from "../services/MovieServices";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    duration: "",
    releaseDate: "",
    language: "",
    description: "",
    rating: "",
    price: "",
    showtimes: "",
  });

  const [searchTitle, setSearchTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getAllMovies();
    setMovies(data);
  };

  const fetchMoviesByTitle = async (e) => {
    e.preventDefault();
    const data = await getMovieByTitle(searchTitle);
    if (data) {
      setMovies([data]);
    } else {
      setMovies([]);
    }
    setSearchTitle("");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMovie({
      ...formData,
      showtimes: formData.showtimes.split(","),
    });

    fetchMovies();
    setFormData({
      title: "",
      genre: "",
      duration: "",
      releaseDate: "",
      language: "",
      description: "",
      rating: "",
      price: "",
      showtimes: "",
    });
  };

  const handleDelete = async (title) => {
    await deleteByTitle(title);
    fetchMovies();
    setMessage(`Successfully deleted movie: ${title}`);
  };

  return (
    <div>
      <h2>Movie List</h2>
      {message && <div className="success-message"> {message}</div>}
      <form onSubmit={fetchMoviesByTitle}>
        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="Search by title"
        />
        <button type="submit">Search</button>
      </form>

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
              <strong>Showtimes:</strong>{movie.showtimes}<br/>
              <button onClick={() => handleDelete(movie.title)}>Delete</button>
              <hr />
             
            </li>
          ))
        ) : (
          <li>No movies available.</li>
        )}
      </ul>

      <h3>Add New Movie</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration(minutes)"
          value={formData.duration}
          onChange={handleInputChange}
        />

        <input
          type="date"
          name="releaseDate"
          placeholder="Release Date"
          value={formData.releaseDate}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="language"
          placeholder="Language"
          value={formData.language}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
         <input
          type="text"
          name="showtimes"
          placeholder="Showtimes (comma separated)"
          value={formData.showtimes}
          onChange={handleInputChange}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieList;