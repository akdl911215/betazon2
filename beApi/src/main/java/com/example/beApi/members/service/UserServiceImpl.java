package com.example.beApi.members.service;


import java.util.*;

import com.example.beApi.members.domain.UserDto;
import com.example.beApi.members.domain.UserVo;
import org.springframework.stereotype.Service;

import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.members.repository.UserRepository;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;



@Getter
@RequiredArgsConstructor
@Service
public class UserServiceImpl extends AbstractService<UserVo> implements UserService {

//	private final UserRepository repo;



	@Override
	public String login(UserVo user) {
		return null;
	}

	@Override
	public void updateDB(String id, UserVo user) {

	}



	@Override
	public long signup(UserDto member) {
		return 0L;
	}

	@Override
	public Long save(UserVo user) {
		return null;
	}

	@Override
	public Optional<UserVo> findById(Long id) {
		return Optional.empty();
	}

	@Override
	public List<UserVo> findAll() {
		return null;
	}

	@Override
	public Long count() {
		return null;
	}

	@Override
	public Optional<UserVo> getOne(Long id) {
		return Optional.empty();
	}

	@Override
	public Long delete(UserVo user) {
		return null;
	}

	@Override
	public Boolean existsById(long id) {
		return null;
	}

	//	@Override
//	public long count() {
//		// TODO Auto-generated method stub
//		return 0;
//	}
//
//	@Override
//	public boolean existsById(long id) {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//	@Override
//	public List<Member> findAll() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Optional<Member> findOne() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public void deleteById(long id) {
//		// TODO Auto-generated method stub
//
//	}
//
//	@Override
//	public Member getOne(long id) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public void save(Member entity) {
//		repo.save(entity);
//	}
//
//	@Override
//	public Member findById(Long id) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public String login(Member user) {
//		return repo.login(user.getUsername(), user.getPassword());
//	}
//
//	@Override
//	public void updateDB(String id, Member user) {
//		Member u = repo.findByIdusername(id);
//
//		u.setUserNo(user.getUserNo());
//		u.setUsername(user.getUsername());
//		u.setPassword(user.getPassword());
//		u.setUserEmail(user.getUserEmail());
//		u.setUserAddress(user.getUserAddress());
//		u.setUserPhoneNumber(user.getUserPhoneNumber());
//
//		repo.save(u);
//	}
//
//	@Override
//	public Member findById2(String id) {
//		// TODO Auto-generated method stub
//		return repo.findByIdusername(id);
//	}

	
}
