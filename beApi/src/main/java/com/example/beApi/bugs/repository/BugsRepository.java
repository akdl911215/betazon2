package com.example.beApi.bugs.repository;

import com.example.beApi.bugs.domain.Bugs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BugsRepository extends JpaRepository<Bugs, Long> {
    public Bugs findByBugsNo(String bugsNo);
    public List<Bugs> bugsFindALl();
}
