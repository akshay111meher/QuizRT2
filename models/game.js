var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({

  gId: String,
  quizId: String,
  players:[{
    userId: String,
    score: Number,
    rank:number
  }];
});

Game = mongoose.model('Game', gameSchema,'game_collection');

module.exports = Game;
