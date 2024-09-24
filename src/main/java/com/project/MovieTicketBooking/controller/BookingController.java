package com.project.MovieTicketBooking.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.project.MovieTicketBooking.entity.Booking;
import com.project.MovieTicketBooking.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking,@RequestParam String movieTitle,String theaterName){
        return bookingService.createBookingByTitle(booking,movieTitle,theaterName);
    }

    @PostMapping("/{id}")
    public Booking updatebBooking(@PathVariable Long id,@RequestBody Booking bookingDetails,@RequestParam String movieTitle){
        return bookingService.updateBookingByTitle(id, bookingDetails,movieTitle);
    }

    @PutMapping("/cancle/{id}")
    public void cancelBooking(@PathVariable Long id){
        bookingService.cancelBooking(id);
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id){
        return bookingService.getBookingById(id);
    }

    @GetMapping
    public List<Booking> getAllBookings(){
        return bookingService.getAllBookings();
    }
}
