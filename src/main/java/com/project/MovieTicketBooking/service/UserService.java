package com.project.MovieTicketBooking.service;

import java.util.List;

import com.project.MovieTicketBooking.entity.User;

public interface UserService {
    User saveUser(User user);
    User getUserByUsername(String username);
    List<User> getAllUsers();
    List<User> getAllAdmins(); 
}