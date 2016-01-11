var mongoose = require('mongoose');

var topicSchema = mongoose.Schema({

  topicId: {type:String, unique:true},
  topicName: String,
  topicIcon: String,
  topicCategory: String,
  topicDescription: String,

},{strict:false});

Topics = mongoose.model('Topics', topicSchema, "topics_collection");

module.exports = Topics;
