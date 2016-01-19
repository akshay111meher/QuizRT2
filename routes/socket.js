var maxPlayers = 3;
var arrayOfPlayers = [];
module.exports = function(server,sessionMiddleware) {
  var io = require('socket.io')(server);
  var myMap = new Map();
  io.use(function(socket,next){
    sessionMiddleware(socket.request, socket.request.res, next);
  });

  io.on('connection', function(client) {
    client.on('join',function(data){
      console.log("##############################");
      console.log(client.request.session.passport.user);
      console.log("##############################");
      myMap.set(client.request.session.passport.user,client);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(myMap.size);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

    });
    client.on('disjoin',function(data){
      myMap.delete(client.request.session.passport.user);
    });
  });

}
