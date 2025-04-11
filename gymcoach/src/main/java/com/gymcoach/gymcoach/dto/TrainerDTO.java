package com.gymcoach.gymcoach.dto;

public class TrainerDTO {
    private Long id;
    private String name;
    private String specialization;
    private int experience;

    public TrainerDTO(Long id, String name, String specialization, int experience) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
        this.experience = experience;
    }

    // Геттеры и сеттеры
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSpecialization() { return specialization; }
    public void setSpecialization(String specialization) { this.specialization = specialization; }

    public int getExperience() { return experience; }
    public void setExperience(int experience) { this.experience = experience; }
}
