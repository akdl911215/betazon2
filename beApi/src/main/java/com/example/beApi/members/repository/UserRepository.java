package com.example.beApi.members.repository;

import javax.transaction.Transactional;

import com.example.beApi.members.domain.UserVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

//interface CustomUserRepository {}


public interface UserRepository {

//	@Transactional
//	@Query(value = "select username, password from users where username = :username and password = :password", nativeQuery = true)
//	String login(@Param("username") String username,
//				@Param("password") String password);
//
//	@Transactional
//	@Query(value = "select username from users where username = :username", nativeQuery = true)
//	public UserVo findByIdusername(@Param("username") String username);

}
