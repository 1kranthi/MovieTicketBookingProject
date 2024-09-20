package com.project.MovieTicketBooking.service;

import java.util.List;

import com.project.MovieTicketBooking.entity.Movie;

public interface MovieService {
    List<Movie> getAllMovies();
    Movie getMovieById(Long id);
    Movie addMovie(Movie movie);
    Movie updateMovie(Long Id,Movie movie);
    void deleteMovie(Long id);
}
