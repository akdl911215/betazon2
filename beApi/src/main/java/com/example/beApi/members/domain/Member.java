package com.example.beApi.members.domain;


import javax.persistence.*;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "members")
public class Member {

	@Id
	@GeneratedValue
	
	@Column(name = "member_no")
	private long memberNo;
	
	@Column(name = "member_name")
	private String memberName;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "member_email")
	private String memberEmail;
	
	@Column(name = "member_address")
	private String memberAddress;
	
	@Column(name = "member_phone_number")
	private String memberPhoneNumber;

	@Builder
	public Member(long memberNo, String memberName, String password, String memberEmail, String memberAddress,
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
