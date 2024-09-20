package com.project.MovieTicketBooking.service;

import java.util.List;

import com.project.MovieTicketBooking.entity.Booking;

public interface BookingService {
    
    Booking createBooking(Booking booking);
    Booking updateBooking(Long id,Booking booking);
    void cancelBooking(Long id);
    Booking getBookingById(Long id);
    List<Booking> getAllBookings();
}
