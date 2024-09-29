
package com.project.MovieTicketBooking.entity;

import java.util.List;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;

@Entity
public class Movie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String genre;
    private int duration;
    private LocalDate releaseDate;
    private String language;
    private String description;
    private double rating;
    private double price;

    @ElementCollection
    private List<String> showtimes=new ArrayList<>();

    public Movie() {
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public double getRating() {
        return rating;
    }
    public void setRating(double rating) {
        this.rating = rating;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public Long getId() {
        return id;
    }
    public LocalDate getReleaseDate() {
        return releaseDate;
    }
    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }
    public String getLanguage() {
        return language;
    }
    public void setLanguage(String language) {
        this.language = language;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getGenre() {
        return genre;
    }
    public void setGenre(String genre) {
        this.genre = genre;
    }
    public int getDuration() {
        return duration;
    }
    public void setDuration(int duration) {
        this.duration = duration;
    }
    public List<String> getShowtimes() {
        return showtimes;
    }
    public void setShowtimes(List<String> showtimes) {
        this.showtimes = showtimes;
    }

    
}
