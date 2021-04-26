package com.example.beApi.uss.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.beApi.uss.domain.User;

interface CustomUserRepository {}

@Repository
public interface UserRepository extends JpaRepository<User, Long>,
								CustomUserRepository{

	@Transactional
	@Query(value = "select username, password from users where username = :username and password = :password", nativeQuery = true)
	String login(@Param("username") String username,
				@Param("password") String password);
	
	@Transactional
	@Query(value = "select username from users where username = :username", nativeQuery = true)
	public User findByIdusername(@Param("username") String username);

}
