package com.example.beApi.cgv.contorller;

import com.example.beApi.cgv.service.CgvService;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@Log
@RequestMapping("/cgvs")
public class CgvController {

    private final CgvService service;

//    @GetMapping("{category}/scrap")
//    public ResponseEntity<Long> cwawlingCgvs
//            (@PathVariable String category) throws IOException {
//        service.saveAll(category);
//        System.out.println("++++++++ 카테고리 = " + category);
//
//        return ResponseEntity.ok(service.saveAll(category));
//    }
}
