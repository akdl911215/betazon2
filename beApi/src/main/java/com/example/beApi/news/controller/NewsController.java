package com.example.beApi.news.controller;

import com.example.beApi.cmm.controller.Crawler;
import com.example.beApi.news.domain.News;
import com.example.beApi.news.service.NewsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Log
@RequestMapping("/news")
public class NewsController {

    private final NewsService newsService;

//    @GetMapping("/{category}/scrap")
//    public ResponseEntity<Long> crawling(@PathVariable String category) throws IOException {
//        newsService.saveAll(category);
//        System.out.print("++++++++++카테고리 = " + category);
//
//        return ResponseEntity.ok(newsService.saveAll(category));
//    }

    @PostMapping("/scrap")
    public ResponseEntity<List<News>> crawling
            (@RequestBody Crawler crawler)throws IOException {
        System.out.print("****************** 카테고리 : "+crawler.toString());
        return ResponseEntity.ok(newsService.saveAll(crawler));
    }

    @PostMapping("")
    public ResponseEntity<List<News>> post
        (final Pageable pageable){
            return ResponseEntity.ok(null);
    }
    @GetMapping("")
    public ResponseEntity<Page<News>> findAll
            (final Pageable pageable){

        return ResponseEntity.ok(newsService.findAll(pageable));
    }


    @PutMapping("")
    public ResponseEntity<Long> update
            (@RequestBody News news){
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("")
    public ResponseEntity<List<News>> delete
            (@RequestBody News news){
        return ResponseEntity.ok(null);
    }
}
