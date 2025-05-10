package com.gymcoach.gymcoach.repositories;

import com.gymcoach.gymcoach.models.TrainerComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TrainerCommentRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void addComment(Long trainerId, Long userId, String text) {
        String sql = "INSERT INTO trainer_comments (trainer_id, user_id, comment_text) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, trainerId, userId, text);
    }

    public List<TrainerComment> getCommentsByTrainerId(Long trainerId) {
        String sql = "SELECT * FROM trainer_comments WHERE trainer_id = ?";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(TrainerComment.class), trainerId);
    }
}

