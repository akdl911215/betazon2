package com.example.beApi.cgv.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Column;

@Data
@Component
public class CgvsDto {
    private Long cgvsId;
    private String cgvsNo;
    private String category;
    private String title;
    private String address;
}
