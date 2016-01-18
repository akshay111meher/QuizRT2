fs = require('fs');
var slugify = require('slugify');
var Category = require('../models/category.js');


 fs.readFile('categories.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var json=JSON.parse(data);

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://172.23.238.253/quizRT');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
  // console.log('connection open');
//console.log(json);

console.log(json.length);
 for(i=0;i<json.length;++i)
 {
 var category1 = new Category(json[i]);

    category1.pre('save', function(next) {
      category1._id=slugify(json[i].categoryName);
    next();
    });
    category1.save(function(err){
    if ( err ) console.log(err);
    console.log("Category Saved Successfully");
 });
 }
 console.log('closing mongo');
 //mongoose.disconnect();
 });//end once


});//end readfile
