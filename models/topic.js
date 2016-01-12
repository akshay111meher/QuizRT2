var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
  topicName: String,
  topicIcon: String,
  topicCategory: Array,
  topicDescription: String,
});

Topic = mongoose.model('Topic', topicSchema, "topics_collection");

module.exports = Topic;
