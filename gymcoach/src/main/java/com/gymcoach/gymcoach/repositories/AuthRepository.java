package com.gymcoach.gymcoach.repositories;


import com.gymcoach.gymcoach.models.User;
import org.springframework.data.repository.CrudRepository;

public interface AuthRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
    User findByUsernameAndPassword(String username, String password);
    User findByToken(String token);
}
