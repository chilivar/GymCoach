package com.gymcoach.gymcoach.controllers;

import com.gymcoach.gymcoach.models.Trainer;
import com.gymcoach.gymcoach.dto.TrainerDTO;
import com.gymcoach.gymcoach.services.TrainerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/trainers")
public class TrainerController {

    private final TrainerService trainerService;

    public TrainerController(TrainerService trainerService) {
        this.trainerService = trainerService;
    }

    @GetMapping
    public ResponseEntity<List<TrainerDTO>> getAllTrainers(@RequestParam(defaultValue = "ru") String lang) {
        List<Trainer> trainers = trainerService.getAllTrainers();
        List<TrainerDTO> trainerDTOs = trainers.stream()
                .map(trainer -> new TrainerDTO(
                        trainer.getId(),
                        trainer.getName(lang),
                        trainer.getSpecialization(lang),
                        trainer.getExperience()
                ))
                .collect(Collectors.toList());
        return ResponseEntity.ok(trainerDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrainerDTO> getTrainerById(@PathVariable Long id, @RequestParam(defaultValue = "ru") String lang) {
        Trainer trainer = trainerService.getTrainerById(id);
        if (trainer != null) {
            TrainerDTO trainerDTO = new TrainerDTO(
                    trainer.getId(),
                    trainer.getName(lang),
                    trainer.getSpecialization(lang),
                    trainer.getExperience()
            );
            return ResponseEntity.ok(trainerDTO);
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