package com.example.SpringMongoProject.Controller;

import com.example.SpringMongoProject.Model.Data;
import com.example.SpringMongoProject.repository.DataRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    @Autowired
    private DataRepository dataRepository;

    @GetMapping("/data")
    public ResponseEntity<List<Data>> getData() {
        try {
            List<Data> dataList = dataRepository.findFirst30();
            return ResponseEntity.ok().body(dataList);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
