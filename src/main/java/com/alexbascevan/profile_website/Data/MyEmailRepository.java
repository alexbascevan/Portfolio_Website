package com.alexbascevan.profile_website.Data;

import com.alexbascevan.profile_website.Models.MyEmail;
import org.springframework.data.repository.CrudRepository;


public interface MyEmailRepository extends CrudRepository<MyEmail,Integer> {
    
    public MyEmail findByEmail(String email);
    public MyEmail findById(int id);

}
