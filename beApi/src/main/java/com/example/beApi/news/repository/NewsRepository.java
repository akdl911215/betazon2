package com.example.beApi.news.repository;

import com.example.beApi.news.domain.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
//    News getNewsNo(String newsNo);
    News findByNewsNo(String newsNo);
}
