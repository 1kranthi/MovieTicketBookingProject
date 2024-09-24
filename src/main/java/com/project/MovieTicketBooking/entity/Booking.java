package com.project.MovieTicketBooking.entity;

import java.time.LocalDateTime;
import java.util.List;
import jakarta.persistence.*;

@Entity
public class Booking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne 
    private Movie movie;

    @ManyToOne
    private Theater theater;

    @ManyToMany(cascade = CascadeType.PERSIST)
    private List<Seat> seats;
    private LocalDateTime bookingDate;
    private String bookingStatus;

    public Booking() {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
   
    public List<Seat> getSeats() {
        return seats;
    }
    public void setSeats(List<Seat> seats) {
        this.seats = seats;
    }
    public LocalDateTime getBookingDate() {
        return bookingDate;
    }
    public void setBookingDate(LocalDateTime bookingDate) {
        this.bookingDate = bookingDate;
    }
    public String getBookingStatus() {
        return bookingStatus;
    }
    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Theater getTheater() {
        return theater;
    }

    public void setTheater(Theater theater) {
        this.theater = theater;
    }

}
