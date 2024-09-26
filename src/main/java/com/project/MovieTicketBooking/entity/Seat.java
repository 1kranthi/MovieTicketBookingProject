package com.project.MovieTicketBooking.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

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

    public Seat(Long Id, Boolean availability, String seatNumber, String seatType) {
        this.Id = Id;
        this.availability = availability;
        this.seatNumber = seatNumber;
        this.seatType = seatType;
    }

    public Seat(Boolean availability, String seatNumber, String seatType) {
        this.availability = availability;
        this.seatNumber = seatNumber;
        this.seatType = seatType;
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
