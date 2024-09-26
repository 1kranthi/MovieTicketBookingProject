package com.project.MovieTicketBooking.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.project.MovieTicketBooking.entity.User;
import com.project.MovieTicketBooking.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService=userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users=userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user){
        //check if the username is already exits
        if(userService.getUserByUsername(user.getUsername()) !=null){
            return ResponseEntity.badRequest().body("Username already exits. Please choose a different username");
        }
        User savedUser=userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username){
        User user= userService.getUserByUsername(username);
        if(user !=null){
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
    if (userService.getUserByUsername(user.getUsername()) != null) {
        return ResponseEntity.badRequest().body("Username already exists. Please choose a different username.");
    }
    User registeredUser = userService.saveUser(user);
    return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
    User foundUser = userService.getUserByUsername(user.getUsername());
    if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
        return ResponseEntity.ok(foundUser); // Return user details or a token if using JWT
    } else {
        return ResponseEntity.status(401).body("Invalid credentials");
    }
    }

   
}
