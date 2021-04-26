package com.example.beApi.uss.service;


import java.util.*;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Service;

import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.fds.domian.Feeds;
import com.example.beApi.uss.domain.User;
import com.example.beApi.uss.domain.UserDto;
import com.example.beApi.uss.repository.UserRepository;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@RequiredArgsConstructor
@Service
public class UserServiceImpl extends AbstractService<User> implements UserService {

	private final UserRepository repo;

	
	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsById(long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<User> findOne() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteById(long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public User getOne(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(User entity) {
		repo.save(entity);
	}

	@Override
	public User findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String login(User user) {
		return repo.login(user.getUsername(), user.getPassword());
	}

	@Override
	public void updateDB(String id,User user) {
		User u = repo.findByIdusername(id);
		
		u.setUserNo(user.getUserNo());
		u.setUsername(user.getUsername());
		u.setPassword(user.getPassword());
		u.setUserEmail(user.getUserEmail());
		u.setUserAddress(user.getUserAddress());
		u.setUserPhoneNumber(user.getUserPhoneNumber());
		
		repo.save(u);
	}

	@Override
	public User findById2(String id) {
		// TODO Auto-generated method stub
		return repo.findByIdusername(id);
	}

	
}
