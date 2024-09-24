package com.project.MovieTicketBooking.service;

import java.util.List;

import com.project.MovieTicketBooking.entity.Booking;

public interface BookingService {
    
    Booking createBookingByTitle(Booking booking,String movieTitle);
    Booking updateBookingByTitle(Long id,Booking booking,String movieTitle);
    void cancelBooking(Long id);
    Booking getBookingById(Long id);
    List<Booking> getAllBookings();
}
