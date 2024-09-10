package com.alexbascevan.profile_website.Services;

import com.alexbascevan.profile_website.Data.UserDetailsRepository;
import com.alexbascevan.profile_website.Models.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImpl implements UserDetailsService {
    
    @Autowired
    private UserDetailsRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        MyUserDetails mud = userRepository.findByUsername(username);
        
        if (mud == null) throw new UsernameNotFoundException("User not found");
        
        return mud;
            
    }
    
}//end of UserDetialsServiceImpl

