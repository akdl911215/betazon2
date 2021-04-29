package com.example.beApi.cgv.domain;

import lombok.Builder;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@RequiredArgsConstructor
@Entity
public class Cgvs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long cgvsId;

    @Column(length = 20, nullable = false)
    private String cgvsNo;

    @Column(length = 20, nullable = false)
    private String category;

    @Column(length = 512, nullable = false)
    private String title;

    @Column(length = 1024, nullable = false)
    private String address;

    @Builder
    public Cgvs(String cgvsNo, String category,
                String title, String address) {
        this.cgvsNo = cgvsNo;
        this.address = address;
        this.category = category;
        this.title = title;
    }

}
