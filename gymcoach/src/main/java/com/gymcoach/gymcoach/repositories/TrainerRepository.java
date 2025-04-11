package com.gymcoach.gymcoach.repositories;

import com.gymcoach.gymcoach.models.Trainer;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class TrainerRepository {

    private final JdbcTemplate jdbcTemplate;

    public TrainerRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private RowMapper<Trainer> trainerRowMapper = (rs, rowNum) ->
            new Trainer(
                    rs.getLong("id"),
                    rs.getString("name_ru"),
                    rs.getString("name_en"),
                    rs.getString("specialization_ru"),
                    rs.getString("specialization_en"),
                    rs.getInt("experience")
            );

    public List<Trainer> findAll() {
        return jdbcTemplate.query("SELECT * FROM trainer", trainerRowMapper);
    }

    public Trainer findById(Long id) {
        return jdbcTemplate.queryForObject(
                "SELECT * FROM trainer WHERE id = ?",
                trainerRowMapper,
                id
        );
    }

    public Trainer save(Trainer trainer) {
        if (trainer.getId() == null) {
            KeyHolder keyHolder = new GeneratedKeyHolder();
            jdbcTemplate.update(connection -> {
                PreparedStatement ps = connection.prepareStatement(
                        "INSERT INTO trainer (name_ru, name_en, specialization_ru, specialization_en, experience) VALUES (?, ?, ?, ?, ?)",
                        Statement.RETURN_GENERATED_KEYS
                );
                ps.setString(1, trainer.getNameRu());
                ps.setString(2, trainer.getNameEn());
                ps.setString(3, trainer.getSpecializationRu());
                ps.setString(4, trainer.getSpecializationEn());
                ps.setInt(5, trainer.getExperience());
                return ps;
            }, keyHolder);

            Long newId = keyHolder.getKey().longValue();
            trainer.setId(newId);
        } else {
            update(trainer);
        }
        return trainer;
    }

    public void update(Trainer trainer) {
        jdbcTemplate.update(
                "UPDATE trainer SET name_ru = ?, name_en = ?, specialization_ru = ?, specialization_en = ?, experience = ? WHERE id = ?",
                trainer.getNameRu(), trainer.getNameEn(), trainer.getSpecializationRu(), trainer.getSpecializationEn(), trainer.getExperience(), trainer.getId()
        );
    }

    public void delete(Long id) {
        jdbcTemplate.update("DELETE FROM trainer WHERE id = ?", id);
    }
}