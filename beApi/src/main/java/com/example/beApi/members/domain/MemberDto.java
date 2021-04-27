package com.example.beApi.members.domain;

import java.io.Serializable;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class MemberDto implements Serializable{
	private static final long serialVersionUID = 1L;

	private long userNo;
	private String username;
	private String password;
	private String userEamil;
	private String userAddress;
	private String userPhoneNumber;

	@Builder
	public MemberDto(long userNo, String username, String password, String userEamil, String userAddress,
					 String userPhoneNumber) {
		super();
		this.userNo = userNo;
		this.username = username;
		this.password = password;
		this.userEamil = userEamil;
		this.userAddress = userAddress;
		this.userPhoneNumber = userPhoneNumber;
	}

	
}
