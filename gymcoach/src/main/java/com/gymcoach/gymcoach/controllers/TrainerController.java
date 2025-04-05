package com.gymcoach.gymcoach.controllers;

import com.gymcoach.gymcoach.models.Trainer;
import com.gymcoach.gymcoach.services.TrainerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/trainers")
public class TrainerController {

    private final TrainerService trainerService;

    public TrainerController(TrainerService trainerService) {
        this.trainerService = trainerService;
    }

    @GetMapping
    public ResponseEntity<List<Trainer>> getAllTrainers() {
        List<Trainer> trainers = trainerService.getAllTrainers();
        return ResponseEntity.ok(trainers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trainer> getTrainerById(@PathVariable Long id) {
        Trainer trainer = trainerService.getTrainerById(id);
        if (trainer != null) {
            return ResponseEntity.ok(trainer);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/create")
    public ResponseEntity<Trainer> createTrainer(@RequestBody Trainer trainer) {
        Trainer savedTrainer = trainerService.saveTrainer(trainer);
        return ResponseEntity
                .created(URI.create("/api/trainers/" + savedTrainer.getId()))
                .body(savedTrainer);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Trainer> updateTrainer(@PathVariable Long id, @RequestBody Trainer trainer) {
        Trainer existingTrainer = trainerService.getTrainerById(id);
        if (existingTrainer == null) {
            return ResponseEntity.notFound().build();
        }
        trainer.setId(id);
        trainerService.saveTrainer(trainer);
        return ResponseEntity.ok(trainer);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTrainer(@PathVariable Long id) {
        Trainer existingTrainer = trainerService.getTrainerById(id);
        if (existingTrainer == null) {
            return ResponseEntity.notFound().build();
        }
        trainerService.deleteTrainer(id);
        return ResponseEntity.ok().build();
    }
}