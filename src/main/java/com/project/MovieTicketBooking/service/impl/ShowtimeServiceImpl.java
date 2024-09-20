package com.project.MovieTicketBooking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.MovieTicketBooking.entity.Showtime;
import com.project.MovieTicketBooking.repository.ShowtimeRepository;
import com.project.MovieTicketBooking.service.ShowtimeService;

@Service
public class ShowtimeServiceImpl implements ShowtimeService {
    
    @Autowired
    private ShowtimeRepository showtimeRepository;

    @Override
    public List<Showtime> getAllShowtimes(){
        return showtimeRepository.findAll();
    }

    @Override
    public Showtime getShowtimeById(Long id){
        return showtimeRepository.findById(id).orElse(null);
    }

    @Override
    public Showtime saveShowtime(Showtime showtime){
        return showtimeRepository.save(showtime);
    }

    @Override
    public void deleteShowtime(Long id){
        showtimeRepository.deleteById(id);
    }
}
