var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({

  categoryId: {type:String, unique:true},
  categoryName:String,
  categoryIcon: String,
  categoryTopics: Array
},{strict:false});

Category = mongoose.model('category', categorySchema, "category_collection");

module.exports = Category;
