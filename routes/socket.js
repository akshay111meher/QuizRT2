var gameManager = require('./gameManager2/gameManager2.js');
var leaderBoard = require('./gameManager2/leaderboard.js');
var maxPlayers=2;

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
    client.on('getResult',function(data){
      var tempLeaderBoard=[];
      leaderBoard.leaderBoard.get(data).forEach(function(player) {
        var temp={
          'sid': player.sid,
          'name': player.name,
          'imageUrl': player.imageUrl,
          'score': player.score
        };
        console.log("----------------------------------------");
        console.log(player);
        console.log("----------------------------------------");
        tempLeaderBoard.push(temp);
        console.log("++++++++++++++++++++++++++++++++++++++++");
        console.log(tempLeaderBoard);
        console.log("++++++++++++++++++++++++++++++++++++++++");
    //     //  Players.get(data1.players[1]).join(gameID,function(){
    //     //    io.in(gameID).emit('startGame',"this is game id "+gameID);
    //     //  });
    //      data1.players.forEach(function(player,index){
    //         Players.get(player).join(gameID);
    //         if(index == data1.players.length - 1){
    //         }
      });
      client.emit('takeResult',tempLeaderBoard);
    });
    client.on('confirmAnswer',function(data){
      if(data.ans =='correct'){
        //increment correct of allplayers
        //decrement unsawered of all players
        leaderBoard.leaderBoard.get(data.gameID).forEach(function(player){
          player.client.emit('isCorrect');
        });
      }
      else{
        //increment wrong of allplayers
        //decrement unsawered of all players
        leaderBoard.leaderBoard.get(data.gameID).forEach(function(player){
          player.client.emit('isWrong');
        });
      }
    });
    client.on('updateStatus',function(data){
      // leaderBoard.addPlayer(data.gameID,client.request.session.passport.user,client,data.name,data.score,data.image);
      console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      console.log(data);
      console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      leaderBoard.updateScore(data.gameID, client.request.session.passport.user, data.score);
      //
      // arrayofPlayers=leaderBoard.getGamePlayers(data.gameID);

      var topperDat=leaderBoard.leaderBoard.get(data.gameID)[0];
      console.log("******************************************************************");
      console.log(topperDat);
      console.log("*******************************************************************");

      var len = leaderBoard.leaderBoard.get(data.gameID).length;
      console.log("99999999999999999999999999999999999999999999999999");
      console.log(len);
      console.log("99999999999999999999999999999999999999999999999999");

      // for (var i = 0; i <leaderBoard.leaderBoard.get(data.gameID).length; i++) {
      //   if (leaderBoard.leaderBoard.get(data.gameID)[i].sid == client.request.session.passport.user){
      //     myRan= i+1;
      //   }
      // }
      // console.log("******************************************************************");
      // console.log(myRan);
      // console.log("*******************************************************************");

      // client.emit('takeScore', {myRank:myRan});
      leaderBoard.leaderBoard.get(data.gameID).forEach(function(player){
        var myRan=0;
        for (var i = 0; i <leaderBoard.leaderBoard.get(data.gameID).length; i++) {
          if (leaderBoard.leaderBoard.get(data.gameID)[i].sid == player.client.request.session.passport.user){
            myRan= i+1;
          }
        }
        player.client.emit('takeScore', {myRank: myRan,topperScore:leaderBoard.leaderBoard.get(data.gameID)[0].score,topperImage:leaderBoard.leaderBoard.get(data.gameID)[0].imageUrl});
      });
    });

    client.on('join',function(data){
      gameManager.addPlayer(data.tid, client.request.session.passport.user, client,data.name,data.image);

      if(gameManager.players.get(data.tid).size==maxPlayers){
        var topicPlayers= gameManager.popPlayers(data.tid);
        console.log("666666666666666666666666666666666");
        console.log(topicPlayers);
        console.log("666666666666666666666666666666666");

        var gameId= makeid();



        topicPlayers.forEach(function(player){
        leaderBoard.addPlayer(gameId, player.sid, player.clientData.client, player.clientData.name, 0,player.clientData.imageUrl);
        player.clientData.client.emit('startGame',{gameId:gameId,maxPlayers:maxPlayers});
        });
      }

    });


    client.on('leaveGame',function(data){
      console.log(data);
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
