package com.example.beApi.cgv.repository;

import com.example.beApi.cgv.domain.Cgvs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CgvRepository extends JpaRepository<Cgvs, Long> {
//    public Cgvs findByCgvsNo(String cgvsNo);
//    public List<Cgvs> cgvsFindALl();
}
