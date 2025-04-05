package com.gymcoach.gymcoach.repositories;

import com.gymcoach.gymcoach.models.Trainer;
import com.gymcoach.gymcoach.models.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AuthRepository {
    private final JdbcTemplate jdbcTemplate;

    public AuthRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private RowMapper<User> userRowMapper = (rs, rowNum) -> {
        User user = new User();
        user.setId(rs.getLong("id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setEmail(rs.getString("email"));
        user.setToken(rs.getString("auth_token"));
        user.setRoleId(rs.getLong("role_id"));
        user.setConfirmed();
        return user;
    };

    public List<User> findAll() {
        return jdbcTemplate.query("SELECT * FROM user", userRowMapper);
    }

    // Найти пользователя по имени
    public User findByUsername(String username) {
        String sql = "SELECT * FROM user WHERE username = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{username}, userRowMapper);
    }

    // Найти пользователя по email
    public User findByEmail(String email) {
        String sql = "SELECT * FROM user WHERE email = ?";
        List<User> users = jdbcTemplate.query(sql, new Object[]{email}, userRowMapper);
        return users.isEmpty() ? null : users.get(0);
    }

    // Найти пользователя по username и password
    public User findByUsernameAndPassword(String username, String password) {
        String sql = "SELECT * FROM user WHERE username = ? AND password = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{username, password}, userRowMapper);
    }

    // Найти пользователя по токену
    public User findByToken(String token) {
        String sql = "SELECT * FROM user WHERE auth_token = ?";
        List<User> users = jdbcTemplate.query(sql, new Object[]{token}, userRowMapper);
        return users.isEmpty() ? null : users.get(0);
    }

    // Сохранить пользователя
    public void save(User user) {
        String sql = "INSERT INTO user (username, password, email, role_id, auth_token, is_confirmed) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, user.getUsername(), user.getPassword(), user.getEmail(), user.getRoleId(), user.getToken(), user.isConfirmed());
    }

    // Обновить пользователя
    public void update(User user) {
        String sql = "UPDATE user SET password = ?, auth_token = ?, is_confirmed = ? WHERE username = ?";
        jdbcTemplate.update(sql, user.getPassword(), user.getToken(), user.isConfirmed(), user.getUsername());
    }
}
