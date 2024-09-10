package com.alexbascevan.profile_website.Data;

import com.alexbascevan.profile_website.Models.MyUserDetails;
import org.springframework.data.repository.CrudRepository;


public interface UserDetailsRepository extends CrudRepository<MyUserDetails,Integer> {
    
    public MyUserDetails findByUsername(String username);

}
