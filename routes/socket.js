var maxPlayers = 3;
var allGames = [];
module.exports = function(server,sessionMiddleware) {
  var io = require('socket.io')(server);
  var Players = new Map();
  io.use(function(socket,next){
    sessionMiddleware(socket.request, socket.request.res, next);
  });

  io.on('connection', function(client) {
    client.on('join',function(data){
      console.log("##############################");
      client.score = 0;
      console.log(client.request.session.passport.user);
      console.log(client.request.session);
      console.log("##############################");
      Players.set(client.request.session.passport.user,client);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(Players.size);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

      if(Players.size == maxPlayers){
        var match = new game(makeid(),Players,false)
        allGames.push(match);
        Players = new Map();
      }

      for (var i = 0; i < allGames.length; i++) {
        if(allGames[i].isRunning == false){
          renderThegame(allGames[i]);
          allGames[i].isRunning == true;
        }
      }

    });
    client.on('disjoin',function(data){
      Players.delete(client.request.session.passport.user);
    });

    client.on('currentScore',function(data){
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      console.log(data);
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      var rankAndTopScore = getRankAndTopScore(data.gameID,data.score,client.request.session.passport.user);
      console.log(client.request.session.passport.user+"\n"+"rank is "+rankAndTopScore.rank);
      client.emit('takeRank',rankAndTopScore);
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
