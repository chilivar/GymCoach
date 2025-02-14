package com.gymcoach.gymcoach.controllers;

import com.gymcoach.gymcoach.models.Trainer;
import com.gymcoach.gymcoach.services.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
public class ClubController {

    private final TrainerService trainerService;

    @Autowired
    public ClubController(TrainerService trainerService) {
        this.trainerService = trainerService;
    }

    @GetMapping("/")
    public String gymcoach(Model model) {
        List<Trainer> trainers = trainerService.getAllTrainers();
        model.addAttribute("trainers", trainers);
        return "GymCoach";
    }

    @PostMapping("/addTrainer")
    public String addTrainer(@RequestParam String name,
                             @RequestParam int experience,
                             @RequestParam String phone,
                             @RequestParam String message,
                             RedirectAttributes redirectAttributes) {
        Trainer trainer = new Trainer();
        trainer.setName(name);
        trainer.setExperience(experience);
        trainer.setPhone(phone);
        trainer.setMessage(message);

        trainerService.saveTrainer(trainer);

        // Добавляем сообщение в RedirectAttributes
        redirectAttributes.addFlashAttribute("successMessage", "Запись успешно добавлена!");

        return "redirect:/";
    }

    @PostMapping("/deleteTrainer")
    public String deleteTrainer(@RequestParam Long id, RedirectAttributes redirectAttributes) {
        trainerService.deleteTrainer(id);
        redirectAttributes.addFlashAttribute("successMessage", "Тренер успешно удален!");
        return "redirect:/";
    }
}
