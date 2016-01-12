var express = require('express');
var fs = require('fs');
var router = express.Router();
var mongoose = require('mongoose');
var Category;
var categoryData;

var Category = require("../models/category");
// var Topic=require("../models/Topic");

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.23.238.253/quizRT');

var db = mongoose.connection;
  // console.log("this is form profile data"+req.params.id);
    Category.find()
      .populate("categoryTopics")
          .exec(function(err,data){
            categoryData = data;
            console.log(JSON.stringify(categoryData, null, 4));
          });
