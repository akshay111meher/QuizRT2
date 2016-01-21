var TopicPlayerMap= require('./queueBuilder')();

//console.log();
TopicPlayerMap.addPlayer('topic1','raghav1');
TopicPlayerMap.addPlayer('topic2','raghav2');
TopicPlayerMap.addPlayer('topic2','raghav3');
TopicPlayerMap.addPlayer('topic1','raghav4');
TopicPlayerMap.addPlayer('topic2','raghav5');
TopicPlayerMap.addPlayer('topic1','raghav6');

// console.log(TopicPlayerMap.popPlayer('topic1'));
// console.log(TopicPlayerMap.popPlayer('topic1'));
// console.log(TopicPlayerMap.popPlayer('topic1'));
//
// console.log(TopicPlayerMap.popPlayer('topic2'));
//
// console.log(TopicPlayerMap.popPlayer('topic2'));
// console.log(TopicPlayerMap.popPlayer('topic2'));
console.log(JSON.stringify(TopicPlayerMap.getTopicPlayers(),null,4));
