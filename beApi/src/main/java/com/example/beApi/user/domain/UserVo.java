package com.example.beApi.user.domain;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "users")
public class UserVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userNo;
    @Column(unique = true, nullable = false)
    private String username;
    @Size(min=8, message = "Minimum Password Length: 8 characters")
    private String password;
    @Column(unique = true, nullable = false)
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    @ElementCollection(fetch = FetchType.EAGER)

    List<Role> roles;
}
