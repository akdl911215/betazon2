package com.example.beApi.news.service;

import com.example.beApi.cmm.controller.Crawler;
import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.cmm.service.CrawlerServiceImpl;
import com.example.beApi.news.domain.News;
import com.example.beApi.news.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log
public class NewServiceImpl extends AbstractService<News> implements NewsService {

    private final NewsRepository newsRepository;

    @Override
    public List<News> saveAll(Crawler crawler) throws IOException {

        Document document = new CrawlerServiceImpl().connectUrl(crawler.getUrl()); // "https://news.daum.net/society"
        newsRepository.deleteAll();

        Elements elements = document.select(crawler.getCssQuery());
        // "div.cont_aside>ol>li>strong>a"

        List<News> newsList = new ArrayList<>();

        for (int i = 0; i < elements.size(); i++) {
            News news = new News();

            news.setTitle(elements.get(i).text());
            news.setAddress(elements.get(i).attr("href"));
            news.setCategory(crawler.getCategory());
            newsList.add(news);
//            newsRepository.save(news);

        }

        return newsList;
    }

    @Override
    public Page<News> findAll(final Pageable pageable){
        return newsRepository.findAll(pageable);
    }


    @Override
    public Long save(News news) {
        return (newsRepository.save(news) != null) ? 1L : 0L;
    }

    @Override
    public Optional<News> findById(Long id) {
        return newsRepository.findById(id);
    }

    @Override
    public List<News> findAll() {
        return newsRepository.findAll();
    }

    @Override
    public Long count() {
        return newsRepository.count();
    }

    @Override
    public Optional<News> getOne(Long id) {
        return Optional.of(newsRepository.getOne(id));
    }

    @Override
    public Long delete(News news) {
        newsRepository.delete(news);

        return (findById(news.getNewsId()).orElse(null) == null) ? 1L : 0L;
    }

    @Override
    public Boolean existsById(long id) {
        return newsRepository.existsById(id);
    }


}
