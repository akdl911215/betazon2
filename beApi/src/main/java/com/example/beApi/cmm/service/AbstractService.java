package com.example.beApi.cmm.service;

import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;



public abstract class AbstractService<T> {

	public abstract Long save(T t);
	public abstract Optional<T> findById(Long id);
	public abstract List<T> findAll();
	public abstract Long count();
	public abstract Optional<T> getOne(Long id);
	public abstract Long delete(T t);
	public abstract Boolean existsById(long id);

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

