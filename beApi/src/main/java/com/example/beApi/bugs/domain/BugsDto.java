package com.example.beApi.bugs.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class BugsDto {
    private Long bugsId;
    private String bugsNo;
    private String category;
    private String title;
    private String address;
}
