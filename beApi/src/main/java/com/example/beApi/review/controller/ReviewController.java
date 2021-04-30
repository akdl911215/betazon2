package com.example.beApi.review.controller;

import com.example.beApi.cmm.controller.AbstractController;
import com.example.beApi.review.domain.Review;
import com.example.beApi.review.service.ReviewServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/reviews")
public class ReviewController extends AbstractController<Review> {

    private final ReviewServiceImpl service;


    @Override
    public ResponseEntity<Long> save(Review review) {
        return null;
    }

    @Override
    public ResponseEntity<Optional<Review>> findById(long id) {
        return null;
    }

    @Override
    public ResponseEntity<List<Review>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @Override
    public ResponseEntity<Optional<Review>> getOne(long id) {
        return null;
    }

    @Override
    public ResponseEntity<Long> delete(Review review) {
        return null;
    }

    @Override
    public ResponseEntity<Boolean> existsById(long id) {
        return null;
    }
}