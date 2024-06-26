package com.example.SpringMongoProject.repository;

import com.example.SpringMongoProject.Model.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DataRepository extends MongoRepository<Data, String> {

    default List<Data> findFirst30() {
        Pageable pageable = PageRequest.of(0, 100);
        return findAll(pageable).getContent();
    }
}
