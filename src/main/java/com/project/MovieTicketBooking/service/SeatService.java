package com.project.MovieTicketBooking.service;

import java.util.List;

import com.project.MovieTicketBooking.entity.Seat;

public interface SeatService{
    Seat createseat(Seat seat); 
    List<Seat> getAllSeats();
    Seat getSeatById(Long id);
    Seat updateSeat(Long id,Seat seat);
    void deleteSeat(Long id);
}
