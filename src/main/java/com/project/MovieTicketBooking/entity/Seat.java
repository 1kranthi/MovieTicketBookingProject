package com.project.MovieTicketBooking.entity;

import jakarta.persistence.*;

@Entity
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String seatNumber;
    private String seatType;
    private boolean availability;
   
    public Seat() {
    }
    
    public Seat(Long id, String seatNumber, String seatType, Boolean availability) {
        Id = id;
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.availability = availability;
    }

    public Long getId() {
        return Id;
    }
    public void setId(Long id) {
        Id = id;
    }
    public String getSeatNumber() {
        return seatNumber;
    }
    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }
    public String getSeatType() {
        return seatType;
    }
    public void setSeatType(String seatType) {
        this.seatType = seatType;
    }
    public Boolean getAvailability() {
        return availability;
    }
    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }
}
