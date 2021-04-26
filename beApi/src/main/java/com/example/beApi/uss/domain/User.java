package com.example.beApi.uss.domain;


import javax.persistence.*;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue
	
	@Column(name = "user_no")
	private long userNo;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "user_email")
	private String userEmail;
	
	@Column(name = "user_address")
	private String userAddress;
	
	@Column(name = "user_phone_number")
	private String userPhoneNumber;

	@Builder
	public User(long userNo, String username, String password, String userEmail, String userAddress,
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
