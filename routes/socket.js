var maxPlayers = 3;
var arrayOfPlayers = [];
module.exports = function(server) {
  var io = require('socket.io')(server);
  io.on('connection', function(client) {
    client.on('join',function(data){

      console.log(data);
      console.log(arrayOfPlayers.indexOf(client));
      
      if(arrayOfPlayers.indexOf(client) == -1){
        arrayOfPlayers.push(client);
      }
      console.log(arrayOfPlayers.length +"=total players");

      if(arrayOfPlayers.length == maxPlayers){
        arrayOfPlayers.forEach(function(player){
          player.emit('startGame','starting the game');
        });
      }

    });
    client.on('disjoin',function(data){
      delete arrayOfPlayers[arrayOfPlayers.indexOf(client)];
    });
  });
}
