package com.example.beApi.members.domain;

import java.io.Serializable;
import java.util.List;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class UserDto {


	private long userNo;
	@ApiModelProperty(position = 0)
	private String username;
	@ApiModelProperty(position = 1)
	private String password;
	@ApiModelProperty(position = 2)
	private String name;
	@ApiModelProperty(position = 3)
	private String email;
	@ApiModelProperty(position = 4)
	private String address;
	@ApiModelProperty(position = 5)
	private String phoneNumber;
	@ApiModelProperty(position = 6)
	private List<Role> roles;

	@Builder
	public UserDto(long userNo, String username, String password, String email, String address,
				   String phoneNumber) {
		super();
		this.userNo = userNo;
		this.username = username;
		this.password = password;
		this.email = email;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}

	
}
