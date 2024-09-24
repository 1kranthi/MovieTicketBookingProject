package com.project.MovieTicketBooking.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.MovieTicketBooking.entity.Booking;
import com.project.MovieTicketBooking.entity.Movie;
import com.project.MovieTicketBooking.repository.BookingRepository;
import com.project.MovieTicketBooking.repository.MovieRepository;
import com.project.MovieTicketBooking.service.BookingService;

@Service
public class BookingServiceImpl implements BookingService{
    
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public Booking createBookingByTitle(Booking booking,String movieTitle){
         Optional<Movie> movieOptional = movieRepository.findByTitle(movieTitle);
        if (movieOptional.isPresent()) {
            booking.setMovie(movieOptional.get());  
            booking.setBookingStatus("pending");
            return bookingRepository.save(booking);
        } else {
            throw new RuntimeException("Movie not found");  
        }
    }

    @Override
    public Booking updateBookingByTitle(Long id,Booking bookingDetails,String movieTitle){
        Optional<Movie> movieOptional = movieRepository.findByTitle(movieTitle);
        Optional<Booking> bookingOptional = bookingRepository.findById(id);
        
        if (bookingOptional.isPresent() && movieOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            booking.setSeats(bookingDetails.getSeats());  // Update booking details
            booking.setBookingStatus(bookingDetails.getBookingStatus());
            booking.setMovie(movieOptional.get());  // Update the movie based on title
            return bookingRepository.save(booking);
        } else {
            throw new RuntimeException("Booking or Movie not found");
        }
    }

    @Override
    public void cancelBooking(Long id){
        Optional<Booking> bookingOptional=bookingRepository.findById(id);
        if(bookingOptional.isPresent()){
            Booking booking=bookingOptional.get();
            booking.setBookingStatus("canceled");
            bookingRepository.save(booking);
        }else {
            throw new RuntimeException("Booking not found");
        }
    }

    @Override
    public Booking getBookingById(Long id){
        return bookingRepository.findById(id).orElse(null);
    }

    @Override
    public List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }
}
