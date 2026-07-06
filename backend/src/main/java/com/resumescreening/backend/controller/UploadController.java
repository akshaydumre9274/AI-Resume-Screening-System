package com.resumescreening.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/upload")
@CrossOrigin(origins = "http://localhost:5173")
public class UploadController {

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Backend Running Successfully");
    }

    @PostMapping("/job")
    public ResponseEntity<String> uploadJob(
            @RequestParam("file") MultipartFile file) {

        return ResponseEntity.ok(
                "Job Description Uploaded : " + file.getOriginalFilename());
    }

    @PostMapping("/resumes")
    public ResponseEntity<String> uploadResumes(
            @RequestParam("files") MultipartFile[] files) {

        return ResponseEntity.ok(
                files.length + " Resumes Uploaded Successfully");
    }
}