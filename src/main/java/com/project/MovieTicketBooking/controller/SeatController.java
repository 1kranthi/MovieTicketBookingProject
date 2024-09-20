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
    @GetMapping("/{id}")
    public ResponseEntity<Seat> getSeatById(@PathVariable Long id){
        Seat seat=seatService.getSeatById(id);
        return ResponseEntity.ok(seat);
    }

    //update seat by id
    @PutMapping("/{id}")
    public ResponseEntity<Seat> updateSeat(@PathVariable Long id,@RequestBody Seat seatDetails){
        Seat updateSeat =seatService.updateSeat(id, seatDetails);
        return ResponseEntity.ok(updateSeat);
    }

    //delete seat by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSeat(@PathVariable Long id){
        seatService.deleteSeat(id);
        return ResponseEntity.noContent().build();
    }
}
