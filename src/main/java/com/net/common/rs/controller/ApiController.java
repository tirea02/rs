package com.net.common.rs.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Create a controller class
@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/some-endpoint")
    public ResponseEntity<String> getSomeData() {
        // Replace this with the actual data you want to return
        String responseData = "Sample data from Spring Boot API";
        return ResponseEntity.ok(responseData);
    }
}
