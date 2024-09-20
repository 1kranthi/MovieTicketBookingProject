package com.project.MovieTicketBooking.entity;

import jakarta.persistence.*;


// marks the class as a JPA entity to be mapped to a database table.
@Entity
@Table(name="users")
public class User {

    //designates the primary key of the entity.
    @Id
    //configures automatic generation of the primary key values.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String email;    

    public User() {
    }

    //Getters and Setters
    public Long getId(){
        return id;
    }
    
    public void setId(Long id){
        this.id=id;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username=username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password=password;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email=email;
    }

}
