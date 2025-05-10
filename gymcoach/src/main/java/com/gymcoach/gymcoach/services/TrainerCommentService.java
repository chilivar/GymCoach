package com.gymcoach.gymcoach.services;

import com.gymcoach.gymcoach.models.TrainerComment;
import com.gymcoach.gymcoach.repositories.TrainerCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerCommentService {
    @Autowired
    private TrainerCommentRepository repository;

    public void addComment(Long trainerId, Long userId, String text) {
        repository.addComment(trainerId, userId, text);
    }

    public List<TrainerComment> getComments(Long trainerId) {
        return repository.getCommentsByTrainerId(trainerId);
    }
}

