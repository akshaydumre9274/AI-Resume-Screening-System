package com.resumescreening.backend.controller;

import com.resumescreening.backend.service.RankingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RankingController {

    private final RankingService rankingService;

    public RankingController(RankingService rankingService) {
        this.rankingService = rankingService;
    }

    @GetMapping("/rank")
    public String getRanking() {
        return rankingService.getRanking();
    }
}