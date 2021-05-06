package com.example.beApi.user.service;

import com.example.beApi.user.domain.UserDto;
import com.example.beApi.user.domain.UserVo;

import java.util.List;

public interface UserService {
    String signup(UserVo user);
    UserDto signin(UserVo user);
    List<UserVo> findAll();
}
