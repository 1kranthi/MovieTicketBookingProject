package com.project.MovieTicketBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import com.project.MovieTicketBooking.entity.Movie;


@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {
    Optional<Movie> findByTitle(String title);
    void deleteByTitle(String title); 
}
