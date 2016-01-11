var mongoose = require('mongoose');


var categorySchema = mongoose.Schema({

  categoryId: {type:String, unique:true},
  categoryName:String,
  categoryFilterCriteria : String,
  categoryLogo: String,
  categoryTopics: Array
},{strict:false});

category = mongoose.model('category', categorySchema, "category_collection");

module.exports = category;
