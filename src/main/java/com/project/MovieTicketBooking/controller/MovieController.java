package com.project.MovieTicketBooking.controller;

import com.project.MovieTicketBooking.entity.Movie;
import com.project.MovieTicketBooking.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    // Create a new movie
    @PostMapping
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {
        Movie createdMovie = movieService.addMovie(movie);
        return ResponseEntity.ok(createdMovie);
    }

    // Get all movies
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.getAllMovies();
        return ResponseEntity.ok(movies);
    }

    // Get movie by title
    @GetMapping("/title/{title}")
    public ResponseEntity<Movie> getMovieByTitle(@PathVariable String title) {
        Movie movie = movieService.getMovieByTitle(title);
        return ResponseEntity.ok(movie);
    }

    // Update movie by title
    @PutMapping("/title/{title}")
    public ResponseEntity<Movie> updateMovie(@PathVariable String title, @RequestBody Movie movieDetails) {
        Movie updatedMovie = movieService.updateMovie(title, movieDetails);
        return ResponseEntity.ok(updatedMovie);
    }

    // Delete movie by title
    @DeleteMapping("/title/{title}")
    public ResponseEntity<Void> deleteByTitle(@PathVariable String title) {
        movieService.deleteByTitle(title);
        return ResponseEntity.noContent().build();
    }
}