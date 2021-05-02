package com.example.beApi.allProducts.domain;

import javax.persistence.Column;
import java.io.Serializable;

public class AllProductsDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private long allProductsNo;
    private String title;
    private String writer;
    private String mainPicture;
    private String content;
    private String price;
}
