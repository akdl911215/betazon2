package com.example.beApi.bugs.service;

import com.example.beApi.bugs.domain.Bugs;
import com.example.beApi.news.domain.News;
import org.jsoup.nodes.Document;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface BugsService {
    public Long saveAll(String category) throws IOException;
    public Document connectUrl(String url) throws IOException;
    public List<News> newsFindAll();
    public void crawlingHome();

    public Optional<Bugs> findbyBugsNo(String bugsNo);
    public void optionalinit(String bugs);
}
