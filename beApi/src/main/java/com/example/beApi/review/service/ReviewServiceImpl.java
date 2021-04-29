package com.example.beApi.review.service;

import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.review.domain.Review;
import com.example.beApi.review.repository.ReviewRepository;
import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service @RequiredArgsConstructor
public class ReviewServiceImpl extends AbstractService<Review> implements ReviewService {

    private final ReviewRepository repository;


    @Override
    public Long save(Review review) {
        return (repository.save(review) != null) ? 1L : 0L;
    }

    @Override
    public Optional<Review> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Review> findAll() {
        return null;
    }

    @Override
    public Long count() {
        return null;
    }

    @Override
    public Optional<Review> getOne(Long id) {
        return Optional.empty();
    }

    @Override
    public Long delete(Review review) {
        return null;
    }

    @Override
    public Boolean existsById(long id) {
        return null;
    }
}
