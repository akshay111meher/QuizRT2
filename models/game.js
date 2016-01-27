var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({

  gId: {type:String, unique:true},
  players:[{
    userId: String,
    score: Number,
    rank:Number
  }]
});

Game = mongoose.model('Game', gameSchema,'game_collection');

module.exports = Game;
