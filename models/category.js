var mongoose = require('mongoose');
var Topic = require('./topic');


var categorySchema = mongoose.Schema({

  _id: String,
  categoryName:String,
  categoryIcon: String,
  categoryTopics: [{ type: String, ref: 'Topic' }]
});

Category = mongoose.model('category', categorySchema, "category_collection");

module.exports = Category;
