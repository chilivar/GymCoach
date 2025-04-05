package com.gymcoach.gymcoach.services;

import com.gymcoach.gymcoach.models.Trainer;
import com.gymcoach.gymcoach.models.User;
import com.gymcoach.gymcoach.repositories.AuthRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class AuthService {
    private final AuthRepository authRepository;
    private final JavaMailSender mailSender;

    public AuthService(AuthRepository authRepository, JavaMailSender mailSender) {
        this.authRepository = authRepository;
        this.mailSender = mailSender;
    }

    public List<User> getAllUsers() {
        return authRepository.findAll();
    }

    public String register(String username, String password, String email, Long roleId) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.setRoleId(roleId); // Используем переданную роль
        user.setConfirmed(); // Подтверждение по умолчанию false
        String token = UUID.randomUUID().toString();
        user.setToken(token);

        authRepository.save(user);
        return "Registration successful";
    }

    public String updateUser(User user) {
        User existingUser = authRepository.findByUsername(user.getUsername());
        if (existingUser == null) {
            throw new RuntimeException("Пользователь не найден");
        }

        // Обновляем только разрешенные поля
        existingUser.setEmail(user.getEmail() != null ? user.getEmail() : existingUser.getEmail());
        existingUser.setPassword(user.getPassword() != null ? user.getPassword() : existingUser.getPassword());
        existingUser.setRoleId(user.getRoleId() != null ? user.getRoleId() : existingUser.getRoleId());

        authRepository.update(existingUser);
        return "User updated successfully";
    }

    public boolean hasAdminAccessByToken(String token) {
        User user = authRepository.findByToken(token);
        if (user == null) {
            return false;
        }
        return user.getRoleId() == 1L;
    }

    public boolean hasAdminAccess(String username) {
        User user = authRepository.findByUsername(username);
        if (user == null) {
            return false;
        }
        return user.getRoleId() == 1L;
    }

    public Map<String, String> login(String username, String password) {
        User user = authRepository.findByUsernameAndPassword(username, password);
        if(user == null || !user.isConfirmed()) {
            return null;
        }
        String token = UUID.randomUUID().toString();
        user.setToken(token);
        authRepository.update(user);
        return Collections.singletonMap("token", token);
    }

    public boolean validateToken(String token) {
        User user = authRepository.findByToken(token);
        return user != null;
    }

    public String logout(String token) {
        User user = authRepository.findByToken(token);
        if(user == null) {
            return null;
        }
        user.setToken(null);
        authRepository.update(user);
        return "Logout successful";
    }

    public String confirmEmail(String token) {
        User user = authRepository.findByToken(token);
        if(user == null) {
            return null;
        }
        user.setToken(null);
        user.setConfirmed();
        authRepository.update(user);
        return "Confirm email successful";
    }
}