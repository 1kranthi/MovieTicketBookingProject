package com.project.MovieTicketBooking.service;

import java.util.List;

import com.project.MovieTicketBooking.entity.Booking;
import com.project.MovieTicketBooking.entity.Seat;

public interface BookingService {
    
    Booking createBookingByTitle(List<Seat> seats,String movieTitle,String theaterName);
    Booking updateBooking(Long id,Booking bookingDetails);
    void cancelBooking(Long id);
    Booking getBookingById(Long id);
    List<Booking> getAllBookings();
    boolean validateSeats(List<Seat> selectedSeats); 
}
