package com.example.beApi.user.service;

import com.example.beApi.security.domain.SecurityProvider;
import com.example.beApi.security.exception.SecurityRuntimeException;
import com.example.beApi.user.domain.Role;
import com.example.beApi.user.domain.UserDto;
import com.example.beApi.user.domain.UserVo;
import com.example.beApi.user.repository.UserRepository;
import lombok.extern.java.Log;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@Log
@Getter
@RequiredArgsConstructor
@Service
public class UserServiceImpl  implements UserService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final SecurityProvider provider;
	private final AuthenticationManager manager;
	private final ModelMapper modelMapper;

	@Override
	public String signup(UserVo user) {
		if(!userRepository.existsByUsername(user.getUsername())){
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			List<Role> list = new ArrayList<>();
			list.add(Role.USER);
			user.setRoles(list);
			userRepository.save(user);
			return provider.createToken(user.getUsername(), user.getRoles());
		} else {
			throw new SecurityRuntimeException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	@Override
	public UserDto signin(UserVo user) {
		try {
			UserVo loginedUser = userRepository.signin(user.getUsername(), user.getPassword());
			UserDto userDto = modelMapper.map(user, UserDto.class);
			String token = provider.createToken(user.getUsername(), userRepository.findByUsername(user.getUsername()).getRoles());
			log.info("::::::::::: ISSUED TOKEN ::::::::::::: " + token);
			userDto.setToken(token);
			return userDto;
		} catch (Exception e){
			throw new SecurityRuntimeException("Invalid Username / Password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	@Override
	public List<UserVo> findAll() {
		return userRepository.findAll();
	}
}

