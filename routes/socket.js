var gameManager = require('./gameManager2/gameManager2.js');

var maxPlayers=2;
// var games_ready;
// var Players = new Map();
module.exports = function(server,sessionMiddleware) {
  var io = require('socket.io')(server);
  io.use(function(socket,next){
    sessionMiddleware(socket.request, socket.request.res, next);
  });
  io.on('disconnect',function(client){
      Players.delete(client.request.session.passport.user,client);
      client.request.session.destroy();
  })

  io.on('connection', function(client) {
    client.on('join',function(data){

      gameManager.addPlayer(data, client.request.sessionID, client);

      if(gameManager.players.get(data).size==maxPlayers){
        var topicPlayers= gameManager.popPlayers(data);


        console.log(topicPlayers);
      }


     //  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
     //  console.log(data);
     //  console.log("##############################");
     //  console.log(client.request.session.passport.user);
     //  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
     //  Players.set(client.request.session.passport.user,client);
     //  gameBuilder.queueBuilder.addPlayer(data,client.request.session.passport.user);
     //  games_ready = gameBuilder.topicPlayerCount();
     // if(games_ready.length!=0){
     //   games_ready.forEach(function(data1){
     //     console.log("11111111111111111111111111111111111111111111111111111111111");
     //     console.log(data1);
     //    console.log("11111111111111111111111111111111111111111111111111111111111");
     //     var gameID = makeid();
     //    //  Players.get(data1.players[0]).join(gameID);
     //    //  Players.get(data1.players[1]).join(gameID,function(){
     //    //    io.in(gameID).emit('startGame',"this is game id "+gameID);
     //    //  });
     //     data1.players.forEach(function(player,index){
     //        Players.get(player).join(gameID);
     //        if(index == data1.players.length - 1){
     //            io.in(gameID).emit('startGame',"this is game id "+gameID);
     //        }
     //     });
     //    //  io.emit('startGame',"this is game id "+gameID);
     //   });
     // }
     // else{

     // }

    });


    client.on('leaveGame',function(data){
      console.log(data);
      Players.delete(client.request.session.passport.user,client);
    });

    client.on('currentScore',function(data){
      // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      // console.log(data);
      // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      // var rankAndTopScore = getRankAndTopScore(data.gameID,data.score,client.request.session.passport.user);
      // console.log(client.request.session.passport.user+"\n"+"rank is "+rankAndTopScore.rank +"topscore is "+rankAndTopScore.topScore);
      // client.emit('takeRank',rankAndTopScore);
    });
  });

}

function renderThegame(matches){
  if(matches.Players.size < maxPlayers){

    }
    else{
      matches.Players.forEach(function(item,key,value){
        matches.Players.get(key).emit('startGame',matches.gameId);
      });
    }
};


function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

function game(gameId,Players,isRunning){
  this.isRunning = isRunning;
  this.gameId = gameId;
  this.Players = Players;
};

function getRankAndTopScore(gameId,score,sessionID){
  var rank =0;
  var topScore=score;
  var match = getMatch(gameId);
  match.Players.get(sessionID).score= score;
  match.Players.forEach(function(item,key,value){
    if(key != sessionID){
      if(match.Players.get(key).score > score)
        rank++;
      if(match.Players.get(key).score > score)
        topScore = match.Players.get(key).score;
    }
  });
  return {rank:rank+1,topScore:topScore};
};


function getMatch(gameId){
  for (var i = 0; i < allGames.length; i++) {
    if(allGames[i].gameId == gameId){
      return allGames[i];
    }
  }
  return null;
};
