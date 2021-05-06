package com.example.beApi.user.controller;

import java.io.IOException;
import java.util.List;

import com.example.beApi.user.domain.UserDto;
import com.example.beApi.news.domain.News;

import com.example.beApi.user.domain.UserVo;
import io.swagger.annotations.*;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.beApi.user.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@Api(tags = "users") // user를 담당하는 스웨거
@RequiredArgsConstructor
@RequestMapping("/users")
@Log
public class UserController {
	
	private final UserServiceImpl service;
	private final ModelMapper modelMapper;

	@PostMapping("/signup")
	@ApiOperation(value = "${UserController.signup}")
	@ApiResponses(value = {@ApiResponse(code=400, message="Something went wrong"),
			@ApiResponse(code=403, message="Access Denied"),
			@ApiResponse(code=422, message="Username is already in use")})
	public ResponseEntity<String> signup
			(@ApiParam("Signup User") @RequestBody UserDto user) throws IOException {
			log.info("회원가입 시작 ++++++++++++++++++++++");
		return ResponseEntity.ok(service.signup(modelMapper.map(user, UserVo.class))); // 컴파일 된! 후에 작동.
	}

	@PostMapping("/signin")
	@ApiOperation(value = "${UserController.signin}")
	@ApiResponses(value = {@ApiResponse(code=400, message="Something went wrong"),
			@ApiResponse(code=422, message="Invalid Username / Password supplied")})
	public ResponseEntity<UserDto> signin
			(@RequestBody UserDto user) throws IOException {
			log.info("++++++++++++++user = " + user);
		return ResponseEntity.ok(service.signin(modelMapper.map(user, UserVo.class)));
	}

	@GetMapping("/fetch")
	public ResponseEntity<List<UserVo>> fetch() {
		return ResponseEntity.ok(service.findAll());
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
