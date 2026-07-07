package com.resumescreening.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/upload")
@CrossOrigin(origins = "http://localhost:5173")
public class UploadController {

    // Change these paths if your project is in another location
    private static final String JOB_FOLDER =
            "../ai-service/uploads/job/";

    private static final String RESUME_FOLDER =
            "../ai-service/uploads/resumes/";

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Backend Running Successfully");
    }

    @PostMapping("/job")
    public ResponseEntity<String> uploadJob(
            @RequestParam("file") MultipartFile file) throws IOException {

        Files.createDirectories(Paths.get(JOB_FOLDER));

        // Delete old job description
        File folder = new File(JOB_FOLDER);
        File[] files = folder.listFiles();

        if (files != null) {
            for (File f : files) {
                f.delete();
            }
        }

        Path path = Paths.get(JOB_FOLDER + file.getOriginalFilename());

        Files.copy(file.getInputStream(), path);

        return ResponseEntity.ok(
                "Job Description Uploaded Successfully");
    }

    @PostMapping("/resumes")
    public ResponseEntity<String> uploadResumes(
            @RequestParam("files") MultipartFile[] files) throws IOException {

        Files.createDirectories(Paths.get(RESUME_FOLDER));

        // Delete old resumes
        File folder = new File(RESUME_FOLDER);
        File[] oldFiles = folder.listFiles();

        if (oldFiles != null) {
            for (File f : oldFiles) {
                f.delete();
            }
        }

        for (MultipartFile file : files) {

            Path path = Paths.get(
                    RESUME_FOLDER + file.getOriginalFilename());

            Files.copy(file.getInputStream(), path);
        }

        return ResponseEntity.ok(
                files.length + " Resumes Uploaded Successfully");
    }
}