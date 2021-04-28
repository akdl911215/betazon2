package com.example.beApi.cmm.service;

import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;



public abstract class AbstractService<T> {

	public abstract ResponseEntity<Long> save(T t);
	public abstract ResponseEntity<Optional<T>> findById(Long id);
	public abstract ResponseEntity<List<T>> findAll();
	public abstract ResponseEntity<Long> count();
	public abstract ResponseEntity<Optional<T>> getOne(Long id);
	public abstract ResponseEntity<Long> delete(T t);
	public abstract ResponseEntity<Boolean> existsById(long id);

//	public abstract long count();
//	public abstract boolean existsById(long id);
//	public abstract List<T> findAll();
//	public abstract Optional<T> findOne();
//	public abstract void deleteById(long id);
//	public abstract T getOne(long id);
//	public abstract void save(T entity);
//	public abstract T findById(Long id);
//	public abstract T findById2(String id);
}

