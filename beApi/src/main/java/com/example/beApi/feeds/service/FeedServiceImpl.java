package com.example.beApi.feeds.service;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.feeds.domian.Feeds;
import com.example.beApi.feeds.repository.FeedRepository;


import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
public class FeedServiceImpl extends AbstractService<Feeds> implements FeedService {
	
	private final FeedRepository repo;

	@Override
	public Long save(Feeds feeds) {
		return null;
	}

	@Override
	public Optional<Feeds> findById(Long id) {
		return Optional.empty();
	}

	@Override
	public List<Feeds> findAll() {
		return null;
	}

	@Override
	public Long count() {
		return null;
	}

	@Override
	public Optional<Feeds> getOne(Long id) {
		return Optional.empty();
	}

	@Override
	public Long delete(Feeds feeds) {
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
//	public List<Feeds> findAll() {
//		// TODO Auto-generated method stub
//		return repo.findAll();
//	}
//
//	@Override
//	public Optional<Feeds> findOne() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public void deleteById(long id) {
//		repo.deleteById(id);
//
//	}
//
//	@Override
//	public Feeds getOne(long id) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
////	@Override
////	public void updateDB(long id, Feeds feeds) {
////		Feeds f = repo.findById(id).orElseThrow(Feads, );
////
////		f.setTitle(feeds.getTitle());
////		f.setWriter(feeds.getWriter());
////		f.setContent(feeds.getContent());
////		f.setAddLocation(feeds.getAddLocation());
////		f.setHashTag(feeds.getHashTag());
////
////		repo.save(f);
////	}
//
//	@Override
//	public Feeds findById(Long id) {
//		// TODO Auto-generated method stub
//		return repo.findByFeedNo(id);
//	}
//
//	@Override
//	public void save(Feeds entity) {
//		repo.save(entity);
//	}
//
//	@Override
//	public Feeds findById2(String id) {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
