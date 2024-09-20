package com.project.MovieTicketBooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.MovieTicketBooking.entity.Booking;
import com.project.MovieTicketBooking.service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public Booking createBooking(Booking booking){
        return bookingService.createBooking(booking);
    }

    @PostMapping("/{id}")
    public Booking updatebBooking(Long id,Booking bookingDetails){
        return bookingService.updateBooking(id, bookingDetails);
    }

    @PutMapping("/cancle/{id}")
    public void cancelBooking(Long id){
        bookingService.cancelBooking(id);
    }

    @GetMapping("/{id}")
    public Booking getBookingById(Long id){
        return bookingService.getBookingById(id);
    }

    @GetMapping
    public List<Booking> getAllBookings(){
        return bookingService.getAllBookings();
    }
}
