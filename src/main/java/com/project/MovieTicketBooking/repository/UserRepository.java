package com.project.MovieTicketBooking.repository;

import com.project.MovieTicketBooking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


// this annotation Marks the interface as a Spring Data repository, enabling automatic implementation 
//and providing methods for standard database operations like CRUD.
@Repository

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String username);
}
