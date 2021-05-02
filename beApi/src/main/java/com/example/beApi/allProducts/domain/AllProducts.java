package com.example.beApi.allProducts.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@RequiredArgsConstructor
@Getter
@Table(name = "allProductsList")
public class AllProducts {

    @Id
    @GeneratedValue
    @Column(name = "all_products_no")
    private long allProductsNo;

    @Column(name = "title")
    private String title;

    @Column(name = "writer")
    private String writer;

    @Column(name = "main_picture")
    private String mainPicture;

    @Column(name = "content")
    private String content;

    @Column(name = "price")
    private String price;

    @Builder
    public AllProducts(long allProductsNo, String title, String writer,
                       String mainPicture, String content, String price){
        super();
        this.allProductsNo = allProductsNo;
        this.title = title;
        this.writer = writer;
        this.mainPicture = mainPicture;
        this.content = content;
        this.price = price;
    }
}
