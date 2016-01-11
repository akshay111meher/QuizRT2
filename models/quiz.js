var mongoose = require('mongoose');
var Question = require('./question')

var quizSchema = mongoose.Schema({
  quizId: {type:String, unique:true},
  multiplier: Number,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});

Quiz = mongoose.model('Quiz', quizSchema,'quiz_questions_demo_collection');

module.exports = Quiz;
