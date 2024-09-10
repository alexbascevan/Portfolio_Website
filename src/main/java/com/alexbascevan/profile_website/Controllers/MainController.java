package com.alexbascevan.profile_website.Controllers;

import com.alexbascevan.profile_website.Email.Mailer;
import com.alexbascevan.profile_website.Email.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller 
public class MainController {

        
    @Autowired
    Mailer mailer;
    
    @RequestMapping("/") // Maps the root URL to this method
    public String index(Model model){

        model.addAttribute("email", new Email());

        return "index"; // Returns the name of the view template to be rendered
    }

    @RequestMapping("/sendEmail")
    @ResponseBody
    public String index(Model model, @ModelAttribute Email email){
        mailer.sendEmail(email);
        return "Sent "+  email;
    }
}
