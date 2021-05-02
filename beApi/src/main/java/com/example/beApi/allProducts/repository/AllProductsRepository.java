package com.example.beApi.allProducts.repository;

import com.example.beApi.allProducts.domain.AllProducts;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllProductsRepository extends JpaRepository<AllProducts, Long> {
}
