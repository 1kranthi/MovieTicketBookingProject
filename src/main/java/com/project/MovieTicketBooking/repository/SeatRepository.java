package com.project.MovieTicketBooking.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.MovieTicketBooking.entity.Seat;

@Repository
public interface SeatRepository extends JpaRepository<Seat,Long> {
    Optional<Seat> findBySeatNumber(String seatNumber);
}