package com.example.beApi.news.controller;

import com.example.beApi.news.domain.News;
import com.example.beApi.news.service.NewsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Log
@RequestMapping("/news")
public class NewsController {

    private final NewsService newsService;

    @GetMapping("/{category}/scrap")
    public ResponseEntity<Long> crawling(@PathVariable String category) throws IOException {
        newsService.saveAll(category);
        System.out.print("++++++++++카테고리 = " + category);

        return ResponseEntity.ok(newsService.saveAll(category));
    }
}
