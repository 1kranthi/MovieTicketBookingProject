package com.project.MovieTicketBooking.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.MovieTicketBooking.entity.Booking;
import com.project.MovieTicketBooking.entity.Movie;
import com.project.MovieTicketBooking.entity.Seat;
import com.project.MovieTicketBooking.entity.Theater;
import com.project.MovieTicketBooking.repository.BookingRepository;
import com.project.MovieTicketBooking.repository.MovieRepository;
import com.project.MovieTicketBooking.repository.SeatRepository;
import com.project.MovieTicketBooking.repository.TheaterRepository;
import com.project.MovieTicketBooking.service.BookingService;

@Service
public class BookingServiceImpl implements BookingService{
    
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private TheaterRepository theaterRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Override
    public Booking createBookingByTitle(List<Seat> seats,String movieTitle,String theateName){
         Optional<Movie> movieOptional = movieRepository.findByTitle(movieTitle);
         Optional<Theater> theaterOptional = theaterRepository.findByName(theateName);
        if (movieOptional.isPresent() && theaterOptional.isPresent()) {
            if(!validateSeats(seats)){
                throw new RuntimeException("some seats selected are in valid or does not exit.");
            }
            Booking booking =new Booking();
            booking.setMovie(movieOptional.get());
            booking.setTheater(theaterOptional.get());
            booking.setSeats(seats);    
            return bookingRepository.save(booking);
        } else {
            throw new RuntimeException("Movie not found");  
        }
    }

    @Override
    public Booking updateBooking(Long id,Booking bookingDetails){
        // Optional<Movie> movieOptional = movieRepository.findByTitle(movieTitle);
        Optional<Booking> bookingOptional = bookingRepository.findById(id);
        
        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            if (!validateSeats(bookingDetails.getSeats())) {
                throw new RuntimeException("Some selected seats are invalid or do not exist.");
            }
            booking.setSeats(bookingDetails.getSeats());  // Update booking details
            // booking.setBookingStatus(bookingDetails.getBookingStatus());
            // booking.setMovie(movieOptional.get());  // Update the movie based on title
            return bookingRepository.save(booking);
        } else {
            throw new RuntimeException("Booking or Movie not found");
        }
    }

    @Override
    public void cancelBooking(Long id){
        Optional<Booking> bookingOptional=bookingRepository.findById(id);
        if(bookingOptional.isPresent()){
            // Booking booking=bookingOptional.get();
            // booking.setBookingStatus("canceled");
            bookingRepository.delete(bookingOptional.get());
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

    @Override
    public boolean validateSeats(List<Seat> selectedSeats){
        List<Seat> existingSeats= seatRepository.findAll();
        List<String> existingSeatNumbers=existingSeats.stream().map(Seat::getSeatNumber)
                                       .collect(Collectors.toList());
        for(Seat selectedSeat: selectedSeats){
            if(!existingSeatNumbers.contains(selectedSeat.getSeatNumber())){
                return false;
            }
        }
        return true;
    }
}