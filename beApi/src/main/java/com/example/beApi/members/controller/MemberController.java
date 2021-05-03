package com.example.beApi.members.controller;

import java.io.IOException;
import java.util.List;

import com.example.beApi.members.domain.UserDto;
import com.example.beApi.news.domain.News;

import io.swagger.annotations.*;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.beApi.members.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@Api(tags = "users") // user를 담당하는 스웨거
@RequiredArgsConstructor
@RequestMapping("/users")
@CrossOrigin(origins="*")
@Log
public class MemberController {
	
	private final UserServiceImpl service;

	@ApiOperation(value = "${UserController.signin}")
	@ApiResponses(value = {@ApiResponse(code=400, message="Something ment wrong"),
			@ApiResponse(code=403, message="Access Denied"),
			@ApiResponse(code=422, message="Username is already in use")
	})

	@PostMapping("/signup")
	public ResponseEntity<Long> signup
			(@ApiParam("Singup User") @RequestBody UserDto member) throws IOException {

		return ResponseEntity.ok(service.signup(member));
		//return null;
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


	@GetMapping("/all")
	public ResponseEntity<List<UserDto>> all(){
		log.info("로그인 하지 않은 사용자도 접근 가능한 URI");
		return ResponseEntity.ok(null);
	}

	@PostMapping("/{username}")
	public ResponseEntity<?> auth(@PathVariable String username){
		log.info("로그인한 사용자만 접근 가능한 URI");
		return ResponseEntity.ok(null);
	}

	@PostMapping("/admin")
	public ResponseEntity<?> admin(){
		log.info("관리자만 접근 가능한 URI");
		return ResponseEntity.ok(null);
	}

}
