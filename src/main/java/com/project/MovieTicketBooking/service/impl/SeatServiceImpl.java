package com.project.MovieTicketBooking.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.project.MovieTicketBooking.entity.Seat;
import com.project.MovieTicketBooking.repository.SeatRepository;
import com.project.MovieTicketBooking.service.SeatService;

public class SeatServiceImpl implements SeatService {
    
    @Autowired
    private SeatRepository seatRepository;

    @Override
    public Seat createseat(Seat seat){
        return seatRepository.save(seat);
    }

    @Override
    public List<Seat> getAllSeats(){
        return seatRepository.findAll();
    }

    @Override
    public Seat getSeatById(Long id){
        Optional<Seat> seat=seatRepository.findById(id);
        return seat.orElse(null);
    }

    @Override
    public Seat updateSeat(Long id,Seat seatDetails){
        Seat seat = seatRepository.findById(id).orElse(null);
        if(seat != null){
            seat.setSeatNumber(seatDetails.getSeatNumber());
            seat.setSeatType(seatDetails.getSeatType());
            seat.setAvailability(seat.getAvailability());
            
            return seatRepository.save(seat);
        }
        return null;
    }

    @Override
    public void deleteSeat(Long id){
        seatRepository.deleteById(id);;
    }

}
