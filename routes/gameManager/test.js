var GameBuilder= require('./gameBuilder')();

GameBuilder.queueBuilder.addPlayer('topic1','raghav1');
GameBuilder.queueBuilder.addPlayer('topic2','raghav2');
GameBuilder.queueBuilder.addPlayer('topic2','raghav3');
GameBuilder.queueBuilder.addPlayer('topic1','raghav4');
GameBuilder.queueBuilder.addPlayer('topic2','raghav5');
GameBuilder.queueBuilder.addPlayer('topic1','raghav6');
GameBuilder.queueBuilder.addPlayer('topic1','raghav11');
GameBuilder.queueBuilder.addPlayer('topic2','raghav21');
GameBuilder.queueBuilder.addPlayer('topic2','raghav31');
GameBuilder.queueBuilder.addPlayer('topic1','raghav41');
GameBuilder.queueBuilder.addPlayer('topic2','raghav51');
GameBuilder.queueBuilder.addPlayer('topic1','raghav61');
GameBuilder.queueBuilder.addPlayer('topic1','raghav221');
GameBuilder.queueBuilder.addPlayer('topic1','raghav61111');
GameBuilder.queueBuilder.addPlayer('topic1','raghav61231');

//console.log(GameBuilder.queueBuilder);

// console.log(GameBuilder.queueBuilder.getTopicPlayers().get('topic1'));


console.log(GameBuilder.topicPlayerCount());
