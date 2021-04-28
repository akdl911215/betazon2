package com.example.beApi.members.service;


import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.members.domain.Member;
import com.example.beApi.members.repository.UserRepository;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@RequiredArgsConstructor
@Service
public class UserServiceImpl extends AbstractService<Member> implements UserService {

	private final UserRepository repo;

	@Override
	public ResponseEntity<Long> save(Member member) {
		return null;
	}

	@Override
	public ResponseEntity<Optional<Member>> findById(Long id) {
		return null;
	}

	@Override
	public ResponseEntity<List<Member>> findAll() {
		return null;
	}

	@Override
	public ResponseEntity<Long> count() {
		return null;
	}

	@Override
	public ResponseEntity<Optional<Member>> getOne(Long id) {
		return null;
	}

	@Override
	public ResponseEntity<Long> delete(Member member) {
		return null;
	}

	@Override
	public ResponseEntity<Boolean> existsById(long id) {
		return null;
	}

	@Override
	public String login(Member user) {
		return null;
	}

	@Override
	public void updateDB(String id, Member user) {

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
