package com.project.MovieTicketBooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.MovieTicketBooking.entity.Showtime;
import com.project.MovieTicketBooking.service.ShowtimeService;

@RestController
@RequestMapping("/api/showtimes")
public class ShowtimeController {
    
    @Autowired
    private ShowtimeService showtimeService;

    @GetMapping
    public List<Showtime> getAllShowtimes(){
        return showtimeService.getAllShowtimes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Showtime>  getShowtimeById(Long id){
        Showtime showtime=showtimeService.getShowtimeById(id);
        if(showtime != null){
            return ResponseEntity.ok(showtime);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Showtime creaShowtime(Showtime showtime){
        return showtimeService.saveShowtime(showtime);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShowtime(Long id){
        showtimeService.deleteShowtime(id);
        return ResponseEntity.noContent().build();
    }
}
