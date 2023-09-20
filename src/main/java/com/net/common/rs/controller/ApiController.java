package com.net.common.rs.controller;

import com.net.common.rs.services.JpaCacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Create a controller class
@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private JpaCacheService jpaCacheService;

    @GetMapping("/some-endpoint")
    public ResponseEntity<String> getSomeData() {
        // Replace this with the actual data you want to return

        jpaCacheService.clearJpaCache();
        String responseData = "Sample data from Spring Boot API + jpa cache cleand ";
        return ResponseEntity.ok(responseData);
    }
}
