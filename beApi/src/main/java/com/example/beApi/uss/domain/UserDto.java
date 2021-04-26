package com.example.beApi.uss.domain;

import java.io.Serializable;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class UserDto implements Serializable{
	private static final long serialVersionUID = 1L;

	private long userNo;
	private String username;
	private String password;
	private String userEmail;
	private String userAddress;
	private String userPhoneNumber;
	
	@Builder
	public UserDto(long userNo, String username, String password, String userEmail, String userAddress,
			String userPhoneNumber) {
		super();
		this.userNo = userNo;
		this.username = username;
		this.password = password;
		this.userEmail = userEmail;
		this.userAddress = userAddress;
		this.userPhoneNumber = userPhoneNumber;
	}
	
	
}
