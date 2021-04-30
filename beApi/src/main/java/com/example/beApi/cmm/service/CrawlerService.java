package com.example.beApi.cmm.service;

import com.example.beApi.cmm.controller.Crawler;

import java.io.IOException;
import java.util.List;

public interface CrawlerService {
    List<?> scrapBugs(Crawler cralwer) throws IOException;
}
