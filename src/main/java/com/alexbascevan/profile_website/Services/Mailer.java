package com.alexbascevan.profile_website.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.alexbascevan.profile_website.Data.MyEmailRepository;
import com.alexbascevan.profile_website.Models.Email;
import com.alexbascevan.profile_website.Models.MyEmail;

/**
 * Service class for sending emails.
 * Uses JavaMailSender to send email messages and retrieves recipient details from MyEmailRepository.
 */
@Service // Marks this class as a service component
public class Mailer {
    
    @Autowired
    private JavaMailSender mailer; // Autowired JavaMailSender for sending emails

    @Autowired
    private MyEmailRepository myEmailRepository; // Autowired repository for accessing MyEmail data
    
    /**
     * Sends an email using the provided Email object.
     * Retrieves the recipient's email address from MyEmailRepository.
     * @param email The Email object containing details of the email to be sent.
     */
    public void sendEmail(Email email) {
        // Load MyEmail by ID 1 to get the recipient's email address
        MyEmail myEmail = myEmailRepository.findById(1);
        
        // Set the 'to' field of the Email object from the retrieved MyEmail
        email.setTo(myEmail.getEmail());

        SimpleMailMessage msg = new SimpleMailMessage(); // Create a SimpleMailMessage object
        msg.setTo(email.getTo()); // Set the recipient's email address
        msg.setSubject(email.getSubject()); // Set the subject of the email
        msg.setText(email.getMessage()); // Set the body of the email
        
        mailer.send(msg); // Send the email using JavaMailSender
    }
    
}
