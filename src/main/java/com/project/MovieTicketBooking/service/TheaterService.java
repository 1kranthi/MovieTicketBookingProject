package com.project.MovieTicketBooking.service;

import java.util.List;
import com.project.MovieTicketBooking.entity.Theater;

public interface TheaterService {
    List<Theater> getAllTheaters();
    Theater getTheaterById(Long id);
    Theater addTheater(Theater theater);
    Theater updateTheater(Long id, Theater theater);
    void deleteTheater(Long id);
}
