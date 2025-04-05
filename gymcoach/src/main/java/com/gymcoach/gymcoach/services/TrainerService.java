package com.gymcoach.gymcoach.services;


import com.gymcoach.gymcoach.models.Trainer;
import com.gymcoach.gymcoach.repositories.TrainerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerService {

    private final TrainerRepository trainerRepository;

    public TrainerService(TrainerRepository trainerRepository) {
        this.trainerRepository = trainerRepository;
    }

    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }

    public Trainer getTrainerById(Long id) {
        return trainerRepository.findById(id);
    }

    public Trainer saveTrainer(Trainer trainer) {
        return trainerRepository.save(trainer); // Изменено с void на Trainer
    }

    public void deleteTrainer(Long id) {
        trainerRepository.delete(id);
    }
}
