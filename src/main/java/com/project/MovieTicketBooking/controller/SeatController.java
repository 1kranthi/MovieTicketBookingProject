package com.project.MovieTicketBooking.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.project.MovieTicketBooking.entity.Seat;
import com.project.MovieTicketBooking.service.SeatService;

@RestController
@RequestMapping("/api/seats")
public class SeatController {
    
    @Autowired
    private SeatService seatService;

    //Creaating a new Seat
    @PostMapping
    public  ResponseEntity<Seat> createSeat(@RequestBody Seat seat){
        Seat createdSeat=seatService.createseat(seat);
        return ResponseEntity.ok(createdSeat);
    }

    //to get seat by id
    @GetMapping
    public ResponseEntity<List<Seat>> getAllSeats(){
        List<Seat> seats=seatService.getAllSeats();
        return ResponseEntity.ok(seats);
    }

    //to get seat by id
    @GetMapping("/{username}")
    public ResponseEntity<Seat> getSeatBySeatNumber(@PathVariable String seatNumber){
        Seat seat=seatService.getSeatBySeatNumber(seatNumber);
        return ResponseEntity.ok(seat);
    }

    //update seat by id
    @PutMapping("/{seatNumber}")
    public ResponseEntity<Seat> updateSeat(@PathVariable String seatNumber,@RequestBody Seat seatDetails){
        Seat updateSeat =seatService.updateSeat(seatNumber, seatDetails);
        return ResponseEntity.ok(updateSeat);
    }

    //delete seat by id
    @DeleteMapping("/{seatNumber}")
    public ResponseEntity<Void> deleteSeat(@PathVariable String seatNumber){
        seatService.deleteSeat(seatNumber);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/lock/{seatNumber}")
    public ResponseEntity<String> lockSeat(@PathVariable String seatNumber){
        boolean isLocked=seatService.lockSeat(seatNumber);
        if(isLocked){
            return ResponseEntity.ok("Seat locked successfully.");
        }
        return ResponseEntity.badRequest().body("Seat Locking failed");
    }

    @PostMapping("/unlock/{seatNumber}")
    public ResponseEntity<String> unlockSeat(@PathVariable String seatNumber){
        boolean isUnlocked=seatService.unlockSeat(seatNumber);

        if(isUnlocked){
            return ResponseEntity.ok("Seat unlocked successfully");
        }
        return ResponseEntity.badRequest().body("Seat unlocking failed.");
    }
}
