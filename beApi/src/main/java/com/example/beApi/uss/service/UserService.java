package com.example.beApi.uss.service;

import com.example.beApi.uss.domain.User;

public interface UserService {
	public String login(User user);
	public void updateDB(String id, User user);
	
}
