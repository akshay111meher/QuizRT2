var maxPlayers = 3;
var arrayOfPlayers = [];
module.exports = function(server) {
  var io = require('socket.io')(server);
  io.on('connection', function(client) {
    client.on('join',function(data){

      console.log(data);
      arrayOfPlayers.push(client);
      console.log(arrayOfPlayers.length +"=total players");

      if(arrayOfPlayers.length == maxPlayers){
        arrayOfPlayers.forEach(function(player){
          player.emit('startGame','starting the game');
        });
      }

    });
  });
}
