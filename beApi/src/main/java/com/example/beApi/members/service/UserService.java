package com.example.beApi.members.service;

import com.example.beApi.members.domain.UserDto;
import com.example.beApi.members.domain.UserVo;

public interface UserService {
	public String login(UserVo user);
	public void updateDB(String id, UserVo user);

    long signup(UserDto member);
}
