var mongoose = require('mongoose');
var Topic=require('./Topic');

var profileSchema = mongoose.Schema({
  userId: {type:String, unique:true},
  name:String,
  age:Number,
  imageLink:String,
  country:String,
  flagLink:String,
  badge:String,
  totalGames:Number,
  wins:Number,
  topicsPlayed:[{
    gamesWon: Number,
    gamesPlayed:Number,
    level:Number,
    isFollowed:Number,
    points:Number,
    topicId: {type:String, ref: 'Topic'}}]
},{strict:false}
);

Profile = mongoose.model('Profile', profileSchema, "profile_collection");

module.exports = Profile;
