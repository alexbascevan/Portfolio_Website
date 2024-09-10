package com.alexbascevan.profile_website.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyEmail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "user_sequence2")
    @SequenceGenerator(name = "user_sequence2", initialValue = 2, allocationSize = 1)
    private int id;
    private String email;

}

