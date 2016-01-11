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
  followers:Number,
  following:Number,
  wins:Number,
  topicsPlayed:[],
  questions:[],
  games:[]
},{strict:false}
);

Profile = mongoose.model('Profile', profileSchema, "profile_collection");

module.exports = Profile;
