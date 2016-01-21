
  var maxPlayers =4;
  var queueBuilder = require('./queueBuilder')();

  queueBuilder.addPlayer('topic1','raghav1');
  queueBuilder.addPlayer('topic2','raghav2');
  queueBuilder.addPlayer('topic2','raghav3');
  queueBuilder.addPlayer('topic1','raghav4');
  queueBuilder.addPlayer('topic2','raghav5');
  queueBuilder.addPlayer('topic1','raghav6');
  queueBuilder.addPlayer('topic1','raghav11');
  queueBuilder.addPlayer('topic2','raghav21');
  queueBuilder.addPlayer('topic2','raghav31');
  queueBuilder.addPlayer('topic1','raghav41');
  queueBuilder.addPlayer('topic2','raghav51');
  queueBuilder.addPlayer('topic1','raghav61');
  queueBuilder.addPlayer('topic1','raghav221');
  queueBuilder.addPlayer('topic1','raghav61111');
  queueBuilder.addPlayer('topic1','raghav61231');

  var topicPlayers= queueBuilder.getTopicPlayers();
  topicPlayerCount =function(){
    topicPlayers.forEach(function(item,key,value){
      if((topicPlayers.get(key).length)>=4)
        {
          console.log(topicPlayers.get(key).length);
          console.log(getPlayersfromTopic(key,maxPlayers));//4 is maxPlayers
        }
    });

  };


  getPlayersfromTopic=function(topicId,maxPlayers){

    var playerSet=[];

    for(i=0;i<maxPlayers;++i)
      {
    var player1 = queueBuilder.popPlayer(topicId);
    playerSet.push(player1);
      }
      return playerSet;
  };



console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
 topicPlayerCount();
 console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
topicPlayerCount();
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
