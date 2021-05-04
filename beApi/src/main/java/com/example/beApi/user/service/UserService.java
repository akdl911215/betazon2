package com.example.beApi.user.service;

import com.example.beApi.user.domain.UserDto;
import com.example.beApi.user.domain.UserVo;

public interface UserService {
    String signup(UserVo user);
    UserDto signin(UserVo user);
}
