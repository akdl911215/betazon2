package com.example.beApi.cgv.service;

import com.example.beApi.bugs.domain.Bugs;
import com.example.beApi.cgv.domain.Cgvs;
import com.example.beApi.cgv.repository.CgvRepository;
import com.example.beApi.cmm.service.AbstractService;
import lombok.RequiredArgsConstructor;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CgvServiceImpl implements CgvService {

    private final CgvRepository repository;

//    @Override
//    public Long save(Cgvs cgvs) {
//        return (repository.save(cgvs) != null) ? 1L : 0L;
//    }
//
//    @Override
//    public Optional<Cgvs> findById(Long id) {
//        return repository.findById(id);
//    }
//
//    @Override
//    public List<Cgvs> findAll() {
//        return repository.findAll();
//    }
//
//    @Override
//    public Long count() {
//        return repository.count();
//    }
//
//    @Override
//    public Optional<Cgvs> getOne(Long id) {
//        return Optional.of(repository.getOne(id));
//    }
//
//    @Override
//    public Long delete(Cgvs cgvs) {
//        repository.delete(cgvs);
//        return (findById(cgvs.getCgvsId()).orElse(null) == null) ? 1L : 0L;
//    }
//
//    @Override
//    public Boolean existsById(long id) {
//        return repository.existsById(id);
//    }
//
//
//    @Override
//    public Long saveAll(String category) throws IOException {
//        Document document = connectUrl("http://www.cgv.co.kr/movies/" + category);
//        repository.deleteAll();
//
//        Elements elementsCgvs = document.select("div.sect-movie-chart>ol>li>div>a>span");
//
//        int count = 0;
//        for (int i = 0; i < elementsCgvs.size(); i++) {
//            Cgvs cgvs = new Cgvs();
//
//            cgvs.setTitle(elementsCgvs.get(i).text());
//            cgvs.setAddress(elementsCgvs.get(i).attr("href"));
//            cgvs.setCategory(category);
//
//            count++;
//            System.out.println("************* Bugs 정보 : " + cgvs.toString());
//        }
//        System.out.println("++++++++ 크로링 카운트: " + count);
//
//        return 0L;
//    }
//
//    @Override
//    public Document connectUrl(String url) throws IOException {
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
//    public List<Cgvs> CgvsFindAll() {
//        return repository.cgvsFindALl();
//    }
//
//    @Override
//    public void crawlingHome() {
//
//    }
//
//    @Override
//    public Optional<Cgvs> findByCgvsNo(String cgvsNo) {
//        return Optional.ofNullable(repository.findByCgvsNo(cgvsNo));
//    }
//
//
//
//    @Override
//    public void optionalinit(String cgvs) {
//
//    }
}
