package com.example.beApi.review.service;

import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.review.domain.Review;
import com.example.beApi.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service @RequiredArgsConstructor
public class ReviewServiceImpl extends AbstractService<Review> implements ReviewService {

    private final ReviewRepository repository;

    @Override
    public ResponseEntity<Long> save(Review review) {
        return (repository.save(review) != null) ? 1L : 0L;
    }

    @Override
    public ResponseEntity<Optional> findById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<List> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @Override
    public ResponseEntity<Optional> getOne(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<Long> delete(Object o) {
        return null;
    }

    @Override
    public ResponseEntity<Boolean> existsById(long id) {
        return null;
    }
}
