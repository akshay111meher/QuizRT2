var play=new Map();
module.exports={
	players: play,
	addPlayer: function(topicId, sid, client, name, imageUrl){
		var clientData = {
			client:client,
			name:name,
			imageUrl: imageUrl
		};
		if(play.get(topicId)==null){
			var temp= new Map();
			temp.set(sid, clientData);
		 	play.set(topicId, temp);
		}
		else
			play.get(topicId).set(sid, clientData);
	},

	popPlayers: function(topicId){
		// play.get(topicId).delete(sid);
		// if(play.get(topicId).size==0)
		// 	play.delete(topicId);
			var topicPlayers=[];
		play.get(topicId).forEach(function(item, key, value){
			topicPlayers.push({
				sid: key,
				clientData: item
			});
		});
		play.delete(topicId);
		return topicPlayers;
	}
};
