var mongoose = require('mongoose');


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
  topicsPlayed:[]
},{strict:false}
);

Profile = mongoose.model('Profile', profileSchema, "profile_collection");

module.exports = Profile;
