var mongoose = require('mongoose');
var Question = require('./question')

var quizSchema = mongoose.Schema({

  topicId: String,
  multiplier: Number,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  gameId: {type:String, unique:true}

});

Quiz = mongoose.model('Quiz', quizSchema,'quiz_collection');

module.exports = Quiz;
