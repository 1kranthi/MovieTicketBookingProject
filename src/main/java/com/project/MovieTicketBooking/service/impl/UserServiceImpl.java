package com.project.MovieTicketBooking.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.MovieTicketBooking.entity.User;
import com.project.MovieTicketBooking.repository.UserRepository;
import com.project.MovieTicketBooking.service.UserService;


@Service
public class UserServiceImpl implements UserService {
    
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @Override
    public User saveUser(User user){
        return userRepository.save(user);
    }
    
    @Override
    public User getUserByUsername(String username){
       Optional<User>user=userRepository.findByUsername(username);
       return user.orElse(null);
    }

    @Override
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
