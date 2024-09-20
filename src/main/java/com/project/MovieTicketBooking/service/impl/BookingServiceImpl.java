package com.project.MovieTicketBooking.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.MovieTicketBooking.entity.Booking;
import com.project.MovieTicketBooking.repository.BookingRepository;
import com.project.MovieTicketBooking.service.BookingService;

@Service
public class BookingServiceImpl implements BookingService{
    
    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public Booking createBooking(Booking booking){
        booking.setBookingStatus("pending");
        return bookingRepository.save(booking);
    }

    @Override
    public Booking updateBooking(Long id,Booking bookingDetails){
        Optional<Booking> bookingOptional= bookingRepository.findById(id);
        if(bookingOptional.isPresent()){
            Booking booking=bookingOptional.get();
            booking.setBookingStatus(bookingDetails.getBookingStatus());
            booking.setSeats(bookingDetails.getSeats());
            return bookingRepository.save(booking);
        }
        return null;
    }

    @Override
    public void cancelBooking(Long id){
        Optional<Booking> bookingOptional=bookingRepository.findById(id);
        if(bookingOptional.isPresent()){
            Booking booking=bookingOptional.get();
            booking.setBookingStatus("canceled");
            bookingRepository.save(booking);
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
