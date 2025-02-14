package com.gymcoach.gymcoach.controllers;

import ch.qos.logback.core.model.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Controller
public class ClubController {

    @GetMapping("/")
    public String gymcoach(Model model) {
        return "gymcoach";
    }
}
