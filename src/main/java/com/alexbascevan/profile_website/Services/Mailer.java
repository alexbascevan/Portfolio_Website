package com.alexbascevan.profile_website.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.alexbascevan.profile_website.Data.MyEmailRepository;
import com.alexbascevan.profile_website.Models.Email;
import com.alexbascevan.profile_website.Models.MyEmail;

@Service
public class Mailer {
    
    @Autowired
    private JavaMailSender mailer;

    @Autowired
    private MyEmailRepository myEmailRepository;
    
    public void sendEmail(Email email) {
        // Load MyEmail by ID 1
        MyEmail myEmail = myEmailRepository.findById(1);
        
        // Set the 'to' field of the Email object from MyEmail
        email.setTo(myEmail.getEmail());

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email.getTo()); // 'to' now comes from MyEmail
        msg.setSubject(email.getSubject());
        msg.setText(email.getMessage());
        
        mailer.send(msg);
    }
    
}
