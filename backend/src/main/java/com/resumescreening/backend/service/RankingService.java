package com.resumescreening.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RankingService {

    public String getRanking() {

        RestTemplate restTemplate = new RestTemplate();

        String url = "http://127.0.0.1:5000/rank";

        return restTemplate.getForObject(url, String.class);
    }
}