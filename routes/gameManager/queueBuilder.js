var map=new Map();

module.exports= function(sid, topicId){
	map.set(topicId, addElement(sid, topicId));
}


var addElement = new function(sid, topicId){
	var temp = map.get(topicId);
	temp.push(sid);
	return temp;
}