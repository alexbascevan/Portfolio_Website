package com.alexbascevan.profile_website.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents an email entity for persistence in the database.
 * Uses Lombok annotations to generate constructors, getters, setters, equals, hashCode, and toString methods.
 */
@Entity // Marks this class as a JPA entity
@Data // Lombok annotation to generate getters, setters, equals, hashCode, and toString methods
@AllArgsConstructor // Lombok annotation to generate a constructor with all fields
@NoArgsConstructor // Lombok annotation to generate a no-arguments constructor
public class MyEmail {

    @Id // Specifies the primary key of the entity
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "user_sequence2") // Automatically generates unique values for the primary key
    @SequenceGenerator(name = "user_sequence2", initialValue = 2, allocationSize = 1) // Defines the sequence generator for the primary key
    private int id; // The unique identifier for the email entity
    
    private String email; // The email address to be stored in the database
}
