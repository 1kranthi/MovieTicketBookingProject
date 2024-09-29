package com.project.MovieTicketBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.MovieTicketBooking.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking,Long>{
    
}