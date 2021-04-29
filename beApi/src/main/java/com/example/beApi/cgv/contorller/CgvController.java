package com.example.beApi.cgv.contorller;

import com.example.beApi.cgv.service.CgvService;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Log
@RequestMapping("/cgvs")
public class CgvController {

    private final CgvService service;


}
