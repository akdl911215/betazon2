package com.example.beApi.members.domain;

import java.io.Serializable;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class MemberDto implements Serializable{
	private static final long serialVersionUID = 1L;

	private long memberNo;
	private String memberName;
	private String password;
	private String memberEmail;
	private String memberAddress;
	private String memberPhoneNumber;

	@Builder
	public MemberDto(long memberNo, String memberName, String password, String memberEmail, String memberAddress,
					 String memberPhoneNumber) {
		super();
		this.memberNo = memberNo;
		this.memberName = memberName;
		this.password = password;
		this.memberEmail = memberEmail;
		this.memberAddress = memberAddress;
		this.memberPhoneNumber = memberPhoneNumber;
	}

	
}
