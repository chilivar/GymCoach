package com.gymcoach.gymcoach.controllers;

import ch.qos.logback.core.model.Model;
import com.gymcoach.gymcoach.dto.ClubDto;
import com.gymcoach.gymcoach.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Controller
public class ClubController {
    private ClubService clubService;

    @Autowired
    public ClubController(ClubService clubService) {
        this.clubService = clubService;
    }

    @GetMapping("/clubs")
    public String lsitClubs(Model model) {
        List<ClubDto> clubs = clubService.findAllClubs();
        model.addText("clubs");
        return "gymcoach";
    }
}
