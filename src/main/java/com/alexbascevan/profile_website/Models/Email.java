package com.alexbascevan.profile_website.Models;

import lombok.Data;

@Data
public class Email {
    private String to;
    private String sendersName;
    private String sendersEmail;
    private String subject;
    private String message;
}

