package com.alexbascevan.profile_website.Controllers;

import com.alexbascevan.profile_website.Models.Email;
import com.alexbascevan.profile_website.Services.Mailer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class MainController {
    
    // Injecting the Mailer service
    @Autowired
    Mailer mailer;
    
    /**
     * Handles requests to the root URL ("/").
     * Initializes the model with a new Email object and returns the view name "index".
     * @param model - The Model object used to pass data to the view.
     * @return - The name of the view template to be rendered.
     */
    @RequestMapping("/")
    public String index(Model model){
        model.addAttribute("email", new Email()); // Add a new Email object to the model
        return "index"; // Return the name of the view template to be rendered (index.html)
    }

    /**
     * Handles POST requests to "/sendEmail".
     * Processes the submitted Email form, sends the email using the Mailer service,
     * and redirects to the root URL with a success message.
     * @param email - The Email object populated with form data.
     * @param redirectAttributes - Used to pass flash attributes for redirect scenarios.
     * @return - Redirect URL after processing the form submission.
     */
    @PostMapping("/sendEmail")
    public String sendEmail(@ModelAttribute Email email, RedirectAttributes redirectAttributes) {

        // Set the subject and message for the email
        email.setSubject("*** From your profile Website ***");
        email.setMessage("Senders Name: " + email.getSendersName() + "\nSenders Email: " + email.getSendersEmail() + "\n\n" + email.getMessage());
        
        // Use the Mailer service to send the email
        mailer.sendEmail(email);

        // Add a success message as a flash attribute
        redirectAttributes.addFlashAttribute("message", "Email has been sent successfully!");

        // Redirect to the root URL
        return "redirect:/";
    }

    @PostMapping("/api/sendEmail") // Adjusted to match your React fetch URL
    public ResponseEntity<String> sendEmail(@RequestBody Email email) {
        try {
            email.setSubject("*** From your profile Website ***");
            email.setMessage("Senders Name: " + email.getSendersName() + "\nSenders Email: " + email.getSendersEmail() + "\n\n" + email.getMessage());
            mailer.sendEmail(email);
            return ResponseEntity.ok("Email has been sent successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while sending the email.");
        }
    }
    
}
