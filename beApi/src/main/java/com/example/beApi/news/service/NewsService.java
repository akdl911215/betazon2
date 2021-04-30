package com.example.beApi.news.service;

import com.example.beApi.cmm.controller.Crawler;
import com.example.beApi.news.domain.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface NewsService {

    List<News> saveAll(Crawler crawler) throws IOException;
    Page<News> findAll(final Pageable pageable);
}