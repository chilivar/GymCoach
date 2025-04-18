package com.gymcoach.gymcoach.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TrainerLikeRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void addLike(Long trainerId, Long userId) {
        String sql = "INSERT IGNORE INTO trainer_likes (trainer_id, user_id) VALUES (?, ?)";
        jdbcTemplate.update(sql, trainerId, userId);
    }

    public int countLikes(Long trainerId) {
        String sql = "SELECT COUNT(*) FROM trainer_likes WHERE trainer_id = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, trainerId);
    }
}

