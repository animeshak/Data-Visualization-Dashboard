package com.example.SpringMongoProject.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "datas")
public class Data {

    @Id
    public String id;
    public String end_year;
    public int intensity;
    public String sector;
    public String topic;
    public String insight;
    public String url;
    public String region;
    public String start_year;
    public String impact;
    public String added;
    public String published;
    public String country;
    public double relevance;
    public String pestle;
    public String source;
    public String title;
    public double likelihood;

}
