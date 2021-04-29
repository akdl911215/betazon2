package com.example.beApi.news.service;

import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.news.domain.News;
import com.example.beApi.news.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log
public class NewServiceImpl extends AbstractService<News> implements NewsService {

    private final NewsRepository newsRepository;

    @Override
    public Document connectUrl(String url) throws IOException {

        return Jsoup
                .connect(url)
                .method(Connection.Method.GET)
                .userAgent("Mozilla/5.0 (X11; Linux x86_64; rv:10.0) " +
                        "Gecko/20100101 Firefox/10.0 " +
                        "AppleWebKit/537.36 (KHTML, like Gecko) " +
                        "Chrome/51.0.2704.106 Safari/537.36")
                .execute().parse();
    }

    @Override
    public List<News> newsFindAll() {
        return null;
    }

    @Override
    public void crawlingHome() {

    }

    @Override
    public Optional<News> findByNewsNo(String newsNo) {
        Optional.ofNullable(newsRepository.findByNewsNo(newsNo)).ifPresent(System.out::println);
        return Optional.ofNullable(newsRepository.findByNewsNo(newsNo));
    }

    @Override
    public void optionalinit(String news) {
        Optional<String> empty = Optional.empty(); // Optional Initializer
    }

    @Override
    public Long saveAll(String category) throws IOException {
        Document document = connectUrl("https://news.daum.net/" + category);
        newsRepository.deleteAll();

        Elements elements = document.select("div.cont_aside>ol>li>strong>a");

        int count = 0;
        for (int i = 0; i < elements.size(); i++) {
           News news = new News();

            news.setTitle(elements.get(i).text());
            news.setAddress(elements.get(i).attr("href"));
            news.setCategory(category);
//            newsRepository.save(news);

            count++;
            System.out.println("********** News 정보: " + news.toString());
        }
        System.out.println("********** 크롤링 카운트: " + count);
        return 0L;
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
