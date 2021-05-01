package com.example.beApi.bugs.controller;

import com.example.beApi.bugs.domain.Bugs;
import com.example.beApi.bugs.service.BugsService;
import com.example.beApi.cmm.controller.Crawler;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bugs")
public class BugsController {

    private final BugsService service;

//    @GetMapping("/{category}/scrap")
//    public ResponseEntity<Long> crawlingBugs
//            (@PathVariable String category) throws IOException {
//        service.saveAll(category);
//        System.out.println("+++++++++++ 카테고리 = " + category);
//
//        return ResponseEntity.ok(service.saveAll(category));
//    }

    @PostMapping("/scrap")
    public ResponseEntity<List<Bugs>> crawling
            (@RequestBody Crawler crawler) throws IOException{
        System.out.println("++++++++++++ 카테고리 : " + crawler.toString());
        return ResponseEntity.ok(service.saveAll(crawler));
    }

    @PostMapping("")
    public ResponseEntity<List<Bugs>> post
            (final Pageable pageable){
        return ResponseEntity.ok(null);
    }

    @GetMapping("")
    public ResponseEntity<Page<Bugs>> findAll
            (final Pageable pageable) {

        return ResponseEntity.ok(service.findAll(pageable));
    }

    @PutMapping("")
    public ResponseEntity<Long> update
            (@RequestBody Bugs bugs){
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("")
    public ResponseEntity<List<Bugs>> delelte
            (@RequestBody Bugs bugs){
        return ResponseEntity.ok(null);
    }

}
