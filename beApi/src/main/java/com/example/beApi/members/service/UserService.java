package com.example.beApi.members.service;

import com.example.beApi.members.domain.Member;

public interface UserService {
	public String login(Member user);
	public void updateDB(String id, Member user);
	
}
