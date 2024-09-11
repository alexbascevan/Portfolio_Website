package com.alexbascevan.profile_website.Data;

import com.alexbascevan.profile_website.Models.MyEmail;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository interface for managing MyEmail entities.
 * Extends CrudRepository to provide CRUD operations for MyEmail.
 */
public interface MyEmailRepository extends CrudRepository<MyEmail, Integer> {
    
    /**
     * Finds a MyEmail entity by its email address.
     * @param email - The email address to search for.
     * @return - The MyEmail entity associated with the given email address, or null if not found.
     */
    public MyEmail findByEmail(String email);
    
    /**
     * Finds a MyEmail entity by its ID.
     * @param id - The ID of the MyEmail entity to find.
     * @return - The MyEmail entity with the specified ID, or null if not found.
     */
    public MyEmail findById(int id);

}
