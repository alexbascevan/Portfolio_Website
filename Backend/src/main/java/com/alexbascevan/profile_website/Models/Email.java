package com.alexbascevan.profile_website.Models;

import lombok.Data;

/**
 * Represents an email message with relevant fields for sending and receiving emails.
 * Uses Lombok's @Data annotation to automatically generate getters, setters, equals, hashCode, and toString methods.
 */
@Data
public class Email {
    
    private String to; // The recipient's email address
    
    private String sendersName; // The name of the sender
    
    private String sendersEmail; // The sender's email address
    
    private String subject; // The subject of the email
    
    private String message; // The body content of the email message
}
