package com.project.MovieTicketBooking.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.MovieTicketBooking.entity.Seat;
import com.project.MovieTicketBooking.repository.SeatRepository;
import com.project.MovieTicketBooking.service.SeatService;

@Service
public class SeatServiceImpl implements SeatService {
    
    @Autowired
    private SeatRepository seatRepository;

    @Override
    public Seat createseat(Seat seat){
    // Check for existing seat with the same seat number
    Optional<Seat> existingSeat = seatRepository.findBySeatNumber(seat.getSeatNumber());
    if (existingSeat.isPresent()) {
        throw new RuntimeException("Seat number already exists.");
    }
    return seatRepository.save(seat);
    }

    @Override
    public List<Seat> getAllSeats(){
        return seatRepository.findAll();
    }

    @Override
    public Seat getSeatBySeatNumber(String seatNumber){
        Optional<Seat> seat=seatRepository.findBySeatNumber(seatNumber);
        return seat.orElse(null);
    }

    @Override
    public Seat updateSeat(String seatNumber,Seat seatDetails){
        Optional<Seat> seatOpt= seatRepository.findBySeatNumber(seatNumber);
        if(seatOpt.isPresent()){
            Seat seat=seatOpt.get();
            seat.setSeatNumber(seatDetails.getSeatNumber());
            seat.setSeatType(seatDetails.getSeatType());
            seat.setAvailability(seat.getAvailability());
            return seatRepository.save(seat);
        }
        return null;
    }

    @Override
    public void deleteSeat(String seatNumber){
        Optional<Seat> seatOpt=seatRepository.findBySeatNumber(seatNumber);
        seatOpt.ifPresent(seat->seatRepository.delete(seat));
    }

    @Override
    public boolean lockSeat(String seatNumber){
        Optional<Seat> seatOpt=seatRepository.findBySeatNumber(seatNumber);
        if(seatOpt.isPresent()){
            Seat seat=seatOpt.get();
            if(seat.getAvailability() && !seat.getLocked()){
                seat.setLocked(true);
                seat.setLockedAt(LocalDateTime.now());
                seatRepository.save(seat);
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean unlockSeat(String seatNumber){
        Optional<Seat> seatOpt=seatRepository.findBySeatNumber(seatNumber);
        if(seatOpt.isPresent()){
            Seat seat=seatOpt.get();
            seat.setLocked(false);
            seatRepository.save(seat);
            return true;
        }
        return false;
    }

}