package com.project.MovieTicketBooking.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.project.MovieTicketBooking.entity.Theater;
import com.project.MovieTicketBooking.service.TheaterService;

@RestController
@RequestMapping("/api/theaters")
public class TheaterController {
     @Autowired
    private TheaterService theaterService;

    @GetMapping
    public ResponseEntity<List<Theater>> getAllTheaters() {
        List<Theater> theaters = theaterService.getAllTheaters();
        return ResponseEntity.ok(theaters);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Theater> getTheaterById(@PathVariable Long id) {
        Theater theater = theaterService.getTheaterById(id);
        return ResponseEntity.ok(theater);
    }

    @PostMapping
    public ResponseEntity<Theater> addTheater(@RequestBody Theater theater) {
        Theater newTheater = theaterService.addTheater(theater);
        return ResponseEntity.ok(newTheater);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Theater> updateTheater(@PathVariable Long id, @RequestBody Theater theater) {
        Theater updatedTheater = theaterService.updateTheater(id, theater);
        return ResponseEntity.ok(updatedTheater);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTheater(@PathVariable Long id) {
        theaterService.deleteTheater(id);
        return ResponseEntity.noContent().build();
    }
}
