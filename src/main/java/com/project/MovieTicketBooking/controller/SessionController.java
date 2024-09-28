package com.project.MovieTicketBooking.controller;

import com.project.MovieTicketBooking.entity.JwtUtil;
import com.project.MovieTicketBooking.entity.User;
import com.project.MovieTicketBooking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/session")
public class SessionController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    // Login and generate JWT token
    @PostMapping("/login")
    public ResponseEntity<?> createSession(@RequestBody User user) {
        User dbUser = userService.getUserByUsername(user.getUsername());
        if (dbUser == null) {
            return ResponseEntity.status(404).body("User not found");
        }
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
        } catch (AuthenticationException e) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        final String jwt = jwtUtil.generateToken(user.getUsername());
        return ResponseEntity.ok(jwt);
    }

    // Logout endpoint
    @PostMapping("/logout")
    public ResponseEntity<?> endSession() {
        // Here you can clear JWT tokens client-side and manage it in frontend
        return ResponseEntity.ok("Session ended successfully");
    }

    // Token validation (could be used for session tracking)
    @GetMapping("/validate")
    public ResponseEntity<?> validateSession(@RequestHeader("Authorization") String token) {
        String jwtToken = token.substring(7); // Extract token without 'Bearer '
        String username = jwtUtil.extractUsername(jwtToken);
        boolean isValid = jwtUtil.validateToken(jwtToken, username);
        if (isValid) {
            return ResponseEntity.ok("Session is valid");
        } else {
            return ResponseEntity.status(403).body("Invalid or expired session");
        }
    }
}
