var mongoose = require('mongoose');


var topicsMainSchema = mongoose.Schema({

  categoryId: {type:String, unique:true},
  categoryName:String,
  categoryFilterCriteria : String,
  categoryLogo: String,
  categoryTopics: Array
},{strict:false});

topicsMain = mongoose.model('topicsMain', topicsMainSchema, "topics_main_collection");

module.exports = topicsMain;
