package com.gymcoach.gymcoach.services;

import com.gymcoach.gymcoach.repositories.TrainerLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrainerLikeService {
    @Autowired
    private TrainerLikeRepository repository;

    public void likeTrainer(Long trainerId, Long userId) {
        repository.addLike(trainerId, userId);
    }

    public int getLikeCount(Long trainerId) {
        return repository.countLikes(trainerId);
    }
}

