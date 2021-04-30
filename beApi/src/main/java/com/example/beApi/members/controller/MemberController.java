package com.example.beApi.members.controller;

import java.io.IOException;
import java.util.List;

import com.example.beApi.cmm.controller.Crawler;
import com.example.beApi.members.domain.MemberDto;
import com.example.beApi.news.domain.News;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.beApi.members.domain.Member;
import com.example.beApi.members.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;



@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@CrossOrigin(origins="*")
public class MemberController {
	
	private final UserServiceImpl sv;

	@PostMapping("")
	public ResponseEntity<Long> Join
			(@RequestBody MemberDto member) throws IOException {

		return ResponseEntity.ok(null);
	}

	@GetMapping("")
	public ResponseEntity<List<News>> fetch
			(@RequestBody News news){
		return ResponseEntity.ok(null);
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
