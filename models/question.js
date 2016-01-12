var mongoose = require('mongoose');


var questionSchema = mongoose.Schema({
  questionId: {type:String, unique:true},
  image: String,
  question : String,
   correctIndex: Number,
  options: Array,
  topicId:Array
}, {strict: false});

Question = mongoose.model('Question', questionSchema,'question_bank_collection');

module.exports = Question;
