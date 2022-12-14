package com.ctm.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

    @GetMapping({"/", "login"})
    public String index(){

        //el retorno se debe llamar igual que nuestro html
        return "index";
    }
    @GetMapping("/menu")
    public String menu(){
        return "menu";
    }
    @GetMapping("/user")
    public String user(){
        return "user";
    }
  
    
}
