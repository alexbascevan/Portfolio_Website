package com.alexbascevan.profile_website.Controllers;

import com.alexbascevan.profile_website.Models.Email;
import com.alexbascevan.profile_website.Services.Mailer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller 
public class MainController {
        
    @Autowired
    Mailer mailer;
    
    @RequestMapping("/") // Maps the root URL to this method
    public String index(Model model){
        return "index"; // Returns the name of the view template to be rendered
    }

    @RequestMapping("/projects") // Maps the projects URL to this method
    public String projects(Model model){
        return "projects"; // Returns the name of the view template to be rendered
    }

    @RequestMapping("/contact") // Maps the contact URL to this method
    public String contact(Model model){

        model.addAttribute("email", new Email()); // Attach an email to the model

        return "contact"; // Returns the name of the view template to be rendered
    }

    @PostMapping("/sendEmail")
    public String sendEmail(@ModelAttribute Email email, RedirectAttributes redirectAttributes) {

        email.setSubject(email.getSubject() + " : *** From your profile Website ***");

        email.setMessage("Senders Name: " + email.getSendersName() + "\nSenders Email: " + email.getSendersEmail() + "\n\n" + email.getMessage());

        mailer.sendEmail(email);

        // Add a success message and redirect to contact page
        redirectAttributes.addFlashAttribute("message", "Email has been sent successfully!");
        return "redirect:/contact";
    }
    
}
