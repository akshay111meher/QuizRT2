
module.exports = function(){

  var maxPlayers =4;
  var queueBuild = require('./queueBuilder')();
  var topicPlayers= queueBuild.getTopicPlayers();

  function getPlayersfromTopic(topicId,maxPlayers){
    var playerSet=[];

    for(i=0;i<maxPlayers;++i)
      {
        playerSet.push(queueBuild.popPlayer(topicId));
      }
      return playerSet;
  };

 return{

   queueBuilder : queueBuild,


  topicPlayerCount : function(){
    var temp= [];
    topicPlayers.forEach(function(item,key,value){
      if((topicPlayers.get(key).length)>=maxPlayers)
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
