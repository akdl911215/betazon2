package com.example.beApi.bugs.service;

import com.example.beApi.bugs.repository.BugsRepository;
import com.example.beApi.cmm.controller.Crawler;
import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.bugs.domain.Bugs;
import com.example.beApi.cmm.service.CrawlerServiceImpl;
import com.example.beApi.news.domain.News;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log
public class BugsServiceImpl extends AbstractService<Bugs> implements BugsService{

    private final BugsRepository repository;


    @Override
    public List<Bugs> saveAll(Crawler crawler) throws IOException {

        Document document = new CrawlerServiceImpl().connectUrl(crawler.getUrl()); // "https://music.bugs.co.kr/" + category
        repository.deleteAll();

        Elements elements = document.select(crawler.getCssQuery());
        // "table.list>tbody>tr>td>p>a"

        List<Bugs> newList = new ArrayList<>();

        for (int i =  0; i < elements.size(); i++) {
            Bugs bugs = new Bugs();

            bugs.setTitle(elements.get(i).text());
            bugs.setAddress(elements.get(i).attr("href"));
            bugs.setCategory(crawler.getCategory());
            newList.add(bugs);
        }
        return newList;
    }

    @Override
    public Page<Bugs> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Long save(Bugs bugs) {
        return (repository.save(bugs) != null) ? 1L : 0L;
    }

    @Override
    public Optional<Bugs> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<Bugs> findAll() {
        return repository.findAll();
    }

    @Override
    public Long count() {
        return repository.count();
    }

    @Override
    public Optional<Bugs> getOne(Long id) {
        return Optional.of(repository.getOne(id));
    }

    @Override
    public Long delete(Bugs bugs) {
        repository.delete(bugs);

        return (findById(bugs.getBugsId()).orElse(null) == null) ? 1L : 0L;
    }

    @Override
    public Boolean existsById(long id) {
        return repository.existsById(id);
    }
}
