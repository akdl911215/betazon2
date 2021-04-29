package com.example.beApi.cgv.service;

import com.example.beApi.bugs.domain.Bugs;
import com.example.beApi.cgv.domain.Cgvs;
import org.jsoup.nodes.Document;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface CgvService {

    public Long saveAll(String category) throws IOException;
    public Document connectUrl(String url) throws IOException;
    public List<Cgvs> CgvsFindAll();
    public void crawlingHome();

    public Optional<Cgvs> findByCgvsNo(String cgvsNo);
    public void optionalinit(String cgvs);
}
