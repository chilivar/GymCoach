package com.gymcoach.gymcoach.controllers;

import com.gymcoach.gymcoach.dto.LoginRequest;
import com.gymcoach.gymcoach.models.Trainer;
import com.gymcoach.gymcoach.models.User;
import com.gymcoach.gymcoach.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = authService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody LoginRequest loginRequest) {
        try {
            String response = authService.register(
                    loginRequest.getUsername(),
                    loginRequest.getPassword(),
                    loginRequest.getEmail(),
                    loginRequest.getRoleId() != null ? loginRequest.getRoleId() : 3L // Роль по умолчанию 3, если не указана
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Ошибка при регистрации: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Map<String, String> token = authService.login(loginRequest.getUsername(), loginRequest.getPassword());
        if(token == null) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
        return ResponseEntity.ok(token);
    }

    @GetMapping("/status")
    public ResponseEntity<String> getStatus(@RequestBody LoginRequest loginRequest) {
        boolean isAuth = authService.validateToken(loginRequest.getToken());
        if(isAuth) {
            return ResponseEntity.ok("Success");
        }
        return ResponseEntity.status(401).body("Invalid token");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(@RequestBody LoginRequest loginRequest) {
        String response = authService.logout(loginRequest.getToken());
        if(response == null) {
            return ResponseEntity.status(401).body("Invalid token");
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/confirm-email")
    public ResponseEntity<String> confirmEmail(@RequestParam String token) {
        String response = authService.confirmEmail(token);
        if(response == null) {
            return ResponseEntity.status(401).body("Invalid token");
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/admin-access")
    public ResponseEntity<String> checkAdminAccess(@RequestParam String token) {
        boolean hasAccess = authService.hasAdminAccessByToken(token);
        if (hasAccess) {
            return ResponseEntity.ok("Доступ к админ-панели предоставлен");
        } else {
            return ResponseEntity.status(403).body("Доступ к админ-панели запрещен");
        }
    }

    @PutMapping("/admin/update-user")
    public ResponseEntity<String> updateUser(
            @RequestParam String adminToken,
            @RequestBody User user) {
        try {
            if (!authService.hasAdminAccessByToken(adminToken)) {
                return ResponseEntity.status(403).body("Требуются права администратора");
            }
            String response = authService.updateUser(user);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Ошибка при обновлении: " + e.getMessage());
        }
    }
}