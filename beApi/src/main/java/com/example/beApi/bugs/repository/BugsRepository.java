package com.example.beApi.bugs.repository;

import com.example.beApi.bugs.domain.Bugs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BugsRepository extends JpaRepository<Bugs, Long> {
}
