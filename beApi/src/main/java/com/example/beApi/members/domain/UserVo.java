package com.example.beApi.members.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "users")
public class UserVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userNo;

    private String username;

    private String password;

    private String name;

    private String email;

    private String address;

    private String phoneNumber;

    @Builder
    public UserVo(long userNo, String username, String password, String name, String email, String address,
                String phoneNumber) {
        super();
        this.userNo = userNo;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    //List<Role> roles;
}
