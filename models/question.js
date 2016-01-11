var mongoose = require('mongoose');


var questionSchema = mongoose.Schema({
  questionId: {type:String, unique:true},
  question : {type:String},
  option:[],
  correctIndex: Number,
  image: {type:String},
  topicId:[]
});

Question = mongoose.model('Question', questionSchema,'question_bank_collection');

module.exports = Question;
