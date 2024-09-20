package com.project.MovieTicketBooking.service;

import java.util.List;
import com.project.MovieTicketBooking.entity.Showtime;

public interface ShowtimeService {
    List<Showtime> getAllShowtimes();
    Showtime getShowtimeById(Long id);
    Showtime saveShowtime(Showtime showtime);
    void deleteShowtime(Long id);
}
