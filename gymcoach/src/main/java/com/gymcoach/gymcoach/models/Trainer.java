package com.gymcoach.gymcoach.models;

public class Trainer {
    private Long id;
    private String nameRu;
    private String nameEn;
    private String specializationRu;
    private String specializationEn;
    private int experience;

    // Конструкторы
    public Trainer() {}

    public Trainer(Long id, String nameRu, String nameEn, String specializationRu, String specializationEn, int experience) {
        this.id = id;
        this.nameRu = nameRu;
        this.nameEn = nameEn;
        this.specializationRu = specializationRu;
        this.specializationEn = specializationEn;
        this.experience = experience;
    }

    // Геттеры и сеттеры
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNameRu() { return nameRu; }
    public void setNameRu(String nameRu) { this.nameRu = nameRu; }

    public String getNameEn() { return nameEn; }
    public void setNameEn(String nameEn) { this.nameEn = nameEn; }

    public String getSpecializationRu() { return specializationRu; }
    public void setSpecializationRu(String specializationRu) { this.specializationRu = specializationRu; }

    public String getSpecializationEn() { return specializationEn; }
    public void setSpecializationEn(String specializationEn) { this.specializationEn = specializationEn; }

    public int getExperience() { return experience; }
    public void setExperience(int experience) { this.experience = experience; }

    // Методы для получения имени и специализации в зависимости от языка
    public String getName(String lang) {
        return "eng".equalsIgnoreCase(lang) ? nameEn : nameRu;
    }

    public String getSpecialization(String lang) {
        return "eng".equalsIgnoreCase(lang) ? specializationEn : specializationRu;
    }
}