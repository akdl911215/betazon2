package com.example.beApi.news.service;

import com.example.beApi.news.domain.News;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface NewsService {
    public Document connectUrl(String url) throws IOException;
    public List<News> newsFindAll();
    //public List<HomeNews> homeNewsFindAll();
    public void crawlingHome();

//    public ClickedNews crawlingOne(String newsNo);
    public Optional<News> findByNewsNo(String newsNo);
    public void optionalinit(String news);
    public Long saveAll(String category) throws IOException;
}