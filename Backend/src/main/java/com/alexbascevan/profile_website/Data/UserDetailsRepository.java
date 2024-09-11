package com.alexbascevan.profile_website.Data;

import com.alexbascevan.profile_website.Models.MyUserDetails;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository interface for managing MyUserDetails entities.
 * Extends CrudRepository to provide basic CRUD operations for MyUserDetails.
 */
public interface UserDetailsRepository extends CrudRepository<MyUserDetails, Integer> {
    
    /**
     * Finds a MyUserDetails entity by its username.
     * @param username - The username to search for.
     * @return - The MyUserDetails entity associated with the given username, or null if not found.
     */
    public MyUserDetails findByUsername(String username);

}
