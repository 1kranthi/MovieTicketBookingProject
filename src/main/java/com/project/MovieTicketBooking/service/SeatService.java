package com.project.MovieTicketBooking.service;

import java.util.List;

import com.project.MovieTicketBooking.entity.Seat;

public interface SeatService{
    Seat createseat(Seat seat); 
    List<Seat> getAllSeats();
    Seat getSeatBySeatNumber(String seatNumber);
    Seat updateSeat(String seatNumber,Seat seat);
    void deleteSeat(String seatNumber);
    boolean lockSeat(String seatNumber);
    boolean unlockSeat(String seatNumber);
}