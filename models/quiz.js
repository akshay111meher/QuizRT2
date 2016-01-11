var mongoose = require('mongoose');


var quizSchema = mongoose.Schema({
  quizId: {type:String, unique:true},
  multiplier: Number,
  questions : []
});

Quiz = mongoose.model('Quiz', quizSchema,'quiz_questions_demo_collection');

module.exports = Quiz;
