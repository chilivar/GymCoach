package com.gymcoach.gymcoach.service.impl;

import com.gymcoach.gymcoach.dto.ClubDto;
import com.gymcoach.gymcoach.models.Club;
import com.gymcoach.gymcoach.repository.ClubRepository;
import com.gymcoach.gymcoach.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClubServiceImpl implements ClubService {
    private ClubRepository clubRepository;

    @Autowired
    public ClubServiceImpl(ClubRepository clubRepository) {
        this.clubRepository = clubRepository;
    }

    @Override
    public List<ClubDto> findAllClubs() {
        List<Club> clubs = clubRepository.findAll();
        return clubs.stream().map((club)) -> mapToClubDto(club).collect(Collectors.toList());
    }


    private ClubDto mapToClubDto(Club club) {
        ClubDto clubDto = ClubDto.builder().build();
    }


}
