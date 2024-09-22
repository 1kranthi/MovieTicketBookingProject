package com.project.MovieTicketBooking.service;

import java.util.List;

import com.project.MovieTicketBooking.entity.Movie;

public interface MovieService {
    List<Movie> getAllMovies();
    Movie getMovieByTitle(String title);
    Movie addMovie(Movie movie);
    Movie updateMovie(String title,Movie movie);
    void deleteByTitle(String title);
}
