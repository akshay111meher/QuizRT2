var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var bodyParser = require('body-parser');
var Category = require("../models/category");
var Topic = require("../models/topic");
var Profile =require("../models/profile");
var topicInst;
var topic1={};
 router.route('/categories')
  .get(function(req, res){
    Category.find()
      .populate("categoryTopics")
          .exec(function(err,categories){
            if(err){
                return res.send(err);
              }
            return res.json(categories);
          });
 	});
  router.route('/category/:id')
	.get(function(req, res){
		Category.findById(req.params.id)
      .populate("categoryTopics")
        .exec(function(err, category){
      			if(err)
      				return res.send(err);
      			return res.json(category);
		});
	});
  router.route('/topic/:id')
    .get(function(req,res){
      if(req.session.user.local){
      var usr = req.session.user.local.username;
    }
    if(req.session.user.facebook){
    var usr = req.session.user.facebook.id;
  }

      topicInst = req.params.id;
      console.log("/////////////////////////////////////////////////");
      console.log(topicInst);
      req.session.tid = topicInst;
      console.log("/////////////////////////////////////////////////");
      console.log(req.session.tid);
      console.log("/////////////////////////////////////////////////");
        Profile.findOne({userId: usr})
         .exec(function(err,data){

        topic1.topicWins=0;
        topic1.topicLosses=0;
        topic1["topicLevel"]=1;
        topic1["levelPercentage"]=0;
        topic1["isFollowed"]= false;

        var topicsPlayed=data["topicsPlayed"];
         var l=topicsPlayed.length;
         for(var i=0;i<l;++i)
         {
           if(topicsPlayed[i].topicId === req.params.id)
            break;
         }
         if(i!=l)
         {
         var topic2=topicsPlayed[i];
         topic1["topicWins"]=topic2["gamesWon"];
         topic1["topicLosses"]=topic2["gamesPlayed"]-topic2["gamesWon"];
         topic1["topicLevel"]=topic2["level"];
         topic1["levelPercentage"]=50;
         topic1["isFollowed"]=topic2["isFollowed"];
       }
      Topic.findById(req.params.id)
       .exec(function(err,topic){
       if(err)
        return res.send(err);
        topic1.topicId=topic._id;
        topic1.topicName=topic.topicName;
        topic1.topicDescription=topic.topicDescription;
        topic1.topicIcon = topic.topicIcon;
        topic1.topicFollowers=topic.topicFollowers;
        console.log("######");
        console.log(topic1);
        res.json(topic1);
      });
      });
  })
  .put(function(req,res){
    if(req.session.user.local){
    var usr = req.session.user.local.username;
  }
  if(req.session.user.facebook){
  var usr = req.session.user.facebook.id;
}
      Profile.findOne({userId: usr})
       .exec(function(err,data){
      var topicsPlayed=data["topicsPlayed"];
       var l=topicsPlayed.length;
       var tid=req.params.id;
       req.session.tid=tid;
       for(var i=0;i<l;++i)
       {
         if(topicsPlayed[i].topicId === req.params.id)
          break;
       }
       if(i==l)
       {
         var topic3={
             "topicId":req.params.id,
             "gamesPlayed":0,
             "gamesWon":0,
             "level":1,
              "isFollowed":false,
              "points":0
         }
         data.topicsPlayed.push(topic3);
       }
       data.topicsPlayed[i].isFollowed=!(data.topicsPlayed[i].isFollowed);
       data.save(function(err){
       if ( err ) console.log(err);
       var topic2=topicsPlayed[i];
       topic1["topicWins"]=topic2["gamesWon"];
       topic1["topicLosses"]=topic2["gamesPlayed"]-topic2["gamesWon"];
       topic1["topicLevel"]=topic2["level"];
       topic1["levelPercentage"]=50;
       topic1["isFollowed"]=topic2["isFollowed"];

    Topic.findById(req.params.id)
     .exec(function(err,topic){
     if(err)
      return res.send(err);
    topic1.topicId=topic._id;
    topic1.topicName=topic.topicName;
    topic1.topicDescription=topic.topicDescription;
    topic1.topicIcon = topic.topicIcon;
    topic1.topicFollowers=topic.topicFollowers;
    res.json(topic1);
    });
    });
});
});
module.exports= router;
