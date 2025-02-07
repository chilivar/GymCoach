package com.gymcoach.gymcoach.service;

import com.gymcoach.gymcoach.dto.ClubDto;

import java.util.List;

public interface ClubService {
    List<ClubDto> findAllClubs();
}
