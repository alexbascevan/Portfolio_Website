package com.alexbascevan.profile_website.Services;

import com.alexbascevan.profile_website.Data.UserDetailsRepository;
import com.alexbascevan.profile_website.Models.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

/**
 * Implementation of UserDetailsService for loading user-specific data.
 * This class is used by Spring Security to retrieve user details for authentication and authorization.
 */
public class UserDetailsServiceImpl implements UserDetailsService {
    
    @Autowired
    private UserDetailsRepository userRepository; // Autowired repository for accessing user details
    
    /**
     * Loads user details by username.
     * Retrieves MyUserDetails from the repository and handles cases where the user is not found.
     * @param username The username of the user to be loaded.
     * @return UserDetails for the specified username.
     * @throws UsernameNotFoundException if no user with the given username is found.
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        MyUserDetails mud = userRepository.findByUsername(username); // Retrieve user details from the repository
        
        if (mud == null) throw new UsernameNotFoundException("User not found"); // Handle user not found
        
        return mud; // Return the UserDetails object for the specified username
    }
    
}//end of UserDetailsServiceImpl
