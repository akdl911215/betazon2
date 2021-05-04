package com.example.beApi.user.repository;


import com.example.beApi.user.domain.UserVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserVo, Long> {
    boolean existsByUsername(String username);
    UserVo findByUsername(String username);
    @Query(value = "select * from users where users.username=:username and users.password=:password", nativeQuery = true)
    UserVo signin(@Param("username") String username, @Param("password")String password);
}
