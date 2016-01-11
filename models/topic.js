var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
  topicId: {type:String, unique:true},
  topicName: String,
  topicIcon: String,
  topicCategory: Array,
  topicDescription: String,
},{strict:false});

Topic = mongoose.model('Topic', topicSchema, "topics_collection");

module.exports = Topic;
