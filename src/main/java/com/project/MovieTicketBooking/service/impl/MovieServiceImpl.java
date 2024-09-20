package com.project.MovieTicketBooking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.MovieTicketBooking.entity.Movie;
import com.project.MovieTicketBooking.repository.MovieRepository;
import com.project.MovieTicketBooking.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService{
    
    @Autowired
    private MovieRepository movieRepository;

    @Override
    public  List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieById(Long id){
        return movieRepository.findById(id).orElse(null);
    }

    @Override
    public Movie addMovie(Movie movie){
        return movieRepository.save(movie);
    }

    @Override
    public Movie updateMovie(Long id,Movie movie){
        Movie exisitingMovie=movieRepository.findById(id).orElse(null);
        if(exisitingMovie !=null){
            exisitingMovie.setTitle(movie.getTitle());
            exisitingMovie.setGenre(movie.getGenre());
            exisitingMovie.setDuration(movie.getDuration());
            exisitingMovie.setShowtimes(movie.getShowtimes());
            exisitingMovie.setDescription(movie.getDescription());
            exisitingMovie.setRating(movie.getRating());
            exisitingMovie.setPrice(movie.getPrice());

            
            return movieRepository.save(exisitingMovie);
        }
        return null;
    }

    @Override
    public void deleteMovie(Long id){
        movieRepository.deleteById(id);
    }
}
