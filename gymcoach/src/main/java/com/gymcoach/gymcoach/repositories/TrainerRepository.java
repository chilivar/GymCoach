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
                    rs.getString("name"),
                    rs.getString("specialization"),
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
                        "INSERT INTO trainer (name, specialization, experience) VALUES (?, ?, ?)",
                        Statement.RETURN_GENERATED_KEYS
                );
                ps.setString(1, trainer.getName());
                ps.setString(2, trainer.getSpecialization());
                ps.setInt(3, trainer.getExperience());
                return ps;
            }, keyHolder);

            Long newId = keyHolder.getKey().longValue();
            trainer.setId(newId);
        } else {
            update(trainer);
        }
        return trainer; // Возвращаем сохраненного тренера с новым ID
    }

    public void update(Trainer trainer) {
        jdbcTemplate.update(
                "UPDATE trainer SET name = ?, specialization = ?, experience = ? WHERE id = ?",
                trainer.getName(), trainer.getSpecialization(), trainer.getExperience(), trainer.getId()
        );
    }

    public void delete(Long id) {
        jdbcTemplate.update("DELETE FROM trainer WHERE id = ?", id);
    }
}

