package com.project.MovieTicketBooking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.MovieTicketBooking.entity.Theater;
import com.project.MovieTicketBooking.repository.TheaterRepository;
import com.project.MovieTicketBooking.service.TheaterService;

@Service
public class TheaterServiceImpl implements TheaterService{
    
    @Autowired
    private TheaterRepository theaterRepository;

    @Override
    public List<Theater> getAllTheaters() {
        return theaterRepository.findAll();
    }

    @Override
    public Theater getTheaterById(Long id) {
        return theaterRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Theater not found"));
    }

    @Override
    public Theater addTheater(Theater theater) {
        return theaterRepository.save(theater);
    }

    @Override
    public Theater updateTheater(Long id, Theater theater) {
        Theater existingTheater = getTheaterById(id);
        existingTheater.setName(theater.getName());
        existingTheater.setArea(theater.getArea());
        existingTheater.setTotalScreens(theater.getTotalScreens());
        return theaterRepository.save(existingTheater);
    }

    @Override
    public void deleteTheater(Long id) {
        theaterRepository.deleteById(id);
    }
}