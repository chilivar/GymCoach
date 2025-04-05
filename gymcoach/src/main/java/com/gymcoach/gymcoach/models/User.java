package com.gymcoach.gymcoach.models;

import org.springframework.data.annotation.Id;

public class User {
    private Long id;
    private String username;
    private String password;
    private String email;
    private String token;
    private Long roleId;
    private boolean isConfirmed;

    // Геттеры и сеттеры
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public boolean isConfirmed() {
        return isConfirmed;
    }

    public void setConfirmed() {
        this.isConfirmed = true;
    }
}


