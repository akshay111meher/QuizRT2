var mongoose = require('mongoose');


var questionSchema = mongoose.Schema({

  image: String,
  question : String,
  correctIndex: Number,
  options: Array,
  topicId:Array
});

Question = mongoose.model('Question', questionSchema,'question_bank_collection');

module.exports = Question;
