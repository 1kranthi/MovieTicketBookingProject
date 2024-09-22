package com.project.MovieTicketBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.MovieTicketBooking.entity.Movie;


@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {
    Movie findByTitle(String title);
    void deleteByTitle(String title);
}
