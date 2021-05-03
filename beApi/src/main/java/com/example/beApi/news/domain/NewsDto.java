package com.example.beApi.news.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.springframework.stereotype.Component;

import javax.persistence.Column;

@Component
@Data
public class NewsDto {

    private Long newsId;
    private String newsNo;
    private String category;
    private String title;
    private String address;

}
