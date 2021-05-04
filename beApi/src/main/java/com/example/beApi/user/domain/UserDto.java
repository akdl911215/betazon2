package com.example.beApi.user.domain;

import java.util.List;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class UserDto {

	@ApiModelProperty(position = 0)
	private String username;
	@ApiModelProperty(position = 1)
	private String password;
	@ApiModelProperty(position = 2)
	private String name;
	@ApiModelProperty(position = 3)
	private String email;
	@ApiModelProperty(position = 4)
	private String token;
	@ApiModelProperty(position = 5)
	private List<Role> roles;
}
