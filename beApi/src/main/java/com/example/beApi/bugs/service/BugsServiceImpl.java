package com.example.beApi.bugs.service;

import com.example.beApi.bugs.repository.BugsRepository;
import com.example.beApi.cmm.service.AbstractService;
import com.example.beApi.bugs.domain.Bugs;
import com.example.beApi.news.domain.News;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log
public class BugsServiceImpl implements BugsService{

    private final BugsRepository repository;
//
//    @Override
//    public Document connectUrl(String url) throws IOException {
//
//        return Jsoup
//                .connect(url)
//                .method(Connection.Method.GET)
//                .userAgent("Mozilla/5.0 (X11; Linux x86_64; rv:10.0) " +
//                        "Gecko/20100101 Firefox/10.0 " +
//                        "AppleWebKit/537.36 (KHTML, like Gecko) " +
//                        "Chrome/51.0.2704.106 Safari/537.36")
//                .execute().parse();
//    }
//
//    @Override
//    public List<Bugs> bugsFindAll() {
//        return repository.bugsFindALl();
//    }
//
//    @Override
//    public void crawlingHome() {
//
//    }
//
//    @Override
//    public Optional<Bugs> findByBugsNo(String bugsNo) {
//        return Optional.ofNullable(repository.findByBugsNo(bugsNo));
//    }
//
//    @Override
//    public void optionalinit(String bugs) {
//
//    }
//
//    @Override
//    public Long save(Bugs bugs) {
//
//        return (repository.save(bugs) != null) ? 1L : 0L;
//    }
//
//    @Override
//    public Optional<Bugs> findById(Long id) {
//        return repository.findById(id);
//    }
//
//    @Override
//    public List<Bugs> findAll() {
//        return repository.findAll();
//    }
//
//    @Override
//    public Long count() {
//        return repository.count();
//    }
//
//    @Override
//    public Optional<Bugs> getOne(Long id) {
//        return Optional.of(repository.getOne(id));
//    }
//
//    @Override
//    public Long delete(Bugs bugs) {
//        repository.delete(bugs);
//        return (findById(bugs.getBugsId()).orElse(null) == null) ? 1L : 0L;
//    }
//
//    @Override
//    public Boolean existsById(long id) {
//        return repository.existsById(id);
//    }
//
//    @Override
//    public Long saveAll(String category) throws IOException {
//        Document document = connectUrl("https://music.bugs.co.kr/" + category);
//        repository.deleteAll();
//
//        Elements elementsBugs = document.select("table.list>tbody>tr>td>p>a");
//
//        int count = 0;
//        for (int i = 0; i < elementsBugs.size(); i++) {
//            Bugs bugs = new Bugs();
//
//            bugs.setTitle(elementsBugs.get(i).text());
//            bugs.setAddress(elementsBugs.get(i).attr("href"));
//            bugs.setCategory(category);
//
//            count++;
//            System.out.println("************* Bugs 정보 : " + bugs.toString());
//        }
//        System.out.println("++++++++ 크로링 카운트: " + count);
//
//        return 0L;
//    }

}