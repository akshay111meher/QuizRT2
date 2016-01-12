var mongoose = require('mongoose');
var Topic = require('topic');


var categorySchema = mongoose.Schema({
  
  categoryId: {type:String, unique:true},
  categoryName:String,
  categoryFilterCriteria : String,
  categoryIcon: String,
  categoryTopics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }]
},{strict:false});

Category = mongoose.model('category', categorySchema, "category_collection");

module.exports = Category;
