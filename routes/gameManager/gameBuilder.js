
module.exports = function(){

  var maxPlayers =2;
  var queueBuild = require('./queueBuilder')();
  var topicPlayers= queueBuild.getTopicPlayers();

  function getPlayersfromTopic(topicId,maxPlayers){
    var playerSet=[];

    for(i=0;i<maxPlayers;++i)
      {
        var player1 = queueBuild.popPlayer(topicId);
        //console.log(topicId+","+player1);
        playerSet.push(player1);
      }
      return playerSet;
  };

 return{

   queueBuilder : queueBuild,


  topicPlayerCount : function(){
    var temp= [];
    topicPlayers.forEach(function(item,key,value){
      if((topicPlayers.get(key).length)>=4)
        {
          data = {
            topic: key,
            players:   getPlayersfromTopic(key,maxPlayers)
          };
          temp.push(data);
        }

    });

    return temp;

  }

}
};
