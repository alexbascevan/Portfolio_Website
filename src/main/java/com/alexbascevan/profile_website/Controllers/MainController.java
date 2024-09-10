package com.alexbascevan.profile_website.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller 
public class MainController {
    
    @RequestMapping("/") // Maps the root URL to this method
    public String index(Model model){
        return "index"; // Returns the name of the view template to be rendered
    }
    

}
