package com.example.beApi.bugs.service;

import com.example.beApi.bugs.domain.Bugs;
import com.example.beApi.cmm.controller.Crawler;
import com.example.beApi.news.domain.News;
import org.jsoup.nodes.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface BugsService {
    List<Bugs> saveAll(Crawler crawler) throws IOException;
    Page<Bugs> findAll(final Pageable pageable);
}
