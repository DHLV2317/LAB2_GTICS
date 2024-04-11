package com.example.lab2_gtics.controller;
import org.sprintframework.stereotype.Controller;

@Controller
public class HomeController{
    @RequestMapping(value = "/patito_hule", method = RequestMethod.GET)
    @ResponseBody
    public String paginaPrincipal(){
        return "Patito hule";
    }
}