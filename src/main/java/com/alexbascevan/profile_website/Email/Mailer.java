package com.alexbascevan.profile_website.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class Mailer {
    
    @Autowired
    private JavaMailSender mailer;
    
    public void sendEmail( Email email){
        SimpleMailMessage msg = new SimpleMailMessage() ;
        msg.setTo(email.getTo() );
        msg.setSubject(email.getSubject() );
        msg.setText( email.getMessage());
        
        mailer.send(msg);
    }
    
}
