var topicPlayers= new Map();

module.exports = function(){

	return {

		getTopicPlayers: function(){
			console.log(topicPlayers);
			return topicPlayers;
		},
		
		addPlayer: function(topicId,sessionId)
		{
			var tempQueue=topicPlayers.get(topicId);
			if(tempQueue==null)
			{
			 tempQueue=[];
			 topicPlayers.set(topicId,tempQueue);
			}
			tempQueue=topicPlayers.get(topicId);
			tempQueue.push(sessionId);
		},

		popPlayer: function(topicId)
		{
			var tempQueue=topicPlayers.get(topicId);
			if(!tempQueue)
			{
				return null;
			}
			var player=tempQueue[0];
			tempQueue.shift();
			if(tempQueue.length==0)
			{
				topicPlayers.delete(topicId);
			}
			return player;
		},

		countPlayers : function(topicId)
		{
			var tempQueue=topicPlayers.get(topicId);
			if(tempQueue==null)
			 return 0;

			return tempQueue.length;
		}
	}
};
